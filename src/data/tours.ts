import type { Locale } from "../i18n/utils";

/**
 * Detail content for each featured route — the single source of truth for the
 * tour detail pages (/turlar/[slug] and /en/tours/[slug]).
 *
 * The homepage carousel still reads short name/desc from the i18n dictionary;
 * `art` links a card to its photo (`tourImages`) and `slug` links it to this data.
 * These are SAMPLE programmes for a newly launched agency: dates and pricing
 * are intentionally left out and the WhatsApp CTA is the conversion.
 */
export interface TourContent {
  name: string;
  tagline: string;
  region: string;
  duration: string;
  season: string;
  intro: string;
  highlights: string[];
  itinerary: { title: string; detail: string }[];
  included: string[];
  goodToKnow: string[];
}

export interface Tour {
  /** stable key, matches the `tourImages` map and the i18n item `art` */
  art: string;
  /** localized URL slugs */
  slug: Record<Locale, string>;
  tr: TourContent;
  en: TourContent;
}

export const tours: Tour[] = [
  {
    art: "kapadokya",
    slug: { tr: "kapadokya", en: "cappadocia" },
    tr: {
      name: "Kapadokya",
      tagline: "Peribacaları, yeraltı şehirleri ve gün doğumunda balon manzaraları",
      region: "Nevşehir · İç Anadolu",
      duration: "2 gece 3 gün (örnek program)",
      season: "Nisan–Haziran ve Eylül–Ekim",
      intro:
        "Milyonlarca yılda şekillenen peribacaları, kayaya oyulmuş kiliseler ve yeraltı şehirleriyle Kapadokya, Türkiye'nin en çok merak edilen rotalarından biri. Çorlu çıkışlı örnek programımızda Göreme, Uçhisar ve Avanos üçgenini rahat bir tempoyla geziyor; isteyene gün doğumunda sıcak hava balonu deneyimini de ekliyoruz.",
      highlights: [
        "Göreme Açık Hava Müzesi ve kayaya oyulmuş fresk kiliseleri",
        "Gün doğumunda sıcak hava balonu turu (opsiyonel)",
        "Derinkuyu veya Kaymaklı yeraltı şehri",
        "Uçhisar Kalesi ve panoramik vadi manzaraları",
        "Avanos'ta geleneksel çömlekçilik atölyesi",
        "Paşabağ (Rahipler Vadisi) ve Devrent hayal vadisi",
      ],
      itinerary: [
        {
          title: "1. Gün — Çorlu'dan hareket ve ilk tanışma",
          detail:
            "Sabah Çorlu'dan hareket, yol üzeri molalarla Kapadokya'ya varış. Otele yerleşme, akşam Göreme çevresinde kısa bir yürüyüş ve serbest zaman.",
        },
        {
          title: "2. Gün — Vadiler ve yeraltı şehri",
          detail:
            "İsteyen misafirler için gün doğumunda balon turu. Kahvaltının ardından Göreme Açık Hava Müzesi, Paşabağ ve Devrent vadileri, öğleden sonra yeraltı şehri ve Avanos çömlekçilik atölyesi.",
        },
        {
          title: "3. Gün — Uçhisar ve dönüş",
          detail:
            "Uçhisar Kalesi ve panoramik fotoğraf molası, güvercinlik vadisi. Öğleden sonra Çorlu'ya dönüş için yola çıkış.",
        },
      ],
      included: [
        "Kendi filomuzla gidiş-dönüş ulaşım",
        "Konaklama ve kahvaltı",
        "Rehberlik ve program koordinasyonu",
        "Güzergâh üzerindeki mola ve organizasyon",
      ],
      goodToKnow: [
        "Balon turu havaya bağlıdır ve ayrı ücretlendirilir; talep ederseniz önceden rezervasyon desteği veririz.",
        "Vadi yürüyüşleri için rahat ayakkabı ve mevsime uygun katmanlı giyim öneririz.",
        "Program örnektir; grup büyüklüğü ve tarihlere göre içerik güncellenebilir.",
      ],
    },
    en: {
      name: "Cappadocia",
      tagline: "Fairy chimneys, underground cities and sunrise balloon views",
      region: "Nevşehir · Central Anatolia",
      duration: "3 days / 2 nights (sample programme)",
      season: "April–June and September–October",
      intro:
        "With fairy chimneys shaped over millions of years, rock-cut churches and underground cities, Cappadocia is one of Türkiye's most sought-after routes. Our sample programme departing from Çorlu explores the Göreme, Uçhisar and Avanos triangle at a relaxed pace, with an optional sunrise hot-air balloon experience.",
      highlights: [
        "Göreme Open-Air Museum and its rock-cut fresco churches",
        "Sunrise hot-air balloon flight (optional)",
        "Derinkuyu or Kaymaklı underground city",
        "Uçhisar Castle and panoramic valley views",
        "Traditional pottery workshop in Avanos",
        "Paşabağ (Monks Valley) and the Devrent 'imagination' valley",
      ],
      itinerary: [
        {
          title: "Day 1 — Departure from Çorlu",
          detail:
            "Morning departure from Çorlu, arriving in Cappadocia with breaks along the way. Hotel check-in, followed by a short evening walk around Göreme and free time.",
        },
        {
          title: "Day 2 — Valleys and underground city",
          detail:
            "Optional sunrise balloon flight for interested guests. After breakfast: Göreme Open-Air Museum, Paşabağ and Devrent valleys, then an underground city and the Avanos pottery workshop in the afternoon.",
        },
        {
          title: "Day 3 — Uçhisar and return",
          detail:
            "Uçhisar Castle with a panoramic photo stop and Pigeon Valley. Departure for the return to Çorlu in the afternoon.",
        },
      ],
      included: [
        "Return transport with our own fleet",
        "Accommodation and breakfast",
        "Guidance and programme coordination",
        "Stops and organisation along the route",
      ],
      goodToKnow: [
        "The balloon flight depends on weather and is priced separately; we can help arrange it in advance on request.",
        "We recommend comfortable shoes and layered clothing for the valley walks.",
        "This is a sample programme; content may change based on group size and dates.",
      ],
    },
  },
  {
    art: "pamukkale",
    slug: { tr: "pamukkale", en: "pamukkale" },
    tr: {
      name: "Pamukkale",
      tagline: "Bembeyaz travertenler ve antik Hierapolis'in izleri",
      region: "Denizli · Ege",
      duration: "1 gece 2 gün (örnek program)",
      season: "İlkbahar ve sonbahar",
      intro:
        "Kalsiyum yüklü termal suların yüzyıllar içinde oluşturduğu bembeyaz travertenleriyle Pamukkale, UNESCO Dünya Mirası listesinde. Hemen yanındaki antik Hierapolis şehri ve Kleopatra Havuzu ile doğa ve tarihi bir arada sunan bu rotayı Çorlu çıkışlı örnek programımızla planlıyoruz.",
      highlights: [
        "Pamukkale travertenleri üzerinde çıplak ayak yürüyüş",
        "Antik Hierapolis şehri ve geniş nekropol alanı",
        "Kleopatra Antik Havuzu'nda yüzme (opsiyonel)",
        "Hierapolis Arkeoloji Müzesi",
        "Dilerseniz Laodikeia antik kenti ziyareti",
      ],
      itinerary: [
        {
          title: "1. Gün — Çorlu'dan Pamukkale'ye",
          detail:
            "Sabah erken hareket, yol üzeri molalarla Denizli'ye varış. Öğleden sonra travertenler ve Hierapolis'in üst bölümünde gezinti, gün batımı fotoğraf molası.",
        },
        {
          title: "2. Gün — Hierapolis, havuz ve dönüş",
          detail:
            "Hierapolis antik kenti, tiyatro ve nekropol turu; isteyenler için Kleopatra Havuzu'nda yüzme. Öğleden sonra Çorlu'ya dönüş.",
        },
      ],
      included: [
        "Kendi filomuzla gidiş-dönüş ulaşım",
        "Konaklama ve kahvaltı",
        "Rehberlik ve program koordinasyonu",
        "Ören yeri giriş organizasyonu",
      ],
      goodToKnow: [
        "Travertenlere çıplak ayakla girilir; yanınızda hafif bir havlu ve terlik bulundurmak faydalı olur.",
        "Kleopatra Havuzu girişi ayrı ücretlidir.",
        "Yaz aylarında öğle saatleri sıcak olabilir; şapka ve güneş koruması öneririz.",
      ],
    },
    en: {
      name: "Pamukkale",
      tagline: "Snow-white travertines and the traces of ancient Hierapolis",
      region: "Denizli · Aegean",
      duration: "2 days / 1 night (sample programme)",
      season: "Spring and autumn",
      intro:
        "With brilliant white travertines formed over centuries by calcium-rich thermal waters, Pamukkale is on the UNESCO World Heritage list. Paired with the adjacent ancient city of Hierapolis and Cleopatra's Pool, this route blends nature and history — planned as a sample programme departing from Çorlu.",
      highlights: [
        "Barefoot walk across the Pamukkale travertines",
        "The ancient city of Hierapolis and its vast necropolis",
        "Swimming in Cleopatra's Antique Pool (optional)",
        "Hierapolis Archaeology Museum",
        "Optional visit to the ancient city of Laodicea",
      ],
      itinerary: [
        {
          title: "Day 1 — Çorlu to Pamukkale",
          detail:
            "Early morning departure, arriving in Denizli with breaks along the way. Afternoon walk on the travertines and the upper section of Hierapolis, with a sunset photo stop.",
        },
        {
          title: "Day 2 — Hierapolis, pool and return",
          detail:
            "Tour of the ancient city of Hierapolis, its theatre and necropolis; optional swim in Cleopatra's Pool. Return to Çorlu in the afternoon.",
        },
      ],
      included: [
        "Return transport with our own fleet",
        "Accommodation and breakfast",
        "Guidance and programme coordination",
        "Site entry organisation",
      ],
      goodToKnow: [
        "The travertines are entered barefoot; a light towel and sandals are handy to bring.",
        "Entry to Cleopatra's Pool is priced separately.",
        "Midday can be hot in summer; we recommend a hat and sun protection.",
      ],
    },
  },
  {
    art: "karadeniz",
    slug: { tr: "karadeniz-yaylalari", en: "black-sea-highlands" },
    tr: {
      name: "Karadeniz Yaylaları",
      tagline: "Sisli yaylalar, çay bahçeleri ve yemyeşil vadiler",
      region: "Rize · Trabzon · Doğu Karadeniz",
      duration: "4 gece 5 gün (örnek program)",
      season: "Haziran–Eylül",
      intro:
        "Bulutların üzerinde uzanan yaylalar, çağlayanlar, tarihi kemer köprüler ve uçsuz bucaksız çay bahçeleri… Doğu Karadeniz, yeşilin her tonunu bir arada görmek isteyenler için eşsiz. Çorlu çıkışlı örnek programımızda Ayder, Uzungöl ve Sümela gibi bölgenin en sevilen duraklarını buluşturuyoruz.",
      highlights: [
        "Ayder Yaylası ve Fırtına Vadisi",
        "Kaçkar eteklerinde Zilkale ve tarihi taş kemer köprüler",
        "Uzungöl ve çevresindeki yaylalar",
        "Kayalara oyulmuş Sümela Manastırı",
        "Çay bahçeleri ve yöresel Karadeniz mutfağı",
        "Pokut, Gito veya Hazindağ yaylalarında bulut denizi (hava koşullarına bağlı)",
      ],
      itinerary: [
        {
          title: "1. Gün — Çorlu'dan Karadeniz'e yolculuk",
          detail:
            "Uzun ama manzaralı bir yol; güzergâh üzerinde molalarla bölgeye varış ve otele yerleşme.",
        },
        {
          title: "2. Gün — Fırtına Vadisi ve Ayder",
          detail:
            "Fırtına Vadisi, Zilkale ve tarihi kemer köprüler, ardından Ayder Yaylası'nda serbest zaman.",
        },
        {
          title: "3. Gün — Yayla rotası ve bulut denizi",
          detail:
            "Hava koşullarına göre Pokut/Gito gibi yaylalara çıkış, çay molaları ve panoramik manzaralar.",
        },
        {
          title: "4. Gün — Uzungöl",
          detail:
            "Uzungöl ve çevresindeki yaylalarda gezinti, göl kenarında serbest zaman ve fotoğraf molaları.",
        },
        {
          title: "5. Gün — Sümela ve dönüş",
          detail:
            "Kayalara oyulmuş Sümela Manastırı ziyareti, ardından Çorlu'ya dönüş için hareket.",
        },
      ],
      included: [
        "Kendi filomuzla gidiş-dönüş ulaşım",
        "Konaklama ve kahvaltı",
        "Rehberlik ve program koordinasyonu",
        "Yayla geçişleri ve güzergâh organizasyonu",
      ],
      goodToKnow: [
        "Karadeniz'de hava hızlı değişir; yağmurluk ve katmanlı giyim öneririz.",
        "Bazı yayla yolları dar ve virajlıdır; bu bölümlerde uygun araçlarla geçiş sağlanır.",
        "Bulut denizi ve yayla manzaraları hava koşullarına bağlıdır.",
      ],
    },
    en: {
      name: "Black Sea Highlands",
      tagline: "Misty plateaus, tea gardens and lush green valleys",
      region: "Rize · Trabzon · Eastern Black Sea",
      duration: "5 days / 4 nights (sample programme)",
      season: "June–September",
      intro:
        "Plateaus above the clouds, waterfalls, historic arched bridges and endless tea gardens — the Eastern Black Sea is unmatched for seeing every shade of green at once. Our sample programme from Çorlu brings together the region's best-loved stops, from Ayder to Uzungöl and Sümela.",
      highlights: [
        "Ayder Plateau and the Fırtına Valley",
        "Zilkale and historic stone arch bridges below the Kaçkars",
        "Uzungöl and the surrounding highlands",
        "The cliff-carved Sümela Monastery",
        "Tea gardens and local Black Sea cuisine",
        "Sea of clouds at Pokut, Gito or Hazindağ plateaus (weather permitting)",
      ],
      itinerary: [
        {
          title: "Day 1 — Journey from Çorlu",
          detail:
            "A long but scenic drive; arrival in the region with breaks along the way and hotel check-in.",
        },
        {
          title: "Day 2 — Fırtına Valley and Ayder",
          detail:
            "Fırtına Valley, Zilkale and historic arch bridges, followed by free time on the Ayder Plateau.",
        },
        {
          title: "Day 3 — Highland route and sea of clouds",
          detail:
            "Weather permitting, an ascent to plateaus such as Pokut/Gito, with tea breaks and panoramic views.",
        },
        {
          title: "Day 4 — Uzungöl",
          detail:
            "Exploring Uzungöl and the surrounding highlands, with lakeside free time and photo stops.",
        },
        {
          title: "Day 5 — Sümela and return",
          detail:
            "Visit to the cliff-carved Sümela Monastery, then departure for the return to Çorlu.",
        },
      ],
      included: [
        "Return transport with our own fleet",
        "Accommodation and breakfast",
        "Guidance and programme coordination",
        "Highland transfers and route organisation",
      ],
      goodToKnow: [
        "Weather changes quickly in the Black Sea; we recommend a raincoat and layered clothing.",
        "Some highland roads are narrow and winding; suitable vehicles are used on those sections.",
        "The sea of clouds and plateau views depend on weather conditions.",
      ],
    },
  },
  {
    art: "ege",
    slug: { tr: "ege-kiyilari", en: "aegean-coast" },
    tr: {
      name: "Ege Kıyıları",
      tagline: "Masmavi koylar, taş sokaklı köyler ve antik kentler",
      region: "İzmir · Ege",
      duration: "3 gece 4 gün (örnek program)",
      season: "Mayıs–Ekim",
      intro:
        "Sakin koylar, yel değirmenleri, taş evli köyler ve dünyaca ünlü antik kentler Ege kıyısında iç içe. Çorlu çıkışlı örnek programımızda Alaçatı ve Çeşme'nin rüzgârını, Şirince'nin bağ evlerini ve Efes'in görkemli antik caddelerini bir araya getiriyoruz.",
      highlights: [
        "Alaçatı'nın taş sokakları ve rengârenk kepenkleri",
        "Çeşme kıyıları ve koylarında serbest zaman",
        "Efes Antik Kenti ve Celsus Kütüphanesi",
        "Şirince köyü ve bağ evleri",
        "Dilerseniz tekne turu veya gün batımı molası",
      ],
      itinerary: [
        {
          title: "1. Gün — Çorlu'dan Ege'ye",
          detail:
            "Sabah hareket, yol üzeri molalarla İzmir bölgesine varış ve otele yerleşme; akşam sahil kenarında serbest zaman.",
        },
        {
          title: "2. Gün — Çeşme ve Alaçatı",
          detail:
            "Çeşme kalesi ve kıyıları, ardından Alaçatı'nın taş sokakları, kahve ve alışveriş molası, koylarda serbest zaman.",
        },
        {
          title: "3. Gün — Efes ve Şirince",
          detail:
            "Efes Antik Kenti ve Celsus Kütüphanesi turu, öğleden sonra Şirince köyünde gezinti.",
        },
        {
          title: "4. Gün — Serbest zaman ve dönüş",
          detail:
            "Sabah kısa bir sahil molası veya alışveriş, ardından Çorlu'ya dönüş için hareket.",
        },
      ],
      included: [
        "Kendi filomuzla gidiş-dönüş ulaşım",
        "Konaklama ve kahvaltı",
        "Rehberlik ve program koordinasyonu",
        "Güzergâh üzerindeki gezi organizasyonu",
      ],
      goodToKnow: [
        "Yaz aylarında koylar yoğun olabilir; erken saatlerde gezmeyi öneririz.",
        "Antik kent gezileri için rahat ayakkabı ve güneş koruması faydalı olur.",
        "Tekne turu opsiyoneldir ve sezona göre ayrı planlanır.",
      ],
    },
    en: {
      name: "Aegean Coast",
      tagline: "Turquoise bays, stone-paved villages and ancient cities",
      region: "İzmir · Aegean",
      duration: "4 days / 3 nights (sample programme)",
      season: "May–October",
      intro:
        "Calm bays, windmills, stone-house villages and world-famous ancient cities sit side by side along the Aegean coast. Our sample programme from Çorlu combines the breeze of Alaçatı and Çeşme, the vineyard houses of Şirince and the grand ancient avenues of Ephesus.",
      highlights: [
        "The stone streets and colourful shutters of Alaçatı",
        "Free time along the shores and bays of Çeşme",
        "The ancient city of Ephesus and the Library of Celsus",
        "The village of Şirince and its vineyard houses",
        "Optional boat trip or sunset stop",
      ],
      itinerary: [
        {
          title: "Day 1 — Çorlu to the Aegean",
          detail:
            "Morning departure, arriving in the İzmir area with breaks along the way and hotel check-in; free time by the shore in the evening.",
        },
        {
          title: "Day 2 — Çeşme and Alaçatı",
          detail:
            "Çeşme castle and shores, then the stone streets of Alaçatı with a coffee and shopping break, and free time in the bays.",
        },
        {
          title: "Day 3 — Ephesus and Şirince",
          detail:
            "Tour of the ancient city of Ephesus and the Library of Celsus, then a stroll through the village of Şirince in the afternoon.",
        },
        {
          title: "Day 4 — Free time and return",
          detail:
            "A short seaside or shopping break in the morning, then departure for the return to Çorlu.",
        },
      ],
      included: [
        "Return transport with our own fleet",
        "Accommodation and breakfast",
        "Guidance and programme coordination",
        "Sightseeing organisation along the route",
      ],
      goodToKnow: [
        "Bays can be busy in summer; we recommend visiting early in the day.",
        "Comfortable shoes and sun protection help for the ancient-city walks.",
        "The boat trip is optional and planned separately depending on the season.",
      ],
    },
  },
];

/** Look up a tour by its `art` key (used by the homepage carousel). */
export function tourByArt(art: string): Tour | undefined {
  return tours.find((tour) => tour.art === art);
}

/** Detail-page path for a tour in a given locale (with leading + trailing slash). */
export function tourPath(tour: Tour, locale: Locale): string {
  return locale === "tr"
    ? `/turlar/${tour.slug.tr}/`
    : `/en/tours/${tour.slug.en}/`;
}
