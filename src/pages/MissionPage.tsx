import { motion } from 'framer-motion';
import type { Locale } from '../content';

type Props = {
  locale: Locale;
};

// Inline SVG icons matching hero card style
const WhyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" width="48" height="48">
    <circle cx="32" cy="32" r="22" stroke="#bfa15f" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 18v16" stroke="#bfa15f" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="32" cy="42" r="2" fill="#bfa15f"/>
    <path d="M22 14a16 16 0 0 1 20 0" stroke="#bfa15f" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

const WhoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" width="48" height="48">
    <circle cx="24" cy="20" r="8" stroke="#bfa15f" strokeWidth="2"/>
    <circle cx="42" cy="20" r="8" stroke="#bfa15f" strokeWidth="2"/>
    <path d="M8 52c0-10 7-16 16-16s16 6 16 16" stroke="#bfa15f" strokeWidth="2" strokeLinecap="round"/>
    <path d="M42 36c6 0 14 5 14 16" stroke="#bfa15f" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    <circle cx="24" cy="20" r="2" fill="#bfa15f" fillOpacity="0.3"/>
    <circle cx="42" cy="20" r="2" fill="#bfa15f" fillOpacity="0.3"/>
  </svg>
);

const HowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" width="48" height="48">
    <path d="M32 8L8 24v32h48V24L32 8z" stroke="#bfa15f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 56V38a8 8 0 0 1 16 0v18" stroke="#bfa15f" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 16v10M26 22h12" stroke="#bfa15f" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="32" cy="22" r="1.5" fill="#bfa15f"/>
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
      bg: 'Към всеки, който иска да знае повече за своя произход — независимо дали е на 18 или на 80 години. Към диаспората, към студентите, към пътешествениците с любопитство.',
      en: 'To everyone who wants to know more about their origins — whether 18 or 80 years old. To the diaspora, students, and curious travellers.',
    },
  },
  {
    icon: HowIcon,
    title: { bg: 'Как го правим', en: 'How We Do It' },
    text: {
      bg: 'Чрез подкаст, кратко видео, пътеводители и уникален визуален стил, вдъхновен от традиционното българско изкуство. Всичко с грижа и уважение.',
      en: 'Through podcasting, short film, guides and a unique visual style inspired by traditional Bulgarian art. Everything crafted with respect.',
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
            <p>{pillar.text[locale]}</p>
          </article>
        ))}
      </section>
    </motion.div>
  );
}
