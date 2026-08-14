import { motion } from 'framer-motion';
import type { Locale } from '../content';

// Inline SVG icons matching hero card style
const CompassSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" width="72" height="72">
    <circle cx="32" cy="32" r="28" stroke="#bfa15f" strokeWidth="1.5" opacity="0.4" />
    <circle cx="32" cy="32" r="22" stroke="#bfa15f" strokeWidth="1.5" />
    <path d="M32 10v6M32 48v6M10 32h6M48 32h6" stroke="#bfa15f" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <path d="M24 24l6 12 12-6-6-12-12 6z" stroke="#bfa15f" strokeWidth="1.5" strokeLinejoin="round" fill="#bfa15f" fillOpacity="0.18" />
    <circle cx="32" cy="32" r="2.5" fill="#bfa15f" />
  </svg>
);

const ClapperSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" width="56" height="56">
    <rect x="8" y="20" width="48" height="36" rx="2" stroke="#bfa15f" strokeWidth="2" />
    <path d="M8 28h48" stroke="#bfa15f" strokeWidth="2" />
    <path d="M8 20L20 8M24 20L36 8M40 20L52 8" stroke="#bfa15f" strokeWidth="2" strokeLinecap="round" />
    <path d="M26 38l12 6-12 6V38z" fill="#bfa15f" fillOpacity="0.25" stroke="#bfa15f" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

const ScrollSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" width="24" height="24">
    <path d="M14 10h36a4 4 0 0 1 0 8H14a4 4 0 0 0 0 8h36a4 4 0 0 1 0 8H14a4 4 0 0 0 0 8h36" stroke="#bfa15f" strokeWidth="2" strokeLinecap="round" />
    <path d="M20 26h24M20 34h18" stroke="#bfa15f" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
  </svg>
);

const FilmSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" width="24" height="24">
    <rect x="6" y="12" width="52" height="40" rx="2" stroke="#bfa15f" strokeWidth="2" />
    <path d="M6 20h8M6 32h8M6 44h8M50 20h8M50 32h8M50 44h8" stroke="#bfa15f" strokeWidth="2" strokeLinecap="round" />
    <path d="M24 24l16 8-16 8V24z" fill="#bfa15f" fillOpacity="0.2" stroke="#bfa15f" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

type Props = {
  locale: Locale;
};

export default function FilmPage({ locale }: Props) {
  return (
    <motion.div
      className="page-detail-container"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.4 }}
    >
      <header className="page-header">
        <span className="page-badge">{locale === 'bg' ? 'Документален Проект' : 'Documentary Short'}</span>
        <h1>{locale === 'bg' ? 'КЪСОМЕТРАЖЕН ФИЛМ „У БАЛКАНЪ“' : 'U BALKANA SHORT FILM'}</h1>
        <p className="page-subtitle">
          {locale === 'bg'
            ? 'Отвъд думите — история за корените, разказана с образ, кинематографична музика и тишина.'
            : 'Beyond words — a story of roots told through imagery, cinematic music, and silence.'}
        </p>
      </header>

      <div className="film-video-stage">
        <div className="video-placeholder">
          <motion.div
            className="coming-soon-icon"
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
            style={{ marginBottom: '12px' }}
          >
            <CompassSvg />
          </motion.div>
          <span className="video-label">
            {locale === 'bg' ? 'Очаквайте Скоро' : 'Coming Soon'}
          </span>
          <p className="video-status">
            {locale === 'bg' ? 'В процес на постпродукция • Премиера 2027' : 'In Post-Production • Premiere 2027'}
          </p>
        </div>
      </div>

      <div className="film-details-grid">
        <div className="film-info-card">
          <h3><ScrollSvg /> {locale === 'bg' ? 'Синопсис' : 'Synopsis'}</h3>
          <p>
            {locale === 'bg'
              ? 'Филмът показва как българската кутлтура е орисана да оцелее чрез неизбежната среща на миналото и бъдещето.'
              : 'The film shows how Bulgarian culture is destined to survive through the inevitable encounter of past and future.'}
          </p>
        </div>

        <div className="film-info-card">
          <h3><FilmSvg /> {locale === 'bg' ? 'За продукцията' : 'About Production'}</h3>
          <ul>
            <li><strong>{locale === 'bg' ? 'Жанр:' : 'Genre:'}</strong> {locale === 'bg' ? 'Игрален' : 'Feature film'}</li>
            <li><strong>{locale === 'bg' ? 'Локации:' : 'Locations:'}</strong>Стара планина</li>
            <li><strong>{locale === 'bg' ? 'Музика:' : 'Soundtrack:'}</strong> {locale === 'bg' ? 'Класическа и българска народна музика' : 'Classical and Bulgarian folk music'}</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
