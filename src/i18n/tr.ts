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
      "Çorlu merkezli Nova Atlas Turizm; yurt içi ve yurt dışı turlar, otel rezervasyonu, VIP transfer ve güvenli seyahat planlamasında yanınızda.",
    ogLocale: "tr_TR",
  },
  nav: {
    home: { label: "Ana Sayfa", anchor: "anasayfa" },
    about: { label: "Hakkımızda", anchor: "hakkimizda" },
    routes: { label: "Rotalar", anchor: "rotalar" },
    services: { label: "Hizmetler", anchor: "hizmetler" },
    vip: { label: "VIP Taşımacılık" },
    contact: { label: "İletişim", anchor: "iletisim" },
  },
  hero: {
    h1: "Nova Atlas Turizm Seyahat Acentası",
    brand: "Nova Atlas",
    descriptor: "Turizm Seyahat Acentası",
    sub: "Tur, konaklama ve ulaşım ihtiyaçlarınız için Çorlu'da ulaşılabilir, güvenilir bir seyahat acentesi.",
    lead: "Personel taşımacılığından gelen operasyon deneyimimizi bir aile şirketinin sorumluluk anlayışıyla turizme taşıyoruz. Çorlu çıkışlı yurt içi ve yurt dışı tur paketlerimiz hazırlanırken seyahat planlarınız için şimdiden bizimle iletişime geçebilirsiniz.",
    cta: "WhatsApp'tan Bize Ulaşın",
  },
  film: {
    regionLabel: "Nova Atlas Turizm tanıtım filmi",
    tagline: "Çorlu'dan Dünyaya",
    tapForSound: "Ses için dokunun",
    unmute: "Sesi aç",
    mute: "Sesi kapat",
    play: "Oynat",
    pause: "Duraklat",
    fullscreen: "Tam ekran",
    exitFullscreen: "Tam ekrandan çık",
    scroll: "Keşfet",
  },
  about: {
    h2: "Çorlu'da Deneyimden Doğan Bir Seyahat Acentesi",
    paragraphs: [
      "Nova Atlas Turizm, Çorlu ve Tekirdağ bölgesindeki ulaşım ihtiyaçlarını yakından tanıyan bir aile şirketinin turizm markasıdır. Personel taşımacılığında edindiğimiz planlama, zaman yönetimi ve operasyon tecrübesini kendi araç filomuzla sunduğumuz seyahat ve ulaşım hizmetlerine aktarıyoruz.",
      "Amacımız yalnızca bir rezervasyon oluşturmak değil; yolculuğun her aşamasında ulaşılabilir bir muhatap olmak, seçenekleri açıkça anlatmak ve ihtiyaca uygun bir plan hazırlamaktır. Kurumsal disiplin ile aile şirketi sıcaklığını aynı hizmet anlayışında buluşturuyoruz.",
      "Çorlu çıkışlı yurt içi ve yurt dışı turlar, otel rezervasyonu ve VIP transfer alanlarında büyüyen hizmet ağımızla yanınızdayız. Yaklaşan tur programlarını web sitemizden ve sosyal medya hesaplarımızdan duyuracağız.",
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
    carouselLabel: "Öne çıkan tur rotaları",
    previousLabel: "Önceki rotayı göster",
    nextLabel: "Sonraki rotayı göster",
    cardCta: "Rotayı incele",
    allRoutesCta: "Tüm Rotaları Gör",
    items: [
      {
        art: "kapadokya",
        name: "Kapadokya",
        desc: "Peribacaları ve gün doğumunda balon manzaraları",
        waMessage: "Merhaba, Çorlu çıkışlı Kapadokya turu için planlanan tarihleri, konaklama seçeneklerini, balon turu bilgisini ve fiyat detaylarını öğrenmek istiyorum.",
      },
      {
        art: "pamukkale",
        name: "Pamukkale",
        desc: "Bembeyaz travertenler ve antik Hierapolis",
        waMessage: "Merhaba, Çorlu çıkışlı Pamukkale turu için planlanan tarihleri, Hierapolis programını, ulaşım ve fiyat detaylarını öğrenmek istiyorum.",
      },
      {
        art: "karadeniz",
        name: "Karadeniz Yaylaları",
        desc: "Sisli yaylalar, yemyeşil doğa",
        waMessage: "Merhaba, Çorlu çıkışlı Karadeniz Yaylaları turu için planlanan tarihleri, yayla rotasını, konaklama ve fiyat detaylarını öğrenmek istiyorum.",
      },
      {
        art: "ege",
        name: "Ege Kıyıları",
        desc: "Masmavi koylar ve Ege esintisi",
        waMessage: "Merhaba, Çorlu çıkışlı Ege Kıyıları turu için planlanan tarihleri, ziyaret edilecek koyları, konaklama ve fiyat detaylarını öğrenmek istiyorum.",
      },
    ],
    detail: {
      metaTitleSuffix: "Çorlu Çıkışlı Tur Rotası",
      breadcrumbTours: "Rotalar",
      back: "Tüm rotalara dön",
      overview: "Genel Bakış",
      highlights: "Öne Çıkanlar",
      itinerary: "Örnek Program",
      included: "Programa Dahil Olabilecekler",
      goodToKnow: "Bilmekte Fayda Var",
      facts: "Kısa Bilgi",
      regionLabel: "Bölge",
      durationLabel: "Süre",
      seasonLabel: "En İyi Zaman",
      ctaTitle: "Bu rota ilgini çekti mi?",
      ctaBody:
        "Kesin tarihler ve fiyat detayları hazırlanıyor. WhatsApp'tan yazın, ihtiyacınıza göre size özel bir plan çıkaralım.",
      cta: "WhatsApp'tan Bilgi Al",
      soonNote:
        "Bu bir örnek programdır; kesin tarihler, hareket noktaları ve içerik netleştiğinde güncellenecektir.",
      otherTours: "Diğer Rotalar",
    },
  },
  routesPage: {
    meta: {
      title: "Çorlu Çıkışlı Tur Rotaları | Nova Atlas Turizm",
      description:
        "Nova Atlas Turizm'in Çorlu çıkışlı Kapadokya, Pamukkale, Karadeniz Yaylaları ve Ege Kıyıları örnek tur rotalarını keşfedin.",
    },
    breadcrumb: "Rotalar",
    eyebrow: "Çorlu çıkışlı örnek tur programları",
    h1: "Tüm Rotaları Keşfedin",
    lead:
      "Hazırladığımız yurt içi rota örneklerini karşılaştırın; öne çıkan durakları ve program detaylarını inceleyerek ilgilendiğiniz rota için bize ulaşın.",
    countSuffix: "örnek rota",
    notice:
      "Programlar örnektir; kesin tarihler, hareket noktaları, içerik ve fiyat bilgileri netleştiğinde güncellenecektir.",
    cardCta: "Rotayı İncele",
    waCta: "Bu rota için bilgi al",
    ctaTitle: "Aklınızda başka bir rota mı var?",
    ctaBody:
      "Planlamak istediğiniz destinasyonu ve tercih ettiğiniz tarih aralığını WhatsApp üzerinden bize iletin.",
    cta: "WhatsApp'tan Rota Sor",
  },
  services: {
    h2: "Çorlu Merkezli Seyahat ve Ulaşım Hizmetleri",
    paragraphs: [
      "Yurt içi ve yurt dışı seyahatlerinizi tek noktadan planlayabilmeniz için tur, konaklama ve ulaşım ihtiyaçlarını birlikte değerlendiriyoruz.",
      "Tur tarihleri ve paket detayları hazırlanırken otel rezervasyonu ve VIP transfer talepleriniz için bize WhatsApp üzerinden ulaşabilirsiniz.",
    ],
    badge: "Yakında",
    items: [
      { icon: "compass", title: "Çorlu Çıkışlı Yurt İçi Turlar", desc: "Kültür, doğa ve günübirlik rota seçenekleri." },
      { icon: "globe", title: "Yurt Dışı Turları", desc: "Farklı bütçe ve seyahat beklentilerine uygun programlar." },
      { icon: "bed", title: "Otel & Konaklama", desc: "Seyahat planınıza uygun konaklama seçenekleri." },
      { icon: "van", title: "Taşımacılık & VIP Transfer", desc: "Personel taşımacılığı deneyimine dayanan ulaşım çözümleri." },
    ],
    cta: "WhatsApp'tan Yazın",
  },
  vip: {
    meta: {
      title: "Çorlu VIP Transfer | Nova Atlas Turizm",
      description:
        "Nova Atlas Turizm'in Vito aracıyla Çorlu–İstanbul Havalimanı, Çorlu–Sabiha Gökçen, özel rota, düğün ve özel gün transferleri.",
    },
    breadcrumb: "VIP Taşımacılık",
    eyebrow: "Çorlu çıkışlı özel ulaşım",
    h1: "VIP Transferinizi Rotanıza Göre Planlayalım",
    lead:
      "Vito aracımızla havalimanı yolculukları, özel rotalar, düğünler ve özel günler için ulaşım talebinizi birlikte planlıyoruz.",
    heroCta: "VIP Transfer Talebi Oluştur",
    heroAlt: "VIP transfer için Vito aracı",
    chips: ["Vito", "Çorlu çıkışlı planlama"],
    servicesTitle: "İhtiyacınıza Uygun VIP Taşımacılık",
    servicesBody:
      "Tarih, saat, kalkış ve varış noktanızı WhatsApp üzerinden iletin; rota ve yolculuk detaylarını talebinize göre netleştirelim.",
    services: [
      {
        icon: "plane",
        title: "Çorlu – İstanbul Havalimanı",
        desc: "Çorlu'dan İstanbul Havalimanı'na veya havalimanından Çorlu'ya özel transfer talebinizi planlayın.",
        cta: "Bu rota için yaz",
        message:
          "Merhaba, Çorlu – İstanbul Havalimanı VIP transferi hakkında bilgi almak istiyorum. Tarih/saat: …, kalkış noktası: …, yolcu ve bagaj sayısı: …, tek yön/dönüş: …",
      },
      {
        icon: "plane",
        title: "Çorlu – Sabiha Gökçen",
        desc: "Çorlu ile Sabiha Gökçen arasındaki özel transfer talebinizi tarih ve uçuş planınıza göre iletin.",
        cta: "Bu rota için yaz",
        message:
          "Merhaba, Çorlu – Sabiha Gökçen VIP transferi hakkında bilgi almak istiyorum. Tarih/saat: …, kalkış noktası: …, yolcu ve bagaj sayısı: …, tek yön/dönüş: …",
      },
      {
        icon: "sparkle",
        title: "Özel Günler & Düğünler",
        desc: "Düğün, nişan, davet ve özel organizasyonlarınız için ulaşım ihtiyacınızı birlikte planlayalım.",
        cta: "Organizasyon için yaz",
        message:
          "Merhaba, düğün/özel gün için VIP araç talebim var. Etkinlik türü: …, tarih: …, konum/rota: …, saat aralığı: …",
      },
      {
        icon: "route",
        title: "Size Özel Rotalar",
        desc: "Belirlediğiniz kalkış ve varış noktaları için size özel ulaşım talebi oluşturun.",
        cta: "Özel rota oluştur",
        message:
          "Merhaba, özel rota için VIP transfer talebi oluşturmak istiyorum. Kalkış: …, varış: …, tarih/saat: …, yolcu sayısı: …",
      },
    ],
    vehiclesTitle: "VIP Yolculuklarınız İçin Vito",
    vehiclesBody:
      "Yolcu sayınız, bagaj durumunuz ve yolculuk planınıza göre Vito ile transfer detaylarını birlikte netleştirebiliriz.",
    vehicles: [
      {
        icon: "van",
        name: "Vito",
        kicker: "Geniş kabinli VIP araç",
        desc: "Birlikte seyahat eden misafirler ve bagajlı yolculuklar için geniş kabinli VIP transfer seçeneği.",
      },
    ],
    processTitle: "Talebinizi Üç Adımda İletin",
    process: [
      { title: "Rotanızı paylaşın", desc: "Kalkış ve varış noktanızı belirtin." },
      {
        title: "Zaman ve detayları ekleyin",
        desc: "Tarih, saat, yolcu ve bagaj bilgilerinizi yazın.",
      },
      {
        title: "Ek taleplerinizi paylaşın",
        desc: "Yolculuğunuzla ilgili ek bilgileri talebinize ekleyin.",
      },
    ],
    ctaTitle: "VIP ulaşım talebinizi şimdi iletin",
    ctaBody:
      "Havalimanı, özel rota veya organizasyon bilgilerinizi WhatsApp üzerinden gönderin; talebinizi birlikte netleştirelim.",
    cta: "WhatsApp'tan VIP Transfer Sor",
    generalMessage:
      "Merhaba, Nova Atlas Turizm VIP taşımacılık hizmeti hakkında bilgi almak istiyorum. Rota: …, tarih/saat: …, yolcu sayısı: …",
    home: {
      eyebrow: "VIP Taşımacılık",
      title: "Çorlu'dan Havalimanına ve Özel Günlerinize VIP Ulaşım",
      body: "Vito aracımızla havalimanı transferlerinden size özel rotalara, düğünlerden özel organizasyonlara kadar ulaşım talebinizi birlikte planlayalım.",
      points: [
        "Çorlu – İstanbul Havalimanı ve Sabiha Gökçen",
        "Geniş kabinli Vito ile VIP ulaşım",
        "Özel rotalar, düğünler ve özel günler",
      ],
      cta: "VIP Taşımacılığı İncele",
    },
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
    note: "Çorlu merkezli; tur, konaklama ve ulaşım hizmetleri sunan TÜRSAB üyesi seyahat acentesi.",
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
