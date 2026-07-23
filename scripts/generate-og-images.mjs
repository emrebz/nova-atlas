import { mkdir, rename, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const outputRoot = join(projectRoot, "public", "og");
const width = 1200;
const height = 630;

const jobs = [
  {
    output: "home.jpg",
    input: "public/og-image.jpg",
    position: "center",
  },
  {
    output: "routes.jpg",
    input: "src/assets/routes/routes-hero.png",
    position: "center",
  },
  {
    output: "vip-transfer.jpg",
    input: "src/assets/services/vip-transport.png",
    position: "center",
  },
  {
    output: "tours/kapadokya.jpg",
    input: "src/assets/tours/kapadokya.png",
    position: "center",
  },
  {
    output: "tours/pamukkale.jpg",
    input: "src/assets/tours/pamukkale.png",
    position: "center",
  },
  {
    output: "tours/karadeniz.jpg",
    input: "src/assets/tours/karadeniz.png",
    position: "center",
  },
  {
    output: "tours/ege.jpg",
    input: "src/assets/tours/ege.png",
    position: "center",
  },
];

const serviceSources = [
  "src/assets/services/domestic-tours.png",
  "src/assets/services/international-tours.png",
  "src/assets/services/hotel-accommodation.png",
  "src/assets/services/vip-transport.png",
];

async function writeAtomically(outputPath, build) {
  await mkdir(dirname(outputPath), { recursive: true });
  const temporaryPath = `${outputPath}.tmp`;

  try {
    await build(temporaryPath);
    await rename(temporaryPath, outputPath);
  } finally {
    await rm(temporaryPath, { force: true });
  }
}

async function generateCover(job) {
  const inputPath = join(projectRoot, job.input);
  const outputPath = join(outputRoot, job.output);

  await writeAtomically(outputPath, (temporaryPath) =>
    sharp(inputPath)
      .rotate()
      .resize(width, height, {
        fit: "cover",
        position: job.position,
      })
      .jpeg({ quality: 88, progressive: true, mozjpeg: true })
      .toFile(temporaryPath),
  );
}

async function generateServicesCollage() {
  const tileWidth = width / 2;
  const tileHeight = height / 2;
  const tiles = await Promise.all(
    serviceSources.map((source) =>
      sharp(join(projectRoot, source))
        .rotate()
        .resize(tileWidth, tileHeight, { fit: "cover", position: "center" })
        .jpeg({ quality: 90, mozjpeg: true })
        .toBuffer(),
    ),
  );

  const outputPath = join(outputRoot, "services.jpg");
  await writeAtomically(outputPath, (temporaryPath) =>
    sharp({
      create: {
        width,
        height,
        channels: 3,
        background: "#0b1226",
      },
    })
      .composite([
        { input: tiles[0], left: 0, top: 0 },
        { input: tiles[1], left: tileWidth, top: 0 },
        { input: tiles[2], left: 0, top: tileHeight },
        { input: tiles[3], left: tileWidth, top: tileHeight },
      ])
      .jpeg({ quality: 88, progressive: true, mozjpeg: true })
      .toFile(temporaryPath),
  );
}

await mkdir(outputRoot, { recursive: true });
await Promise.all([...jobs.map(generateCover), generateServicesCollage()]);

console.log(`Generated ${jobs.length + 1} Open Graph images at ${width}x${height}.`);
