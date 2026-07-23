import { readFile, readdir } from "node:fs/promises";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const distRoot = join(projectRoot, "dist");
const siteOrigin = "https://novaatlastur.com";

const requiredProperties = [
  "og:type",
  "og:title",
  "og:description",
  "og:url",
  "og:image",
  "og:image:secure_url",
  "og:image:width",
  "og:image:height",
  "og:image:alt",
];

const requiredNames = [
  "twitter:card",
  "twitter:title",
  "twitter:description",
  "twitter:image",
  "twitter:image:alt",
];

async function collectHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const path = join(directory, entry.name);
      return entry.isDirectory() ? collectHtmlFiles(path) : [path];
    }),
  );
  return files.flat().filter((path) => path.endsWith(".html"));
}

function attribute(tag, name) {
  return tag.match(new RegExp(`\\b${name}=["']([^"']+)["']`, "i"))?.[1];
}

function matchingMeta(html, attributeName, value) {
  return (html.match(/<meta\s+[^>]+>/gi) ?? []).filter(
    (tag) => attribute(tag, attributeName) === value,
  );
}

function canonicalLinks(html) {
  return (html.match(/<link\s+[^>]+>/gi) ?? []).filter(
    (tag) => attribute(tag, "rel") === "canonical",
  );
}

const failures = [];
const imagePaths = new Set();
const htmlFiles = await collectHtmlFiles(distRoot);

for (const file of htmlFiles) {
  const route = `/${relative(distRoot, file).replace(/index\.html$/, "")}`;
  const html = await readFile(file, "utf8");

  for (const property of requiredProperties) {
    const matches = matchingMeta(html, "property", property);
    if (matches.length !== 1) {
      failures.push(`${route}: expected one ${property}, found ${matches.length}`);
    }
  }

  for (const name of requiredNames) {
    const matches = matchingMeta(html, "name", name);
    if (matches.length !== 1) {
      failures.push(`${route}: expected one ${name}, found ${matches.length}`);
    }
  }

  const canonicals = canonicalLinks(html);
  const canonical = canonicals.length === 1 ? attribute(canonicals[0], "href") : undefined;
  const ogUrlTag = matchingMeta(html, "property", "og:url")[0];
  const ogUrl = ogUrlTag ? attribute(ogUrlTag, "content") : undefined;
  const ogImageTag = matchingMeta(html, "property", "og:image")[0];
  const ogImage = ogImageTag ? attribute(ogImageTag, "content") : undefined;
  const secureImageTag = matchingMeta(html, "property", "og:image:secure_url")[0];
  const secureImage = secureImageTag ? attribute(secureImageTag, "content") : undefined;
  const imageWidth = attribute(
    matchingMeta(html, "property", "og:image:width")[0] ?? "",
    "content",
  );
  const imageHeight = attribute(
    matchingMeta(html, "property", "og:image:height")[0] ?? "",
    "content",
  );
  const imageAlt = attribute(
    matchingMeta(html, "property", "og:image:alt")[0] ?? "",
    "content",
  );
  const twitterImage = attribute(
    matchingMeta(html, "name", "twitter:image")[0] ?? "",
    "content",
  );
  const twitterImageAlt = attribute(
    matchingMeta(html, "name", "twitter:image:alt")[0] ?? "",
    "content",
  );

  if (canonicals.length !== 1) {
    failures.push(`${route}: expected one canonical link, found ${canonicals.length}`);
  } else if (canonical !== ogUrl) {
    failures.push(`${route}: canonical and og:url differ`);
  }

  if (!canonical?.startsWith(`${siteOrigin}/`)) {
    failures.push(`${route}: canonical is not an absolute HTTPS site URL`);
  }

  if (!ogImage?.startsWith(`${siteOrigin}/og/`)) {
    failures.push(`${route}: og:image is not a stable, same-origin HTTPS /og/ URL`);
  } else {
    imagePaths.add(new URL(ogImage).pathname);
  }

  if (secureImage !== ogImage) {
    failures.push(`${route}: og:image:secure_url differs from og:image`);
  }

  if (twitterImage !== ogImage) {
    failures.push(`${route}: twitter:image differs from og:image`);
  }

  if (imageWidth !== "1200" || imageHeight !== "630") {
    failures.push(`${route}: metadata dimensions are not 1200x630`);
  }

  if (!imageAlt || twitterImageAlt !== imageAlt) {
    failures.push(`${route}: social image alt text is missing or inconsistent`);
  }
}

for (const pathname of imagePaths) {
  const imagePath = join(distRoot, pathname.slice(1));
  try {
    const metadata = await sharp(imagePath).metadata();
    if (metadata.width !== 1200 || metadata.height !== 630) {
      failures.push(`${pathname}: expected 1200x630, got ${metadata.width}x${metadata.height}`);
    }
  } catch (error) {
    failures.push(`${pathname}: cannot read generated image (${error.message})`);
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(
    `Validated ${htmlFiles.length} server-rendered pages and ${imagePaths.size} unique Open Graph images.`,
  );
}
