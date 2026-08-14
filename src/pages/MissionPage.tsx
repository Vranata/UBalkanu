import { motion } from 'framer-motion';
import type { Locale } from '../content';

type Props = {
  locale: Locale;
};

// Inline SVG icons matching hero card style
const WhyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" width="48" height="48">
    <circle cx="32" cy="32" r="22" stroke="#bfa15f" strokeWidth="2" strokeLinecap="round" />
    <path d="M32 18v16" stroke="#bfa15f" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="32" cy="42" r="2" fill="#bfa15f" />
    <path d="M22 14a16 16 0 0 1 20 0" stroke="#bfa15f" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
  </svg>
);

const WhoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" width="48" height="48">
    <circle cx="24" cy="20" r="8" stroke="#bfa15f" strokeWidth="2" />
    <circle cx="42" cy="20" r="8" stroke="#bfa15f" strokeWidth="2" />
    <path d="M8 52c0-10 7-16 16-16s16 6 16 16" stroke="#bfa15f" strokeWidth="2" strokeLinecap="round" />
    <path d="M42 36c6 0 14 5 14 16" stroke="#bfa15f" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    <circle cx="24" cy="20" r="2" fill="#bfa15f" fillOpacity="0.3" />
    <circle cx="42" cy="20" r="2" fill="#bfa15f" fillOpacity="0.3" />
  </svg>
);

const HowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" width="48" height="48">
    <circle cx="32" cy="32" r="22" stroke="#bfa15f" strokeWidth="2" strokeLinecap="round" />
    <path d="M26 24c0-3.3 2.7-6 6-6s6 2.7 6 6c0 4-6 5.5-6 10" stroke="#bfa15f" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="32" cy="44" r="2" fill="#bfa15f" />
  </svg>
);

const pillars = [
  {
    icon: WhyIcon,
    title: { bg: 'Защо го правим', en: 'Why We Do It' },
    text: {
      bg: 'Много млади хора се чувстват откъснати от корените си — не защото не им е интересно, а защото никой не им е разказал историята по достъпен и красиво оформен начин.',
      en: 'Many young people feel disconnected from their roots — not because they are uninterested, but because nobody told them the story in an accessible, beautiful way.',
    },
  },
  {
    icon: WhoIcon,
    title: { bg: 'Към кого се обръщаме', en: 'Who We Address' },
    text: {
      bg: 'КЪМ ВСЕКИ! Всеки българин е част от инициативата! Правим го достъпно за всички хора, които искат да знаят повече за прозхода и културата си, защото когато нямаш корен си никой, когато си никой си слаб! Колкото повече корени има дървото на У БалканЪ толкова повече ще помогнем на бъдещите поколения да знаят за миналото си и да развиват бъдещето си ТУК в България!',
      en: 'TO EVERYONE! Every Bulgarian is part of the initiative! We make it accessible to all people who want to know more about their origin and culture, because when you have no roots, you are nobody, and when you are nobody, you are weak! The more roots the tree of U BalkanЪ has, the more we will help future generations to know their past and develop their future HERE in Bulgaria!',
    },
  },
  {
    icon: HowIcon,
    title: { bg: 'Как го правим', en: 'How We Do It' },
    text: {
      bg: '1. Чрез създаване на обединена общност с национална ангажираност.\n\n2. Чрез интересни и истински истории, достъпни и актуални за всички възрастови групи.\n\n3. Чрез модерен дигитален формат и висококачествено съдържание, което свързва традициите с бъдещето.',
      en: '1. By building a united community with nationwide engagement.\n\n2. Through engaging and authentic stories that are accessible and relevant to all age groups.\n\n3. Through modern digital formats and high-quality content connecting tradition with the future.',
    },
  },
];

export default function MissionPage({ locale }: Props) {
  return (
    <motion.div
      className="page-detail-container"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.4 }}
    >
      <header className="page-header">
        <span className="page-badge">{locale === 'bg' ? 'За проекта' : 'About Project'}</span>
        <h1>{locale === 'bg' ? 'МИСИЯТА У БАЛКАНЪ' : 'THE U BALKANA MISSION'}</h1>
        <p className="page-subtitle">
          {locale === 'bg'
            ? 'Вярваме, че културата е жива само докато се предава от поколение на поколение.'
            : 'We believe culture is alive only as long as it is passed from generation to generation.'}
        </p>
      </header>

      <section className="manifesto-card">
        <blockquote className="manifesto-text">
          {locale === 'bg'
            ? '„У Балканъ роди своя глас от любовта към преданията и древния български дух. Ние не събираме музейни експонати, а съживяваме живата памет на нашия род."'
            : '"U Balkana was born out of love for folklore and the ancient Bulgarian spirit. We do not gather museum items; we revive the living memory of our people."'}
        </blockquote>
      </section>

      <section className="pillars-grid">
        {pillars.map((pillar, i) => (
          <article key={i} className="pillar-card">
            <div className="pillar-icon"><pillar.icon /></div>
            <h3>{pillar.title[locale]}</h3>
            <p style={{ whiteSpace: 'pre-line' }}>{pillar.text[locale]}</p>
          </article>
        ))}
      </section>
    </motion.div>
  );
}
