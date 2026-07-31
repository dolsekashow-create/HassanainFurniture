export type Lang = 'en' | 'ar'

export const WHATSAPP_NUMBER = '201001610107' // international format, no +
export const WHATSAPP_DISPLAY = '0100 161 0107'
export const EMAIL = 'Hassanain.furniture@gmail.com'
export const INSTAGRAM =
  'https://www.instagram.com/hassanain_furniture?igsh=Y3owdGRnZTNyZWxp&utm_source=qr'
export const TIKTOK = 'https://www.tiktok.com/@hassanain.furniture?_r=1&_t=ZS-98SeSGvjcDk'
export const MAP_DAMIETTA = 'https://maps.app.goo.gl/2kEok7xUDK2hRTNs5?g_st=iw'
export const MAP_ALEXANDRIA = 'https://maps.app.goo.gl/TSPYyiR6pJLw1GnC9?g_st=iw'
export const CATALOGUE_PDF = '/catalogue/hassanain-catalogue.pdf'

export const NAV_IDS = [
  'about',
  'collections',
  'catalogue',
  'packages',
  'story',
  'contact',
] as const

export type NavId = (typeof NAV_IDS)[number]

type Dict = {
  dir: 'ltr' | 'rtl'
  nav: Record<NavId, string>
  visitShowroom: string
  langButton: string
  hero: {
    line1: string
    line2: string
    tagline: string
    taglineAccent: string
    body: string
    ctaCatalogue: string
    ctaShowroom: string
    scroll: string
  }
  about: {
    eyebrow: string
    title: string
    body1: string
    body2: string
    stats: { value: string; label: string }[]
  }
  features: { title: string; description: string }[]
  collections: {
    eyebrow: string
    title: string
    body: string
    viewCatalogue: string
    groups: { title: string; items: string[] }[]
  }
  catalogue: {
    eyebrow: string
    title: string
    body: string
    open: string
    close: string
    download: string
    newTab: string
    fallback: string
    hint: string
  }
  packages: {
    eyebrow: string
    title: string
    body: string
    currency: string
    cta: string
    note: string
    items: { name: string; price: string; includes: string[] }[]
  }
  story: {
    eyebrow: string
    title: string
    body1: string
    body2: string
    quote: string
  }
  contact: {
    eyebrow: string
    title: string
    body: string
    branchesTitle: string
    directions: string
    followTitle: string
    whatsapp: string
    email: string
    branches: { name: string; detail: string; type: string; map?: string }[]
  }
  footer: {
    rights: string
    made: string
  }
  whatsappAria: string
  whatsappPrefill: string
}

const en: Dict = {
  dir: 'ltr',
  nav: {
    about: 'About Us',
    collections: 'Collections',
    catalogue: 'Catalogue',
    packages: 'Packages',
    story: 'Our Story',
    contact: 'Contact Us',
  },
  visitShowroom: 'Visit Showroom',
  langButton: 'العربية',
  hero: {
    line1: 'YOU',
    line2: 'FOUND IT.',
    tagline: 'From Damietta.',
    taglineAccent: 'Differently.',
    body: 'Handcrafted furniture made in Damietta with passion, quality materials, and timeless designs for modern living.',
    ctaCatalogue: 'Browse Catalogue',
    ctaShowroom: 'Visit Showroom',
    scroll: 'Scroll',
  },
  about: {
    eyebrow: 'About Us',
    title: 'Furniture and more, made the way it should be.',
    body1:
      'Hassanain Furniture is a Damietta workshop turned full-service furniture house. We design, build and finish every piece in our own factory, which means we control the wood, the joinery and the finish from the first cut to the last coat.',
    body2:
      'From a single dining table to a fully furnished chalet, we deliver across Egypt with our own team, install on site, and stand behind the work long after the delivery truck leaves.',
    stats: [
      { value: '10', label: 'Year warranty' },
      { value: '100%', label: 'Natural wood' },
      { value: '3', label: 'Locations in Egypt' },
      { value: '∞', label: 'Custom options' },
    ],
  },
  features: [
    {
      title: 'Made in Damietta',
      description: 'Proudly crafted by skilled artisans with generations of experience.',
    },
    {
      title: 'Natural Materials',
      description: 'Carefully selected solid wood and premium upholstery fabrics.',
    },
    {
      title: '10-Year Warranty',
      description: 'Our written commitment to quality that lasts for years to come.',
    },
    {
      title: 'Custom Furniture',
      description: 'Any size, any finish, tailored to your space and your style.',
    },
  ],
  collections: {
    eyebrow: 'Collections',
    title: 'Pieces for every room.',
    body: 'Bedrooms, sofas, dining tables and cabinets — each collection is available in a range of woods and finishes, and can be resized to fit your space.',
    viewCatalogue: 'See it in the catalogue',
    groups: [
      { title: 'Bedrooms', items: ['Agadir', 'Elania', 'Agamy', 'King Mariott', 'Amood', 'Camaloon'] },
      { title: 'Twin Bedrooms', items: ['Tuteal', 'Farfalla'] },
      { title: 'Sofas', items: ['Wilesden Green', 'Tommy', 'Detroit', 'Peludo'] },
      { title: 'Dining Tables', items: ['Marriot', 'Oakidia', 'Terra', 'Crusoe'] },
      { title: 'Cabinets', items: ['Los Atellos', 'Balieno Roots', 'Kamiya'] },
    ],
  },
  catalogue: {
    eyebrow: 'Our Catalogue',
    title: 'Read the full catalogue right here.',
    body: 'Every collection, every finish, every detail — open the complete catalogue below and browse it page by page without leaving the site.',
    open: 'View Full Catalogue',
    close: 'Close Catalogue',
    download: 'Download PDF',
    newTab: 'Open in new tab',
    fallback:
      'Your browser cannot display the catalogue inline. Use the buttons above to open or download it.',
    hint: 'Scroll inside the viewer to turn pages.',
  },
  packages: {
    eyebrow: 'Packages',
    title: 'Furnish the whole place in one go.',
    body: 'Complete, ready-to-live-in packages — designed, delivered and installed by our team. Every package can be customised.',
    currency: 'EGP',
    cta: 'Ask about this package',
    note: 'Prices are indicative and may vary with finishes, fabrics and customisation.',
    items: [
      {
        name: 'Studio',
        price: '181,999',
        includes: ['Bedroom set', 'Living area', 'Dining nook', 'Delivery & installation'],
      },
      {
        name: '2-Bedroom Chalet',
        price: '312,999',
        includes: ['Two bedrooms', 'Living room', 'Dining table & chairs', 'Delivery & installation'],
      },
      {
        name: '3-Bedroom Chalet',
        price: '413,999',
        includes: [
          'Three bedrooms',
          'Living room',
          'Dining table & chairs',
          'Delivery & installation',
        ],
      },
    ],
  },
  story: {
    eyebrow: 'Our Story',
    title: 'Damietta wood, done differently.',
    body1:
      'Damietta has made Egypt\u2019s furniture for over a century. We grew up inside that trade — and we wanted to bring it somewhere new: cleaner lines, honest materials, and finishes that look as good in year ten as they did on day one.',
    body2:
      'So we kept the craftsmanship and changed everything else. Modern design, transparent pricing, real after-sale service, and a warranty in writing.',
    quote: 'You found it.',
  },
  contact: {
    eyebrow: 'Contact Us',
    title: 'Come see it in person.',
    body: 'Visit any of our locations, or message us on WhatsApp and we will send you photos, prices and availability the same day.',
    branchesTitle: 'Where to find us',
    directions: 'Get directions',
    followTitle: 'Follow us',
    whatsapp: 'Chat on WhatsApp',
    email: 'Email us',
    branches: [
      {
        name: 'Damietta — Kafr Saad',
        detail: 'Factory & main workshop',
        type: 'Factory',
        map: MAP_DAMIETTA,
      },
      {
        name: 'Alexandria — Ring Road, Abis 10 traffic light',
        detail: 'Warehouse & showroom',
        type: 'Warehouse',
        map: MAP_ALEXANDRIA,
      },
      {
        name: 'New Alamein — North Square Mall',
        detail: 'Available at Mobilia store',
        type: 'Retail',
      },
    ],
  },
  footer: {
    rights: 'All rights reserved.',
    made: 'Furniture and more — made in Damietta, Egypt.',
  },
  whatsappAria: 'Chat with us on WhatsApp',
  whatsappPrefill: 'Hello Hassanain Furniture, I would like to ask about',
}

const ar: Dict = {
  dir: 'rtl',
  nav: {
    about: 'من نحن',
    collections: 'المجموعات',
    catalogue: 'الكتالوج',
    packages: 'العروض',
    story: 'قصتنا',
    contact: 'تواصل معنا',
  },
  visitShowroom: 'زيارة المعرض',
  langButton: 'English',
  hero: {
    line1: 'لقيتها',
    line2: 'أخيرًا.',
    tagline: 'من دمياط.',
    taglineAccent: 'بشكل مختلف.',
    body: 'أثاث مصنوع يدويًا في دمياط بخامات مختارة وتصميمات عصرية تدوم، لتناسب أسلوب حياتك.',
    ctaCatalogue: 'تصفح الكتالوج',
    ctaShowroom: 'زيارة المعرض',
    scroll: 'انزل',
  },
  about: {
    eyebrow: 'من نحن',
    title: 'أثاث وأكثر، بالطريقة الصح.',
    body1:
      'حسنين للأثاث بدأت كورشة في دمياط وتحولت إلى بيت أثاث متكامل. نصمم وننفذ وندهن كل قطعة داخل مصنعنا، وده معناه إننا متحكمين في الخشب والتجميع والتشطيب من أول قطعة لآخر وش دهان.',
    body2:
      'من ترابيزة سفرة واحدة لحد تفريش شاليه كامل، بنوصل لكل محافظات مصر بفريقنا، وبنركب في الموقع، وبنفضل مسؤولين عن الشغل بعد التسليم.',
    stats: [
      { value: '10', label: 'سنوات ضمان' },
      { value: '100%', label: 'خشب طبيعي' },
      { value: '3', label: 'فروع في مصر' },
      { value: '∞', label: 'خيارات تفصيل' },
    ],
  },
  features: [
    {
      title: 'صناعة دمياط',
      description: 'شغل حرفيين بخبرة أجيال في صناعة الأثاث.',
    },
    {
      title: 'خامات طبيعية',
      description: 'خشب طبيعي مختار بعناية وأقمشة تنجيد ممتازة.',
    },
    {
      title: 'ضمان 10 سنوات',
      description: 'التزام مكتوب بجودة تدوم لسنين طويلة.',
    },
    {
      title: 'تفصيل حسب الطلب',
      description: 'أي مقاس وأي تشطيب، على حسب مساحتك وذوقك.',
    },
  ],
  collections: {
    eyebrow: 'المجموعات',
    title: 'قطع لكل غرفة في البيت.',
    body: 'غرف نوم، أنتريهات، ترابيزات سفرة ودواليب — كل مجموعة متاحة بأنواع خشب وتشطيبات مختلفة، وممكن تتظبط على مقاس مكانك.',
    viewCatalogue: 'شوفها في الكتالوج',
    groups: [
      { title: 'غرف نوم', items: ['Agadir', 'Elania', 'Agamy', 'King Mariott', 'Amood', 'Camaloon'] },
      { title: 'غرف أطفال', items: ['Tuteal', 'Farfalla'] },
      { title: 'أنتريهات وكنب', items: ['Wilesden Green', 'Tommy', 'Detroit', 'Peludo'] },
      { title: 'ترابيزات سفرة', items: ['Marriot', 'Oakidia', 'Terra', 'Crusoe'] },
      { title: 'دواليب ووحدات', items: ['Los Atellos', 'Balieno Roots', 'Kamiya'] },
    ],
  },
  catalogue: {
    eyebrow: 'الكتالوج',
    title: 'اقرأ الكتالوج كامل من هنا.',
    body: 'كل المجموعات وكل التشطيبات وكل التفاصيل — افتح الكتالوج بالكامل تحت وتصفحه صفحة صفحة من غير ما تخرج من الموقع.',
    open: 'عرض الكتالوج كامل',
    close: 'إغلاق الكتالوج',
    download: 'تحميل PDF',
    newTab: 'فتح في تبويب جديد',
    fallback: 'المتصفح لا يدعم عرض الكتالوج هنا. استخدم الأزرار بالأعلى للفتح أو التحميل.',
    hint: 'مرر داخل العارض لتقليب الصفحات.',
  },
  packages: {
    eyebrow: 'العروض',
    title: 'فرش المكان كله مرة واحدة.',
    body: 'باكدجات متكاملة جاهزة للسكن — تصميم وتوصيل وتركيب من فريقنا. وكل باكدج ممكن يتظبط على طلبك.',
    currency: 'ج.م',
    cta: 'اسأل عن الباكدج',
    note: 'الأسعار استرشادية وقد تختلف حسب التشطيبات والأقمشة والتفصيل.',
    items: [
      {
        name: 'ستوديو',
        price: '181,999',
        includes: ['غرفة نوم', 'ركنة معيشة', 'ركن سفرة', 'التوصيل والتركيب'],
      },
      {
        name: 'شاليه غرفتين',
        price: '312,999',
        includes: ['غرفتين نوم', 'غرفة معيشة', 'سفرة وكراسي', 'التوصيل والتركيب'],
      },
      {
        name: 'شاليه 3 غرف',
        price: '413,999',
        includes: ['3 غرف نوم', 'غرفة معيشة', 'سفرة وكراسي', 'التوصيل والتركيب'],
      },
    ],
  },
  story: {
    eyebrow: 'قصتنا',
    title: 'خشب دمياط… بشكل مختلف.',
    body1:
      'دمياط بتفرش مصر من أكتر من مية سنة، وإحنا اتربينا جوه الصنعة دي. بس كان نفسنا نوديها لمكان جديد: خطوط أنضف، خامات صادقة، وتشطيب يفضل حلو بعد عشر سنين زي أول يوم.',
    body2:
      'فحافظنا على الحرفة وغيرنا كل حاجة تانية: تصميم عصري، أسعار واضحة، خدمة ما بعد البيع حقيقية، وضمان مكتوب.',
    quote: 'لقيتها.',
  },
  contact: {
    eyebrow: 'تواصل معنا',
    title: 'تعالى شوفها بنفسك.',
    body: 'زورنا في أي فرع، أو كلمنا على الواتساب ونبعتلك الصور والأسعار والمتاح في نفس اليوم.',
    branchesTitle: 'أماكننا',
    directions: 'الاتجاهات على الخريطة',
    followTitle: 'تابعنا',
    whatsapp: 'تواصل على واتساب',
    email: 'راسلنا بالإيميل',
    branches: [
      {
        name: 'دمياط — كفر سعد',
        detail: 'المصنع والورشة الرئيسية',
        type: 'المصنع',
        map: MAP_DAMIETTA,
      },
      {
        name: 'الإسكندرية — الطريق الدائري، إشارة أبيس 10',
        detail: 'المخزن والمعرض',
        type: 'المخزن',
        map: MAP_ALEXANDRIA,
      },
      {
        name: 'العلمين الجديدة — نورث سكوير مول',
        detail: 'متوفر داخل متجر Mobilia',
        type: 'نقطة بيع',
      },
    ],
  },
  footer: {
    rights: 'جميع الحقوق محفوظة.',
    made: 'أثاث وأكثر — صناعة دمياط، مصر.',
  },
  whatsappAria: 'تواصل معنا على واتساب',
  whatsappPrefill: 'أهلاً حسنين للأثاث، حابب أستفسر عن',
}

export const content: Record<Lang, Dict> = { en, ar }
