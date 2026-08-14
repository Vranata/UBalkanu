import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Locale } from '../content';

// SVG Icons
const MicSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" width="24" height="24">
    <rect x="24" y="8" width="16" height="24" rx="8" stroke="#bfa15f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 22a16 16 0 0 0 32 0" stroke="#bfa15f" strokeWidth="2" strokeLinecap="round" />
    <path d="M32 38v10M24 48h16" stroke="#bfa15f" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const TimerSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" width="14" height="14">
    <circle cx="32" cy="36" r="20" stroke="#bfa15f" strokeWidth="2" />
    <path d="M32 24v14l8 5" stroke="#bfa15f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M26 8h12M32 8v8" stroke="#bfa15f" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const PersonSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" width="14" height="14">
    <circle cx="32" cy="20" r="10" stroke="#bfa15f" strokeWidth="2" />
    <path d="M10 56c0-12 9-20 22-20s22 8 22 20" stroke="#bfa15f" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const PlaySvg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const SearchSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ShareSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

const CheckSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

type Props = {
  locale: Locale;
};

type Episode = {
  id: number;
  number: string;
  category: 'music' | 'crafts' | 'travel';
  categoryName: Record<Locale, string>;
  title: Record<Locale, string>;
  guest: Record<Locale, string>;
  duration: string;
  date: string;
  thumbnail: string;
  youtubeId?: string;
  youtubeUrl: string;
  description: Record<Locale, string>;
};

// Helper function to resolve thumbnail URL
const getThumbnailUrl = (ep: Episode) => {
  if (ep.youtubeId) {
    return `https://img.youtube.com/vi/${ep.youtubeId}/hqdefault.jpg`;
  }
  return ep.thumbnail;
};

/* Archived placeholder episodes - will be un-commented or populated when official episodes are uploaded
const archivedEpisodes: Episode[] = [
  {
    id: 1,
    number: 'EP. 01',
    category: 'music',
    categoryName: { bg: 'Музика и Фолклор', en: 'Music & Folklore' },
    title: { bg: 'Корените на Балкана: Забравените песни', en: 'Roots of the Balkans: Forgotten Songs' },
    guest: { bg: 'Мария Стоянова — етномузиколог', en: 'Maria Stoyanova — Ethnomusicologist' },
    duration: '52 мин.',
    date: '15 Окт 2025',
    thumbnail: '/assets/hero.jpg',
    youtubeUrl: 'https://youtube.com',
    description: {
      bg: 'Дълбок разговор за автентичния български фолклор, магията на многогласието и как песните са съхранили духа ни през вековете.',
      en: 'An in-depth conversation about authentic Bulgarian folklore, polyphonic singing, and how songs preserved our spirit across centuries.',
    },
  },
  {
    id: 2,
    number: 'EP. 02',
    category: 'crafts',
    categoryName: { bg: 'Занаяти', en: 'Traditional Crafts' },
    title: { bg: 'Занаятите, които изчезват', en: 'The Crafts That Are Disappearing' },
    guest: { bg: 'Майстор Иван Петров — медникар', en: 'Master Ivan Petrov — Coppersmith' },
    duration: '48 мин.',
    date: '01 Ноем 2025',
    thumbnail: '/assets/hero-full.jpg',
    youtubeUrl: 'https://youtube.com',
    description: {
      bg: 'История за огъня, медта и изкуството да създаваш с ръцете си предметите, които носят душата на стария български дом.',
      en: 'A story of fire, copper, and the art of crafting objects with your own hands that carry the soul of the traditional Bulgarian home.',
    },
  },
  {
    id: 3,
    number: 'EP. 03',
    category: 'travel',
    categoryName: { bg: 'Пътешествия', en: 'Travel & Expeditions' },
    title: { bg: 'Пътищата на културния стопаджия', en: 'Paths of the Cultural Hitchhiker' },
    guest: { bg: 'Георги & Елена — пътешественици', en: 'Georgi & Elena — Travellers' },
    duration: '61 мин.',
    date: '18 Ноем 2025',
    thumbnail: '/assets/hero.jpg',
    youtubeUrl: 'https://youtube.com',
    description: {
      bg: 'Вълнуващи преживявания от тайнствени села из Родопите и Стара планина, неподправено гостоприемство и неочаквани срещи.',
      en: 'Exciting experiences from hidden villages across the Rhodopes and Stara Planina, genuine hospitality, and unexpected encounters.',
    },
  },
];
*/

const episodes: Episode[] = [];

export default function PodcastPage({ locale }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSeason, setSelectedSeason] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  // The most recent episode is the last one in the list (or highest ID)
  const featuredEp = useMemo(() => {
    return episodes[episodes.length - 1] || episodes[0];
  }, []);

  // Filtering logic
  const filteredEpisodes = useMemo(() => {
    return episodes.filter((ep) => {
      // All current episodes belong to Season 1 ('season1')
      const matchesSeason = selectedSeason === 'all' || selectedSeason === 'season1';
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        ep.title[locale].toLowerCase().includes(q) ||
        ep.guest[locale].toLowerCase().includes(q) ||
        ep.description[locale].toLowerCase().includes(q);
      return matchesSeason && matchesSearch;
    });
  }, [searchQuery, selectedSeason, locale]);

  const handleShare = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(window.location.href);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

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
            ? 'Истории на хората които останаха, съхраниха и свързаха българското миналто, настоящето и бъдещето.'
            : 'Stories of the people who stayed, preserved and connected the Bulgarian past, present and future.'}
        </p>
      </header>

      {/* Hero featured player */}
      {featuredEp ? (
        <div className="podcast-player-hero">
          <div className="player-badge">
            <MicSvg /> {locale === 'bg' ? 'Последен епизод' : 'Latest Episode'}
          </div>
          <div className="player-hero-content">
            <a
              href={featuredEp.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="player-hero-thumb"
              title={locale === 'bg' ? 'Гледай в YouTube' : 'Watch on YouTube'}
            >
              <img src={getThumbnailUrl(featuredEp)} alt={featuredEp.title[locale]} />
              <div className="player-thumb-overlay">
                <div className="play-icon-circle">
                  <PlaySvg />
                </div>
              </div>
            </a>
            <div className="player-hero-info">
              <div className="ep-hero-tags">
                <span className="ep-num">{featuredEp.number}</span>
                <span className="ep-cat-pill">{featuredEp.categoryName[locale]}</span>
              </div>
              <h3>{featuredEp.title[locale]}</h3>
              <p className="player-guest"><PersonSvg /> {featuredEp.guest[locale]}</p>
              <p className="player-desc">{featuredEp.description[locale]}</p>

              <div className="player-controls-bar">
                <a
                  href={featuredEp.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="play-button"
                >
                  ▶ {locale === 'bg' ? 'Гледай в YouTube' : 'Watch on YouTube'} ({featuredEp.duration})
                </a>
                <button
                  className={`ep-share-btn ${copiedId === featuredEp.id ? 'copied' : ''}`}
                  onClick={(e) => handleShare(featuredEp.id, e)}
                  title={locale === 'bg' ? 'Сподели епизода' : 'Share episode'}
                >
                  {copiedId === featuredEp.id ? <CheckSvg /> : <ShareSvg />}
                  <span>{copiedId === featuredEp.id ? (locale === 'bg' ? 'Копирано!' : 'Copied!') : (locale === 'bg' ? 'Сподели' : 'Share')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="podcast-player-hero coming-soon-hero" style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
          <div className="player-badge" style={{ margin: '0 auto 1.5rem' }}>
            <MicSvg /> {locale === 'bg' ? 'Очаквайте Скоро' : 'Coming Soon'}
          </div>
          <h2 style={{ fontFamily: 'var(--font-title)', color: '#f3eadf', margin: '0 0 1rem' }}>
            {locale === 'bg' ? 'Първият епизод предстои да бъде качен!' : 'The first episode will be uploaded soon!'}
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            {locale === 'bg'
              ? 'Подготвяме първите вдъхновяващи разговори. Всеки нов епизод ще бъде качван тук веднага след неговата премиера.'
              : 'We are preparing the first inspiring conversations. Every new episode will be listed here right after its release.'}
          </p>
        </div>
      )}
      <section className="episodes-section">
        <div className="episodes-section-header">
          <h2>{locale === 'bg' ? 'Всички епизоди' : 'All Episodes'}</h2>
        </div>

        {/* Filter and Search Bar */}
        <div className="podcast-filter-bar">
          <div className="search-input-wrapper">
            <SearchSvg />
            <input
              type="text"
              className="podcast-search-input"
              placeholder={locale === 'bg' ? 'Търси по заглавие или гост...' : 'Search by title or guest...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="clear-search-btn" onClick={() => setSearchQuery('')}>✕</button>
            )}
          </div>

          <div className="category-chips">
            <button
              className={`chip ${selectedSeason === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedSeason('all')}
            >
              {locale === 'bg' ? 'Всички' : 'All'}
            </button>
            <button
              className={`chip ${selectedSeason === 'season1' ? 'active' : ''}`}
              onClick={() => setSelectedSeason('season1')}
            >
              {locale === 'bg' ? 'Сезон 1' : 'Season 1'}
            </button>
          </div>
        </div>

        {/* Grid of Episode Cards */}
        {filteredEpisodes.length === 0 ? (
          <div className="no-episodes-found">
            <p>{locale === 'bg' ? 'Няма намерени епизоди.' : 'No episodes found.'}</p>
          </div>
        ) : (
          <div className="episodes-grid">
            <AnimatePresence mode="popLayout">
              {filteredEpisodes.map((ep) => (
                <motion.article
                  key={ep.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="episode-card"
                >
                  {/* Thumbnail in the top center - clicks directly to YouTube */}
                  <a
                    href={ep.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ep-thumb-container"
                    title={locale === 'bg' ? 'Гледай в YouTube' : 'Watch on YouTube'}
                  >
                    <img src={getThumbnailUrl(ep)} alt={ep.title[locale]} className="ep-thumb" />
                    <div className="ep-thumb-overlay">
                      <span className="ep-cat-pill-overlay">{ep.categoryName[locale]}</span>
                      <div className="ep-play-icon">
                        <PlaySvg />
                      </div>
                      <span className="ep-duration-badge">
                        <TimerSvg /> {ep.duration}
                      </span>
                    </div>
                  </a>

                  {/* Card Content */}
                  <div className="ep-card-body">
                    <div className="ep-meta">
                      <span className="ep-num">{ep.number}</span>
                      <span className="ep-date">{ep.date}</span>
                    </div>
                    <h4>{ep.title[locale]}</h4>
                    <p className="ep-guest"><PersonSvg /> {ep.guest[locale]}</p>
                    <p className="ep-text">{ep.description[locale]}</p>

                    <div className="ep-card-footer">
                      <a
                        href={ep.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ep-play-btn"
                      >
                        ▶ {locale === 'bg' ? 'Гледай' : 'Watch'}
                      </a>
                      <button
                        className={`ep-share-btn ${copiedId === ep.id ? 'copied' : ''}`}
                        onClick={(e) => handleShare(ep.id, e)}
                        title={locale === 'bg' ? 'Сподели епизода' : 'Share episode'}
                      >
                        {copiedId === ep.id ? <CheckSvg /> : <ShareSvg />}
                        <span>{copiedId === ep.id ? (locale === 'bg' ? 'Копирано!' : 'Copied!') : (locale === 'bg' ? 'Сподели' : 'Share')}</span>
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>
    </motion.div>
  );
}
