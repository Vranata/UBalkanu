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
      className="page-detail-container coming-soon-container"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.4 }}
    >
      {/* Animated compass */}
      <motion.div
        className="coming-soon-icon"
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      >
        <CompassSvg />
      </motion.div>

      {/* Badge */}
      <motion.span
        className="page-badge"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        {locale === 'bg' ? 'Късометражен филм' : 'Short Film'}
      </motion.span>

      {/* Main heading */}
      <motion.h1
        className="coming-soon-title"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.5 }}
      >
        {locale === 'bg' ? 'ОЧАКВАЙТЕ СКОРО' : 'COMING SOON'}
      </motion.h1>

      {/* Film name */}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        style={{
          fontFamily: 'var(--font-title)',
          fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
          color: 'var(--warm)',
          margin: 0,
          letterSpacing: '0.06em',
          fontWeight: 600,
          textShadow: '0 2px 10px rgba(0,0,0,0.5)'
        }}
      >
        {locale === 'bg' ? '„ПЪТЯ НА ЛИСТОТО“' : '"THE PATH OF THE LEAF"'}
      </motion.h2>

      {/* Ornament */}
      <motion.div
        className="coming-soon-ornament"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        ❖ ❖ ❖
      </motion.div>

      {/* Subtitle */}
      <motion.p
        className="coming-soon-subtitle"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.5 }}
      >
        {locale === 'bg' ? 'Премиера 2027' : 'Premiere 2027'}
      </motion.p>

      {/* Production Details */}
      <motion.div
        className="film-details-grid"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.5 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(17rem, 1fr))',
          gap: '1.5rem',
          width: '100%',
          marginTop: '2rem',
          textAlign: 'left'
        }}
      >
        <div className="film-info-card" style={{
          padding: '1.8rem',
          border: '1px solid rgba(214, 186, 141, 0.16)',
          borderRadius: '0.25rem',
          background: 'rgba(20, 15, 11, 0.7)'
        }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--warm)', margin: '0 0 1rem', fontFamily: 'var(--font-title)' }}>
            <ScrollSvg /> {locale === 'bg' ? 'Синопсис' : 'Synopsis'}
          </h3>
          <p style={{ color: 'var(--muted)', lineHeight: '1.7', margin: 0 }}>
            {locale === 'bg'
              ? 'Филмът показва как българската култура е орисана да оцелее чрез неизбежната среща на миналото и бъдещето.'
              : 'The film shows how Bulgarian culture is destined to survive through the inevitable encounter of past and future.'}
          </p>
        </div>

        <div className="film-info-card" style={{
          padding: '1.8rem',
          border: '1px solid rgba(214, 186, 141, 0.16)',
          borderRadius: '0.25rem',
          background: 'rgba(20, 15, 11, 0.7)'
        }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--warm)', margin: '0 0 1rem', fontFamily: 'var(--font-title)' }}>
            <FilmSvg /> {locale === 'bg' ? 'За продукцията' : 'About Production'}
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--muted)', display: 'flex', flexDirection: 'column', gap: '0.6rem', lineHeight: '1.5' }}>
            <li><strong style={{ color: 'var(--text)' }}>{locale === 'bg' ? 'Категория:' : 'Category:'}</strong> {locale === 'bg' ? 'Игрален' : 'Feature short'}</li>
            <li><strong style={{ color: 'var(--text)' }}>{locale === 'bg' ? 'Жанр:' : 'Genre:'}</strong> {locale === 'bg' ? 'Драма/Приключенски' : 'Drama/Adventure'}</li>
            <li><strong style={{ color: 'var(--text)' }}>{locale === 'bg' ? 'Заснето в:' : 'Filmed in:'}</strong> {locale === 'bg' ? 'България' : 'Bulgaria'}</li>
            <li><strong style={{ color: 'var(--text)' }}>{locale === 'bg' ? 'Език:' : 'Language:'}</strong> {locale === 'bg' ? 'Български' : 'Bulgarian'}</li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}
