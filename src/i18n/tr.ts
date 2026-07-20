import { site } from "../config/site";

/**
 * Turkish dictionary — the canonical shape.
 * `en.ts` must satisfy the same `Dictionary` type (see utils.ts).
 * NEVER hardcode visible copy in components — add keys here instead.
 */
export const tr = {
  meta: {
    title: "NovaAtlas Turizm — Çorlu'nun Yeni Yol Arkadaşı",
    description:
      "NovaAtlas, Çorlu'da yeni kurulmuş bir turizm acentesidir. Yurt içi ve yurt dışı seyahatlerinizde güvenilir, kişisel hizmet. WhatsApp'tan bize ulaşın.",
    ogLocale: "tr_TR",
  },
  nav: {
    home: { label: "Ana Sayfa", anchor: "anasayfa" },
    about: { label: "Hakkımızda", anchor: "hakkimizda" },
    services: { label: "Hizmetler", anchor: "hizmetler" },
    contact: { label: "İletişim", anchor: "iletisim" },
  },
  hero: {
    h1: "NovaAtlas Turizm — Çorlu'nun Yeni Yol Arkadaşı",
    sub: "Yurt içi ve yurt dışı seyahatlerinizde, güvenilir ve kişisel bir hizmet için buradayız.",
    lead: "NovaAtlas, Çorlu'da yeni kurulmuş bir turizm acentesidir. Amacımız, seyahat planlarınızda size en yakın ve en güvenilir çözüm ortağı olmak. Tur paketlerimiz çok yakında sizlerle — takipte kalın!",
    cta: "WhatsApp'tan Bize Ulaşın",
  },
  about: {
    h2: "Biz Kimiz?",
    paragraphs: [
      "NovaAtlas, Çorlu'da kurulan yeni nesil bir seyahat acentesidir. Sanayi ve ticaretin kalbi olan bu şehirde yaşayan, çalışan ve seyahat eden herkes için doğru, şeffaf ve kişiye özel çözümler sunmak üzere yola çıktık.",
      "Henüz yolun başındayız, ama vizyonumuz net: Çorlu'dan başlayıp, güvenle büyüyen bir marka olmak. Kurumsal ciddiyeti, sıcak ve ulaşılabilir bir hizmet anlayışıyla birleştiriyoruz.",
      "Yakında sizlerle olacak tur paketlerimiz ve hizmetlerimizle ilgili gelişmeleri buradan ve sosyal medya hesaplarımızdan takip edebilirsiniz.",
    ],
    whyTitle: "Neden NovaAtlas?",
    why: [
      { icon: "pin", text: "Çorlu'da yerel, ulaşılabilir bir ekip" },
      { icon: "sparkle", text: "Şeffaf ve kişiye özel öneriler" },
      { icon: "chat", text: "Hızlı iletişim (WhatsApp üzerinden anında destek)" },
      { icon: "network", text: "Büyüyen bir hizmet ağı" },
    ],
    logoAlt: "NovaAtlas Turizm logosu",
  },
  services: {
    h2: "Çok Yakında Sizlerle",
    paragraphs: [
      "Tur paketlerimizi ve hizmet detaylarımızı hazırlıyoruz. Yurt içi ve yurt dışı turlar, otel rezervasyonları ve vize danışmanlığı gibi alanlarda kısa süre içinde sizlerle olacağız.",
      "Şimdiden özel bir talebiniz mi var? WhatsApp üzerinden bize yazın, ihtiyacınıza göre size özel çözüm üretelim.",
    ],
    badge: "Yakında",
    items: [
      { icon: "compass", title: "Yurt İçi Turlar" },
      { icon: "globe", title: "Yurt Dışı Turlar" },
      { icon: "bed", title: "Otel & Konaklama" },
      { icon: "passport", title: "Vize Danışmanlığı" },
    ],
    cta: "WhatsApp'tan Yazın",
  },
  contact: {
    h2: "Bize Ulaşın",
    body: "Sorularınız, önerileriniz veya özel taleplerinizi bize iletmekten çekinmeyin. En hızlı dönüş için WhatsApp hattımızı kullanabilirsiniz.",
    rows: {
      location: "Konum",
      whatsapp: "WhatsApp",
      email: "E-posta",
      hours: "Çalışma Saatleri",
    },
    hoursValue: site.hoursTR,
    cta: "Hemen WhatsApp'tan Yazın",
  },
  footer: {
    line: "NovaAtlas Turizm — Çorlu",
    note: "Yeni nesil seyahat acentesi. Tur paketlerimiz çok yakında.",
    rights: "Tüm hakları saklıdır.",
  },
  a11y: {
    skip: "İçeriğe atla",
    menuOpen: "Menüyü aç",
    menuClose: "Menüyü kapat",
    mainNav: "Ana gezinme",
    langNav: "Dil seçimi",
    waFab: "WhatsApp'tan bize yazın",
    waIcon: "WhatsApp",
  },
  brandSuffix: "Turizm",
} as const;
