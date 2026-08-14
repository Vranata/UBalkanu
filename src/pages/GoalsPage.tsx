import { motion } from 'framer-motion';
import type { Locale } from '../content';

type Props = {
  locale: Locale;
};

// ── SVG Icons ──────────────────────────────────────────────────────────────
const PodcastIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" width="44" height="44">
    <circle cx="32" cy="20" r="12" stroke="#bfa15f" strokeWidth="2" />
    <path d="M16 36c0 8.84 7.16 16 16 16s16-7.16 16-16" stroke="#bfa15f" strokeWidth="2" strokeLinecap="round" />
    <line x1="32" y1="52" x2="32" y2="60" stroke="#bfa15f" strokeWidth="2" strokeLinecap="round" />
    <circle cx="32" cy="20" r="4" fill="#bfa15f" fillOpacity="0.35" />
  </svg>
);

const FilmIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" width="44" height="44">
    <rect x="6" y="14" width="52" height="36" rx="3" stroke="#bfa15f" strokeWidth="2" />
    <line x1="6" y1="24" x2="58" y2="24" stroke="#bfa15f" strokeWidth="1.5" opacity="0.5" />
    <line x1="6" y1="40" x2="58" y2="40" stroke="#bfa15f" strokeWidth="1.5" opacity="0.5" />
    <rect x="14" y="8" width="6" height="10" rx="1" fill="#bfa15f" fillOpacity="0.45" />
    <rect x="44" y="8" width="6" height="10" rx="1" fill="#bfa15f" fillOpacity="0.45" />
    <path d="M26 29l12 7-12 7V29z" fill="#bfa15f" />
  </svg>
);

const GuideIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" width="44" height="44">
    <circle cx="32" cy="32" r="22" stroke="#bfa15f" strokeWidth="2" />
    <line x1="32" y1="10" x2="32" y2="54" stroke="#bfa15f" strokeWidth="1.5" opacity="0.4" />
    <line x1="10" y1="32" x2="54" y2="32" stroke="#bfa15f" strokeWidth="1.5" opacity="0.4" />
    <polygon points="32,14 36,24 32,22 28,24" fill="#bfa15f" />
    <circle cx="32" cy="32" r="4" fill="#bfa15f" fillOpacity="0.5" />
  </svg>
);

const FactsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" width="44" height="44">
    <path d="M12 12h40v40H12z" stroke="#bfa15f" strokeWidth="2" rx="2" />
    <line x1="20" y1="24" x2="44" y2="24" stroke="#bfa15f" strokeWidth="2" strokeLinecap="round" />
    <line x1="20" y1="32" x2="44" y2="32" stroke="#bfa15f" strokeWidth="2" strokeLinecap="round" />
    <line x1="20" y1="40" x2="34" y2="40" stroke="#bfa15f" strokeWidth="2" strokeLinecap="round" />
    <circle cx="50" cy="48" r="6" fill="rgba(127,143,57,0.25)" stroke="#bfa15f" strokeWidth="1.5" />
    <text x="47.5" y="52" fontSize="8" fill="#bfa15f" fontFamily="serif">!</text>
  </svg>
);

// ── Data ───────────────────────────────────────────────────────────────────
const contentPillars = [
  {
    icon: PodcastIcon,
    title: { bg: 'Подкаст', en: 'Podcast' },
    text: {
      bg: 'Разговори с личности, които пазят културата жива. Нов епизод всяка седмица.',
      en: 'Conversations with personalities who keep the culture alive. A new episode every week.',
    },
    link: '/podcast',
  },
  {
    icon: FilmIcon,
    title: { bg: 'Документален филм', en: 'Documentary Film' },
    text: {
      bg: 'Филмът показва как българската култура е орисана да оцелее чрез неизбежната среща на миналото и бъдещето.',
      en: 'The film shows how Bulgarian culture is destined to survive through the inevitable encounter of past and future.',
    },
    link: '/film',
  },
  {
    icon: GuideIcon,
    title: { bg: 'Пътеводителят', en: 'The Guide' },
    text: {
      bg: 'Скрити места, занаяти и автентични преживявания из България и Балканите — избрани от душа.',
      en: 'Hidden places, crafts and authentic experiences across Bulgaria and the Balkans — chosen with soul.',
    },
    link: '/guide',
  },
  {
    icon: FactsIcon,
    title: { bg: 'Знаехте ли, че...', en: 'Did You Know' },
    text: {
      bg: 'Любопитни факти и малко известни истини за историята и наследството на нашата земя.',
      en: 'Curious facts and little-known truths about the history and heritage of our land.',
    },
    link: '/facts',
  },
];

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/ubalkanapodcast.bg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61576619913603',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@ubalkanapodcastbg',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M19.6 3h-3.2v11.4a3.2 3.2 0 1 1-3.2-3.2c.3 0 .6 0 .9.1V8c-.3 0-.6-.1-.9-.1a6.4 6.4 0 1 0 6.4 6.4V8.4A9.5 9.5 0 0 0 24 9.3V6.2A6.4 6.4 0 0 1 19.6 3z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8z" />
        <polygon points="9.7 15.5 15.8 12 9.7 8.5 9.7 15.5" fill="#140f0c" />
      </svg>
    ),
  },
];

const stats = [
  { value: '2024', label: { bg: 'Основан', en: 'Founded' } },
  { value: '4+', label: { bg: 'Епизода', en: 'Episodes' } },
  { value: '10K+', label: { bg: 'Гледания', en: 'Views' } },
  { value: '∞', label: { bg: 'Истории', en: 'Stories' } },
];

// ── Component ──────────────────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function GoalsPage({ locale }: Props) {
  return (
    <motion.div
      className="page-detail-container"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.4 }}
    >
      {/* ── Header ── */}
      <header className="page-header">
        <span className="page-badge">{locale === 'bg' ? 'За проекта' : 'About'}</span>
        <h1>{locale === 'bg' ? 'У БАЛКАНЪ' : 'U BALKANA'}</h1>
        <p className="page-subtitle">
          {locale === 'bg'
            ? 'Подкаст, пътеводител и културна мисия за България.'
            : 'A podcast, guide and cultural mission for Bulgaria.'}
        </p>
      </header>

      {/* ── Hero Manifesto ── */}
      <section className="manifesto-card">
        <blockquote className="manifesto-text">
          {locale === 'bg'
            ? '„У Балканъ е място за истории, лични гласове и културни следи от България. Заедно с Мартин Петков създаваме съдържание, което е красиво, смислено и близко до младите хора."'
            : '"U Balkana is a space for stories, personal voices and cultural traces from Bulgaria. Together with Martin Petkov, we create content that is beautiful, meaningful and close to young people."'}
        </blockquote>
      </section>

      {/* ── Stats row ── */}
      <motion.section
        className="ubalkana-stats"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {stats.map((s) => (
          <motion.div key={s.value} className="ubalkana-stat" variants={itemVariants}>
            <span className="ubalkana-stat-value">{s.value}</span>
            <span className="ubalkana-stat-label">{s.label[locale]}</span>
          </motion.div>
        ))}
      </motion.section>

      {/* ── What we do ── */}
      <section className="ubalkana-section">
        <h2 className="ubalkana-section-heading">
          {locale === 'bg' ? 'КАКВО ПРАВИМ' : 'WHAT WE DO'}
        </h2>
        <motion.div
          className="pillars-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {contentPillars.map((pillar, i) => (
            <motion.article key={i} className="pillar-card" variants={itemVariants}>
              <div className="pillar-icon">
                <pillar.icon />
              </div>
              <h3>{pillar.title[locale]}</h3>
              <p>{pillar.text[locale]}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* ── Who we are ── */}
      <section className="ubalkana-section">
        <h2 className="ubalkana-section-heading">
          {locale === 'bg' ? 'КОИ СМЕ НИЕ' : 'WHO WE ARE'}
        </h2>
        <div className="ubalkana-who-grid">
          <div className="ubalkana-who-text">
            <p>
              {locale === 'bg'
                ? 'У Балканъ е независим творчески проект, роден от любовта към историята, традициите и хората на България. Вярваме, че всяка история заслужава да бъде разказана — с уважение, с топлота и с красота.'
                : 'U Balkana is an independent creative project, born from love for the history, traditions and people of Bulgaria. We believe every story deserves to be told — with respect, warmth and beauty.'}
            </p>
            <p>
              {locale === 'bg'
                ? 'Нашата цел е да свържем поколенията и да направим богатото българско наследство достъпно за всеки — независимо дали живее в България или в другия край на света.'
                : 'Our goal is to connect generations and make the rich Bulgarian heritage accessible to everyone — whether they live in Bulgaria or on the other side of the world.'}
            </p>
          </div>
          <aside className="ubalkana-values">
            <div className="ubalkana-value-item">
              <span className="ubalkana-value-icon">❖</span>
              <div>
                <strong>{locale === 'bg' ? 'Автентичност' : 'Authenticity'}</strong>
                <p>{locale === 'bg' ? 'Истории от реални хора и места.' : 'Stories from real people and places.'}</p>
              </div>
            </div>
            <div className="ubalkana-value-item">
              <span className="ubalkana-value-icon">❖</span>
              <div>
                <strong>{locale === 'bg' ? 'Красота' : 'Beauty'}</strong>
                <p>{locale === 'bg' ? 'Визуална и звукова естетика на ниво.' : 'Visual and audio aesthetics at the highest level.'}</p>
              </div>
            </div>
            <div className="ubalkana-value-item">
              <span className="ubalkana-value-icon">❖</span>
              <div>
                <strong>{locale === 'bg' ? 'Общност' : 'Community'}</strong>
                <p>{locale === 'bg' ? 'Хора, обединени от любов към корените.' : 'People united by love for their roots.'}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Follow us ── */}
      <section className="ubalkana-section ubalkana-follow">
        <h2 className="ubalkana-section-heading">
          {locale === 'bg' ? 'СЛЕДВАЙТЕ НИ' : 'FOLLOW US'}
        </h2>
        <p className="ubalkana-follow-subtitle">
          {locale === 'bg'
            ? 'Присъединете се към общността ни в социалните мрежи и не пропускайте нито една история.'
            : 'Join our community on social media and never miss a single story.'}
        </p>
        <div className="ubalkana-social-row">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ubalkana-social-btn"
              aria-label={s.name}
            >
              {s.icon}
              <span>{s.name}</span>
            </a>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
