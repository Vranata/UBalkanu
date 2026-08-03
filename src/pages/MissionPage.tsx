import { motion } from 'framer-motion';
import type { Locale } from '../content';

type Props = {
  locale: Locale;
};

const pillars = [
  {
    icon: '🚩',
    title: { bg: 'Защо го правим', en: 'Why We Do It' },
    text: {
      bg: 'Много млади хора се чувстват откъснати от корените си — не защото не им е интересно, а защото никой не им е разказал историята по достъпен и красиво оформен начин.',
      en: 'Many young people feel disconnected from their roots — not because they are uninterested, but because nobody told them the story in an accessible, beautiful way.',
    },
  },
  {
    icon: '🤝',
    title: { bg: 'Към кого се обръщаме', en: 'Who We Address' },
    text: {
      bg: 'Към всеки, който иска да знае повече за своя произход — независимо дали е на 18 или на 80 години. Към диаспората, към студентите, към пътешествениците с любопитство.',
      en: 'To everyone who wants to know more about their origins — whether 18 or 80 years old. To the diaspora, students, and curious travellers.',
    },
  },
  {
    icon: '✨',
    title: { bg: 'Как го правим', en: 'How We Do It' },
    text: {
      bg: 'Чрез подкаст, кратко видео, пътеводители и уникален визуален стил, вдъхновен от традиционното изкуство на Балканите. Всичко с грижа и уважение.',
      en: 'Through podcasting, short film, guides and a unique visual style inspired by traditional Balkan art. Everything crafted with respect.',
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
            ? '„У Балканъ роди своя глас от любовта към преданията, балкана и древния български дух. Ние не събираме музейни експонати, а съживяваме живата памет на нашия род."'
            : '"U Balkana was born out of love for folklore, the mountain range, and the ancient Bulgarian spirit. We do not gather museum items; we revive the living memory of our people."'}
        </blockquote>
      </section>

      <section className="pillars-grid">
        {pillars.map((pillar, i) => (
          <article key={i} className="pillar-card">
            <div className="pillar-icon">{pillar.icon}</div>
            <h3>{pillar.title[locale]}</h3>
            <p>{pillar.text[locale]}</p>
          </article>
        ))}
      </section>
    </motion.div>
  );
}
