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
    body:
      'Място за истории, лични гласове и културни следи от България и Балканите. Създаваме съдържание, което е едновременно красиво, полезно и близко до младите хора.',
    cta: 'Започни пътуването',
  },
  en: {
    eyebrow: 'Podcast, guide and cultural mission',
    title: 'U Balkana',
    subtitle: 'Where the roots speak and the future listens',
    body:
      'A space for stories, personal voices and cultural traces from Bulgaria and the Balkans. We build content that is beautiful, useful and close to young people.',
    cta: 'Start the journey',
  },
};

export const featureCards: Feature[] = [
  {
    id: 'podcast',
    icon: 'mic',
    bg: 'Истории, личности и теми, които свързват.',
    copy: {
      bg: {
        title: 'ПОДКАСТ',
        description: 'Истории, личности и теми, които свързват.',
      },
      en: {
        title: 'Podcast',
        description: 'Stories, personalities and topics that connect.',
      },
    },
  },
  {
    id: 'mission',
    icon: 'flag',
    bg: 'Защо създадохме „У Балканъ“ и какво искаме да постигнем.',
    copy: {
      bg: {
        title: 'МИСИЯТА',
        description: 'Защо създадохме „У Балканъ“ и какво искаме да постигнем.',
      },
      en: {
        title: 'Mission',
        description: 'Why we built “U Balkana” and what we want to achieve.',
      },
    },
  },
  {
    id: 'goals',
    icon: 'target',
    bg: 'Конкретни стъпки към културно пробуждане на новото поколение.',
    copy: {
      bg: {
        title: 'ЦЕЛИТЕ',
        description: 'Конкретни стъпки към културно пробуждане на новото поколение.',
      },
      en: {
        title: 'Goals',
        description: 'Concrete steps toward cultural awakening for a new generation.',
      },
    },
  },
  {
    id: 'guide',
    icon: 'compass',
    bg: 'Откриваме забележителни места, хора и истории из България и Балканите.',
    copy: {
      bg: {
        title: 'ПЪТЕВОДИТЕЛ НА КУЛТУРНИЯТ СТОПАДЖИЯ',
        description: 'Откриваме забележителни места, хора и истории из България и Балканите.',
      },
      en: {
        title: 'Cultural Guide',
        description: 'We uncover remarkable places, people and stories across Bulgaria and the Balkans.',
      },
    },
  },
  {
    id: 'facts',
    icon: 'spark',
    bg: 'Любопитни факти за нашата история, традиции и наследство.',
    copy: {
      bg: {
        title: 'ЗНАЕТХЕ ЛИ, ЧЕ...',
        description: 'Любопитни факти за нашата история, традиции и наследство.',
      },
      en: {
        title: 'Did You Know That...',
        description: 'Curious facts about our history, traditions and heritage.',
      },
    },
  },
  {
    id: 'film',
    icon: 'clapper',
    bg: 'История за корените, които ни изграждат.',
    copy: {
      bg: {
        title: 'КЪСОМЕТРАЖЕН\nФИЛМ',
        description: 'История за корените, които ни изграждат.',
      },
      en: {
        title: 'Short\nFilm',
        description: 'A story about the roots that shape us.',
      },
    },
  },
];

export const quoteCopy: Record<Locale, string> = {
  bg: 'Народ, който не почита традициите си, е обречен на забвение.',
  en: 'A nation that does not honor its traditions is doomed to be forgotten.',
};
