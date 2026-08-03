import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Locale } from '../content';

type Props = {
  locale: Locale;
};

const episodes = [
  {
    id: 1,
    number: 'EP. 01',
    title: { bg: 'Корените на Балкана: Забравените песни', en: 'Roots of the Balkans: Forgotten Songs' },
    guest: { bg: 'Мария Стоянова — етномузиколог', en: 'Maria Stoyanova — Ethnomusicologist' },
    duration: '52 мин.',
    date: '15 Окт 2025',
    description: {
      bg: 'Дълбок разговор за автентичния български фолклор, магията на многогласието и как песните са съхранили духа ни през вековете.',
      en: 'An in-depth conversation about authentic Bulgarian folklore, polyphonic singing, and how songs preserved our spirit across centuries.',
    },
  },
  {
    id: 2,
    number: 'EP. 02',
    title: { bg: 'Занаятите, които изчезват', en: 'The Crafts That Are Disappearing' },
    guest: { bg: 'Майстор Иван Петров — медникар', en: 'Master Ivan Petrov — Coppersmith' },
    duration: '48 мин.',
    date: '01 Ноем 2025',
    description: {
      bg: 'История за огъня, медта и изкуството да създаваш с ръцете си предметите, които носят душата на стария български дом.',
      en: 'A story of fire, copper, and the art of crafting objects with your own hands that carry the soul of the traditional Bulgarian home.',
    },
  },
  {
    id: 3,
    number: 'EP. 03',
    title: { bg: 'Пътищата на културния стопаджия', en: 'Paths of the Cultural Hitchhiker' },
    guest: { bg: 'Георги & Елена — пътешественици', en: 'Georgi & Elena — Travellers' },
    duration: '61 мин.',
    date: '18 Ноем 2025',
    description: {
      bg: 'Вълнуващи преживявания от тайнствени села из Родопите и Стара планина, неподправено гостоприемство и неочаквани срещи.',
      en: 'Exciting experiences from hidden villages across the Rhodopes and Stara Planina, genuine hospitality, and unexpected encounters.',
    },
  },
];

export default function PodcastPage({ locale }: Props) {
  const [activeEpisode, setActiveEpisode] = useState<number | null>(1);

  return (
    <motion.div
      className="page-detail-container"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.4 }}
    >
      <header className="page-header">
        <span className="page-badge">{locale === 'bg' ? 'Аудио и Разговори' : 'Audio & Conversations'}</span>
        <h1>{locale === 'bg' ? 'ПОДКАСТ У БАЛКАНЪ' : 'U BALKANA PODCAST'}</h1>
        <p className="page-subtitle">
          {locale === 'bg'
            ? 'Истории, личности и теми, които свързват миналото, настоящето и бъдещето.'
            : 'Stories, personalities and topics connecting past, present and future.'}
        </p>
      </header>

      <div className="podcast-player-hero">
        <div className="player-badge">🎙 {locale === 'bg' ? 'Последен епизод' : 'Latest Episode'}</div>
        <h3>{episodes[0].title[locale]}</h3>
        <p className="player-guest">{episodes[0].guest[locale]}</p>
        <p className="player-desc">{episodes[0].description[locale]}</p>

        <div className="player-controls-bar">
          <button className="play-button" onClick={() => setActiveEpisode(1)}>
            ▶ {locale === 'bg' ? 'Слушай епизода' : 'Play Episode'} ({episodes[0].duration})
          </button>
          <div className="platform-links">
            <span className="platform-tag">Spotify</span>
            <span className="platform-tag">Apple Podcasts</span>
            <span className="platform-tag">YouTube</span>
          </div>
        </div>
      </div>

      <section className="episodes-section">
        <h2>{locale === 'bg' ? 'Всички епизоди' : 'All Episodes'}</h2>
        <div className="episodes-grid">
          {episodes.map((ep) => (
            <article
              key={ep.id}
              className={`episode-card ${activeEpisode === ep.id ? 'active' : ''}`}
              onClick={() => setActiveEpisode(ep.id)}
            >
              <div className="ep-meta">
                <span className="ep-num">{ep.number}</span>
                <span className="ep-date">{ep.date}</span>
                <span className="ep-duration">⏱ {ep.duration}</span>
              </div>
              <h4>{ep.title[locale]}</h4>
              <p className="ep-guest">👤 {ep.guest[locale]}</p>
              <p className="ep-text">{ep.description[locale]}</p>
              <button className="ep-play-btn">
                {activeEpisode === ep.id ? (locale === 'bg' ? ' Playing' : ' Playing') : (locale === 'bg' ? '▶ Слушай' : '▶ Listen')}
              </button>
            </article>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
