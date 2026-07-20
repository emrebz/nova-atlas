import { site } from "../config/site";

/**
 * Turkish dictionary — the canonical shape.
 * `en.ts` must satisfy the same `Dictionary` type (see utils.ts).
 * NEVER hardcode visible copy in components — add keys here instead.
 */
export const tr = {
  meta: {
    title: "Nova Atlas Turizm | Çorlu Seyahat Acentesi",
    description:
      "Çorlu merkezli Nova Atlas Turizm; yurt içi ve yurt dışı turlar, vize danışmanlığı, otel rezervasyonu ve güvenli seyahat planlamasında yanınızda.",
    ogLocale: "tr_TR",
  },
  nav: {
    home: { label: "Ana Sayfa", anchor: "anasayfa" },
    about: { label: "Hakkımızda", anchor: "hakkimizda" },
    services: { label: "Hizmetler", anchor: "hizmetler" },
    contact: { label: "İletişim", anchor: "iletisim" },
  },
  hero: {
    h1: "Nova Atlas Turizm: Çorlu'dan Dünyaya Güvenli Yolculuklar",
    sub: "Tur, vize, konaklama ve ulaşım ihtiyaçlarınız için Çorlu'da ulaşılabilir, güvenilir bir seyahat acentesi.",
    lead: "Personel taşımacılığından gelen operasyon deneyimimizi bir aile şirketinin sorumluluk anlayışıyla turizme taşıyoruz. Çorlu çıkışlı yurt içi ve yurt dışı tur paketlerimiz hazırlanırken, seyahat planlarınız ve vize süreçleriniz için şimdiden bizimle iletişime geçebilirsiniz.",
    cta: "WhatsApp'tan Bize Ulaşın",
  },
  about: {
    h2: "Çorlu'da Deneyimden Doğan Bir Seyahat Acentesi",
    paragraphs: [
      "Nova Atlas Turizm, Çorlu ve Tekirdağ bölgesindeki ulaşım ihtiyaçlarını yakından tanıyan bir aile şirketinin turizm markasıdır. Personel taşımacılığında edindiğimiz planlama, zaman yönetimi ve operasyon tecrübesini kendi araç filomuzla sunduğumuz seyahat ve ulaşım hizmetlerine aktarıyoruz.",
      "Amacımız yalnızca bir rezervasyon oluşturmak değil; yolculuğun her aşamasında ulaşılabilir bir muhatap olmak, seçenekleri açıkça anlatmak ve ihtiyaca uygun bir plan hazırlamaktır. Kurumsal disiplin ile aile şirketi sıcaklığını aynı hizmet anlayışında buluşturuyoruz.",
      "Çorlu çıkışlı yurt içi ve yurt dışı turlar, vize danışmanlığı, otel rezervasyonu, personel taşımacılığı ve VIP transfer alanlarında büyüyen hizmet ağımızla yanınızdayız. Yaklaşan tur programlarını web sitemizden ve sosyal medya hesaplarımızdan duyuracağız.",
    ],
    whyTitle: "Neden Nova Atlas Turizm?",
    why: [
      { icon: "pin", text: "Çorlu'da yerel, ulaşılabilir bir ekip" },
      { icon: "sparkle", text: "İhtiyaca uygun, şeffaf seyahat planlaması" },
      { icon: "network", text: "Personel taşımacılığından gelen operasyon deneyimi" },
      { icon: "chat", text: "Aile şirketi sorumluluğu ve doğrudan iletişim" },
    ],
    logoAlt: "Nova Atlas Turizm logosu",
    tursab: "TÜRSAB üyesi seyahat acentesi",
  },
  tours: {
    anchor: "rotalar",
    h2: "Öne Çıkan Yurt İçi Rotalar",
    body: "Hazırladığımız Çorlu çıkışlı yurt içi tur programlarından örnek rotalar. Tarihler, hareket noktaları ve program detayları duyurulduğunda burada paylaşılacak.",
    badge: "Yakında",
    waCta: "Bilgi Al",
    waTemplate: "Merhaba, {tour} rotası hakkında bilgi almak istiyorum.",
    carouselLabel: "Öne çıkan tur rotaları",
    previousLabel: "Önceki rotayı göster",
    nextLabel: "Sonraki rotayı göster",
    items: [
      { art: "kapadokya", name: "Kapadokya", desc: "Peribacaları ve gün doğumunda balon manzaraları" },
      { art: "pamukkale", name: "Pamukkale", desc: "Bembeyaz travertenler ve antik Hierapolis" },
      { art: "karadeniz", name: "Karadeniz Yaylaları", desc: "Sisli yaylalar, yemyeşil doğa" },
      { art: "ege", name: "Ege Kıyıları", desc: "Masmavi koylar ve Ege esintisi" },
    ],
  },
  services: {
    h2: "Çorlu Merkezli Seyahat ve Ulaşım Hizmetleri",
    paragraphs: [
      "Yurt içi ve yurt dışı seyahatlerinizi tek noktadan planlayabilmeniz için tur, vize, konaklama ve ulaşım ihtiyaçlarını birlikte değerlendiriyoruz.",
      "Tur tarihleri ve paket detayları hazırlanırken vize danışmanlığı, otel rezervasyonu, personel taşımacılığı ve VIP transfer talepleriniz için bize WhatsApp üzerinden ulaşabilirsiniz.",
    ],
    badge: "Yakında",
    items: [
      { icon: "compass", title: "Çorlu Çıkışlı Yurt İçi Turlar", desc: "Kültür, doğa ve günübirlik rota seçenekleri." },
      { icon: "globe", title: "Yurt Dışı Turları", desc: "Farklı bütçe ve seyahat beklentilerine uygun programlar." },
      { icon: "passport", title: "Vize Danışmanlığı", desc: "Schengen, ABD, İngiltere, Mısır ve Dubai başvurularında evrak ve süreç desteği." },
      { icon: "bed", title: "Otel & Konaklama", desc: "Seyahat planınıza uygun konaklama seçenekleri." },
      { icon: "van", title: "Taşımacılık & VIP Transfer", desc: "Personel taşımacılığı deneyimine dayanan ulaşım çözümleri." },
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
    line: "Nova Atlas Turizm — Çorlu",
    note: "Çorlu merkezli; tur, vize, konaklama ve ulaşım hizmetleri sunan TÜRSAB üyesi seyahat acentesi.",
    rights: "Tüm hakları saklıdır.",
  },
  a11y: {
    skip: "İçeriğe atla",
    menuOpen: "Menüyü aç",
    menuClose: "Menüyü kapat",
    themeToDark: "Koyu temaya geç",
    themeToLight: "Açık temaya geç",
    mainNav: "Ana gezinme",
    langNav: "Dil seçimi",
    waFab: "WhatsApp'tan bize yazın",
    waIcon: "WhatsApp",
  },
  brandSuffix: "Turizm",
} as const;
