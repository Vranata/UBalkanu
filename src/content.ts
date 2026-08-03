export type Locale = 'bg' | 'en';

export type SectionCopy = {
  title: string;
  description: string;
};

export type Feature = {
  id: string;
  icon: string;
  bg: string;
  copy: Record<Locale, SectionCopy>;
};

export type SectionItem = {
  label: string;
  body: string;
};

export type SectionDetail = {
  id: string;
  copy: Record<Locale, {
    heading: string;
    intro: string;
    items: SectionItem[];
  }>;
};

export const navigation = [
  { id: 'home', copy: { bg: 'Начало', en: 'Home' } },
  { id: 'podcast', copy: { bg: 'Подкаст', en: 'Podcast' } },
  { id: 'mission', copy: { bg: 'Мисията', en: 'Mission' } },
  { id: 'goals', copy: { bg: 'Целите', en: 'Goals' } },
  { id: 'guide', copy: { bg: 'Пътеводител на културния стопаджия', en: 'Cultural Guide' } },
  { id: 'facts', copy: { bg: 'Знаехте ли, че...', en: 'Did You Know' } },
  { id: 'film', copy: { bg: 'Късометражен филм', en: 'Short Film' } },
] as const;

export const heroCopy: Record<Locale, { eyebrow: string; title: string; subtitle: string; body: string; cta: string }> = {
  bg: {
    eyebrow: 'Подкаст, пътеводител и културна мисия',
    title: 'У БАЛКАНЪ',
    subtitle: 'Където корените говорят, а бъдещето слуша',
    body: 'Място за истории, лични гласове и културни следи от България и Балканите. Създаваме съдържание, което е едновременно красиво, полезно и близко до младите хора.',
    cta: 'Започни пътуването',
  },
  en: {
    eyebrow: 'Podcast, guide and cultural mission',
    title: 'U Balkana',
    subtitle: 'Where the roots speak and the future listens',
    body: 'A space for stories, personal voices and cultural traces from Bulgaria and the Balkans. We build content that is beautiful, useful and close to young people.',
    cta: 'Start the journey',
  },
};

export const featureCards: Feature[] = [
  {
    id: 'podcast',
    icon: 'mic',
    bg: 'Истории, личности и теми, които свързват.',
    copy: {
      bg: { title: 'ПОДКАСТ', description: 'Истории, личности и теми, които свързват.' },
      en: { title: 'Podcast', description: 'Stories, personalities and topics that connect.' },
    },
  },
  {
    id: 'mission',
    icon: 'flag',
    bg: 'Защо създадохме „У Балканъ" и какво искаме да постигнем.',
    copy: {
      bg: { title: 'МИСИЯТА', description: 'Защо създадохме „У Балканъ" и какво искаме да постигнем.' },
      en: { title: 'Mission', description: 'Why we built "U Balkana" and what we want to achieve.' },
    },
  },
  {
    id: 'goals',
    icon: 'target',
    bg: 'Конкретни стъпки към културно пробуждане на новото поколение.',
    copy: {
      bg: { title: 'ЦЕЛИТЕ', description: 'Конкретни стъпки към културно пробуждане на новото поколение.' },
      en: { title: 'Goals', description: 'Concrete steps toward cultural awakening for a new generation.' },
    },
  },
  {
    id: 'guide',
    icon: 'compass',
    bg: 'Откриваме забележителни места, хора и истории из България и Балканите.',
    copy: {
      bg: { title: 'ПЪТЕВОДИТЕЛ НА КУЛТУРНИЯ СТОПАДЖИЯ', description: 'Откриваме забележителни места, хора и истории из България и Балканите.' },
      en: { title: 'Cultural Guide', description: 'We uncover remarkable places, people and stories across Bulgaria and the Balkans.' },
    },
  },
  {
    id: 'facts',
    icon: 'spark',
    bg: 'Любопитни факти за нашата история, традиции и наследство.',
    copy: {
      bg: { title: 'ЗНАЕХТЕ ЛИ, ЧЕ...', description: 'Любопитни факти за нашата история, традиции и наследство.' },
      en: { title: 'Did You Know That...', description: 'Curious facts about our history, traditions and heritage.' },
    },
  },
  {
    id: 'film',
    icon: 'clapper',
    bg: 'История за корените, които ни изграждат.',
    copy: {
      bg: { title: 'КЪСОМЕТРАЖЕН\nФИЛМ', description: 'История за корените, които ни изграждат.' },
      en: { title: 'Short\nFilm', description: 'A story about the roots that shape us.' },
    },
  },
];

export const quoteCopy: Record<Locale, string> = {
  bg: 'Народ, който не почита традициите си, е обречен на забвение.',
  en: 'A nation that does not honor its traditions is doomed to be forgotten.',
};

export const sectionDetails: SectionDetail[] = [
  {
    id: 'podcast',
    copy: {
      bg: {
        heading: 'ПОДКАСТЪТ',
        intro: 'У Балканъ е подкаст за хора, места и истории от България и Балканите — разказани с топлота, любопитство и уважение към корените.',
        items: [
          { label: 'За какво говорим', body: 'Разговаряме с творци, историци, пътешественици и хора с необикновени истории. Темите включват традиции, езици, занаяти, местни легенди и съвременната идентичност на балканците.' },
          { label: 'Формат', body: 'Всеки епизод е разговор в дълбочина — около 45–60 минути — с конкретен гост или тема. Издаваме нов епизод всяка втора седмица.' },
          { label: 'Как да слушаш', body: 'Подкастът е достъпен в Spotify, Apple Podcasts, YouTube и на нашия сайт. Абонирай се, за да не пропускаш нито един епизод.' },
        ],
      },
      en: {
        heading: 'THE PODCAST',
        intro: 'U Balkana is a podcast about people, places and stories from Bulgaria and the Balkans — told with warmth, curiosity and respect for our roots.',
        items: [
          { label: 'What we talk about', body: 'We speak with creatives, historians, travellers and people with extraordinary stories. Topics cover traditions, languages, crafts, local legends and the modern Balkan identity.' },
          { label: 'Format', body: 'Each episode is an in-depth conversation — around 45–60 minutes — with a specific guest or theme. We release a new episode every two weeks.' },
          { label: 'How to listen', body: 'The podcast is available on Spotify, Apple Podcasts, YouTube and our website. Subscribe so you never miss an episode.' },
        ],
      },
    },
  },
  {
    id: 'mission',
    copy: {
      bg: {
        heading: 'НАШАТА МИСИЯ',
        intro: 'Вярваме, че културата е жива само докато се предава. Създадохме У Балканъ, за да свържем поколенията — чрез истории, образи и звуци от земята ни.',
        items: [
          { label: 'Защо го правим', body: 'Много млади хора се чувстват откъснати от корените си — не защото не им е интересно, а защото никой не им е разказал историята по достъпен и красив начин. Ние искаме да сменим това.' },
          { label: 'Към кого се обръщаме', body: 'Към всеки, който иска да знае повече за своя произход — независимо дали е на 18 или на 80 години. Към диаспората, към студентите, към пътешествениците с любопитство.' },
          { label: 'Как го правим', body: 'Чрез подкаст, кратко видео, пътеводители и уникален визуален стил, вдъхновен от традиционното изкуство на Балканите. Всичко — с грижа за детайла и уважение към историята.' },
        ],
      },
      en: {
        heading: 'OUR MISSION',
        intro: 'We believe culture is alive only as long as it is passed on. We built U Balkana to connect generations — through stories, images and sounds from our land.',
        items: [
          { label: 'Why we do it', body: "Many young people feel disconnected from their roots — not because they aren't interested, but because nobody told them the story in an accessible and beautiful way. We want to change that." },
          { label: 'Who we speak to', body: 'To everyone who wants to know more about their origin — whether they are 18 or 80. To the diaspora, to students, to curious travellers.' },
          { label: 'How we do it', body: 'Through a podcast, short video, cultural guides and a unique visual style inspired by traditional Balkan art. Everything crafted with attention to detail and respect for history.' },
        ],
      },
    },
  },
  {
    id: 'goals',
    copy: {
      bg: {
        heading: 'НАШИТЕ ЦЕЛИ',
        intro: 'Не само разказваме — действаме. Имаме конкретни цели, към чието постигане работим всеки ден.',
        items: [
          { label: '01 — Образование', body: 'Да направим историята и традициите на България и Балканите достъпни за нови аудитории чрез дигитално съдържание с висока стойност.' },
          { label: '02 — Общност', body: 'Да изградим активна общност от хора, обединени от любов към своето наследство — онлайн и офлайн.' },
          { label: '03 — Архив', body: 'Да съхраним истории, занаяти и гласове, които иначе рискуват да изчезнат — в подкасти, видеа и писмени материали.' },
          { label: '04 — Партньорства', body: 'Да работим с музеи, университети, местни общности и творци, за да умножим въздействието на нашата работа.' },
        ],
      },
      en: {
        heading: 'OUR GOALS',
        intro: "We don't just tell stories — we act. We have concrete goals we work toward every single day.",
        items: [
          { label: '01 — Education', body: 'To make the history and traditions of Bulgaria and the Balkans accessible to new audiences through high-quality digital content.' },
          { label: '02 — Community', body: 'To build an active community of people united by love for their heritage — online and offline.' },
          { label: '03 — Archive', body: 'To preserve stories, crafts and voices that would otherwise risk disappearing — in podcasts, videos and written materials.' },
          { label: '04 — Partnerships', body: 'To collaborate with museums, universities, local communities and creators, multiplying the impact of our work.' },
        ],
      },
    },
  },
  {
    id: 'guide',
    copy: {
      bg: {
        heading: 'ПЪТЕВОДИТЕЛЯТ НА КУЛТУРНИЯ СТОПАДЖИЯ',
        intro: 'Пътеводителят е нашият личен списък с места, хора и преживявания из България и Балканите — подбрани не по звезди, а по душа.',
        items: [
          { label: 'Какво е „Стопаджия"', body: 'Стопаджията е пътешественик без фиксиран план — отворен за неочакваното. Нашият пътеводител е за хора, готови да открият нещо автентично, далеч от масовия туризъм.' },
          { label: 'Какво включва', body: 'Скрити села, занаятчийски работилници, местни фестивали, забравени параклиси, традиционни кухни и хората, които ги пазят живи.' },
          { label: 'Как да го ползваш', body: 'Всяко място е описано с история, практически детайли и лично впечатление. Водим те не само до дестинацията, а до разбирането й.' },
        ],
      },
      en: {
        heading: "THE CULTURAL HITCHHIKER'S GUIDE",
        intro: 'Our guide is a personal list of places, people and experiences across Bulgaria and the Balkans — selected not by stars, but by soul.',
        items: [
          { label: 'What is a "Stopadzhia"', body: 'A stopadzhia is a traveller without a fixed plan — open to the unexpected. Our guide is for people ready to discover something authentic, far from mass tourism.' },
          { label: 'What it covers', body: 'Hidden villages, craft workshops, local festivals, forgotten chapels, traditional kitchens and the people who keep them alive.' },
          { label: 'How to use it', body: 'Each place is described with its history, practical details and a personal impression. We lead you not just to the destination, but to understanding it.' },
        ],
      },
    },
  },
  {
    id: 'facts',
    copy: {
      bg: {
        heading: 'ЗНАЕХТЕ ЛИ, ЧЕ...',
        intro: 'Историята на България и Балканите е пълна с изненади. Тук събираме любопитни факти, малко известни истини и поводи за гордост.',
        items: [
          { label: 'Кирилицата е Bulgarian', body: 'Азбуката, използвана от над 250 милиона души по света, е създадена в България. Кирил и Методий са просветили Европа на родния ни език.' },
          { label: 'Розовото масло', body: 'България произвежда около 70% от световното розово масло. Розовата долина край Казанлък е уникален природен и културен феномен.' },
          { label: 'Боянската църква', body: 'Стенописите на Боянската църква, датирани от 1259 г., са едни от най-значимите средновековни произведения на изкуството в Европа — предшестват Джото с десетилетия.' },
          { label: 'Нестинарството', body: 'Ритуалното ходене по жарава на нестинарите е признато от ЮНЕСКО за нематериално световно наследство — феномен, запазен само в България.' },
        ],
      },
      en: {
        heading: 'DID YOU KNOW THAT...',
        intro: 'The history of Bulgaria and the Balkans is full of surprises. Here we gather curious facts, little-known truths and reasons for pride.',
        items: [
          { label: 'The Cyrillic alphabet is Bulgarian', body: 'The alphabet used by over 250 million people worldwide was created in Bulgaria. Saints Cyril and Methodius enlightened Europe in our native language.' },
          { label: 'Rose oil', body: "Bulgaria produces around 70% of the world's rose oil. The Rose Valley near Kazanlak is a unique natural and cultural phenomenon." },
          { label: 'The Boyana Church', body: 'The frescoes of the Boyana Church, dated to 1259, are among the most significant medieval artworks in Europe — preceding Giotto by decades.' },
          { label: 'Nestinarstvo', body: 'The ritual fire-walking of the Nestinari is recognized by UNESCO as intangible world heritage — a phenomenon preserved only in Bulgaria.' },
        ],
      },
    },
  },
  {
    id: 'film',
    copy: {
      bg: {
        heading: 'КЪСОМЕТРАЖНИЯТ ФИЛМ',
        intro: 'Отвъд думите — история за корените, разказана с образ, музика и тишина. Нашият документален късометражен филм е ода към земята, която ни е изградила.',
        items: [
          { label: 'За какво е филмът', body: 'Филмът проследява пътуването на млад човек из Балканите в търсене на своите корени. Среща с хора, места и традиции, останали настрана от съвременния свят.' },
          { label: 'Режисура и визия', body: 'Снет с максимална грижа за естетиката — широки планове на балканските пейзажи, интимни портрети и традиционна музика, записана на живо.' },
          { label: 'Кога и как', body: 'Филмът е в процес на производство. Следете нашите канали за анонс на премиерата — планираме прожекции в България и в градове с голяма диаспора.' },
        ],
      },
      en: {
        heading: 'THE SHORT FILM',
        intro: 'Beyond words — a story about roots told through image, music and silence. Our documentary short film is an ode to the land that shaped us.',
        items: [
          { label: 'What the film is about', body: 'The film follows the journey of a young person across the Balkans in search of their roots. Encounters with people, places and traditions left aside by the modern world.' },
          { label: 'Direction and vision', body: 'Shot with maximum attention to aesthetics — wide shots of Balkan landscapes, intimate portraits and traditional music recorded live.' },
          { label: 'When and how', body: 'The film is currently in production. Follow our channels for the premiere announcement — we are planning screenings in Bulgaria and in cities with large diaspora communities.' },
        ],
      },
    },
  },
];
