import { motion } from 'framer-motion';
import type { Locale } from '../content';

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
          <div className="play-icon-large">🎬</div>
          <span className="video-label">
            {locale === 'bg' ? 'Официален Трейлър — Очаквайте Скоро' : 'Official Trailer — Coming Soon'}
          </span>
          <p className="video-status">
            {locale === 'bg' ? 'В процес на постпродукция • Премиера 2026' : 'In Post-Production • Premiere 2026'}
          </p>
        </div>
      </div>

      <div className="film-details-grid">
        <div className="film-info-card">
          <h3>📜 {locale === 'bg' ? 'Синопсис' : 'Synopsis'}</h3>
          <p>
            {locale === 'bg'
              ? 'Филмът проследява пътуването на млад човек из тайнствените кътчета на Балканите в търсене на истинския си произход. През срещи със стари занаятчии, овчари и пазители на обреди, той открива, че корените не са просто минало, а живо вдъхновение.'
              : 'The film follows a young person’s journey through mysterious corners of the Balkans in search of their true origin. Through encounters with master artisans, shepherds, and keepers of sacred rituals, they discover that roots are not just history, but a living inspiration.'}
          </p>
        </div>

        <div className="film-info-card">
          <h3>🎥 {locale === 'bg' ? 'За продукцията' : 'About Production'}</h3>
          <ul>
            <li><strong>{locale === 'bg' ? 'Жанр:' : 'Genre:'}</strong> {locale === 'bg' ? 'Документален / Поетичен' : 'Documentary / Poetic'}</li>
            <li><strong>{locale === 'bg' ? 'Локации:' : 'Locations:'}</strong> Родопи, Стара планина, Пирин</li>
            <li><strong>{locale === 'bg' ? 'Музика:' : 'Soundtrack:'}</strong> {locale === 'bg' ? 'Записана на живо с фолклорни инструменти' : 'Live acoustic folk instruments'}</li>
            <li><strong>{locale === 'bg' ? 'Статус:' : 'Status:'}</strong> {locale === 'bg' ? 'Монтаж & Цветови корекции' : 'Editing & Color Grading'}</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
