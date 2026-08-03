import { motion } from 'framer-motion';
import type { Locale } from '../content';

type Props = {
  locale: Locale;
};

const goalsList = [
  {
    num: '01',
    title: { bg: 'Дигитално Образование', en: 'Digital Education' },
    desc: {
      bg: 'Да направим историята и традициите на България и Балканите достъпни за нови аудитории чрез дигитално съдържание с висока стойност.',
      en: 'To make the history and traditions of Bulgaria and the Balkans accessible to new audiences through high-value digital content.',
    },
    progress: 85,
    tag: { bg: 'В активен процес', en: 'In Progress' },
  },
  {
    num: '02',
    title: { bg: 'Младежка Общност', en: 'Youth Community' },
    desc: {
      bg: 'Да изградим активна общност от хора, обединени от любов към своето наследство — онлайн и през регулярни срещи.',
      en: 'To build an active community of people united by love for their heritage — online and through regular meetups.',
    },
    progress: 70,
    tag: { bg: 'В активен процес', en: 'In Progress' },
  },
  {
    num: '03',
    title: { bg: 'Дигитален Архив', en: 'Digital Archive' },
    desc: {
      bg: 'Да съхраним истории, занаяти и гласове, които иначе рискуват да изчезнат — в подкасти, видеа и писмени материали.',
      en: 'To preserve stories, crafts, and voices that otherwise risk disappearing — in podcasts, videos, and written materials.',
    },
    progress: 60,
    tag: { bg: 'Разрастващ се', en: 'Growing' },
  },
  {
    num: '04',
    title: { bg: 'Институционални Партньорства', en: 'Institutional Partnerships' },
    desc: {
      bg: 'Да работим с музеи, университети, местни общности и творци, за да умножим въздействието на нашата работа.',
      en: 'To collaborate with museums, universities, local communities, and creators to multiply the impact of our work.',
    },
    progress: 50,
    tag: { bg: 'Планирано 2026', en: 'Planned 2026' },
  },
];

export default function GoalsPage({ locale }: Props) {
  return (
    <motion.div
      className="page-detail-container"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.4 }}
    >
      <header className="page-header">
        <span className="page-badge">{locale === 'bg' ? 'Пътна Карта' : 'Roadmap'}</span>
        <h1>{locale === 'bg' ? 'ЦЕЛИТЕ НА У БАЛКАНЪ' : 'OUR GOALS'}</h1>
        <p className="page-subtitle">
          {locale === 'bg'
            ? 'Конкретни стъпки към културно пробуждане на новото поколение.'
            : 'Concrete steps toward cultural awakening for a new generation.'}
        </p>
      </header>

      <div className="goals-grid">
        {goalsList.map((g) => (
          <article key={g.num} className="goal-card">
            <div className="goal-header">
              <span className="goal-num">{g.num}</span>
              <span className="goal-tag">{g.tag[locale]}</span>
            </div>
            <h3>{g.title[locale]}</h3>
            <p>{g.desc[locale]}</p>
            <div className="goal-progress-wrap">
              <div className="goal-progress-bar" style={{ width: `${g.progress}%` }}></div>
            </div>
          </article>
        ))}
      </div>
    </motion.div>
  );
}
