import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { details, featureCards, heroCopy, navigation, quoteCopy, type Locale } from './content';

function App() {
  const [locale, setLocale] = useState<Locale>('bg');

  const copy = heroCopy[locale];
  const detail = details[locale];

  const activeNavigation = useMemo(
    () => navigation.map((item) => ({ ...item, label: item.copy[locale] })),
    [locale],
  );

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="У Балканъ home">
          <span className="brand-mark">У</span>
          <span className="brand-name">У Балканъ</span>
        </a>

        <nav className="nav" aria-label="Primary">
          {activeNavigation.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="locale-toggle" aria-label="Language switcher">
          <button type="button" className={locale === 'bg' ? 'active' : ''} onClick={() => setLocale('bg')}>
            BG
          </button>
          <button type="button" className={locale === 'en' ? 'active' : ''} onClick={() => setLocale('en')}>
            EN
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1>{copy.title}</h1>
            <h2>{copy.subtitle}</h2>
            <p className="hero-body">{copy.body}</p>
            <div className="hero-actions">
              <a className="primary-button" href="#podcast">
                {copy.cta}
              </a>
              <a className="secondary-link" href="#mission">
                {locale === 'bg' ? 'Разгледай мисията' : 'Explore the mission'}
              </a>
            </div>
          </div>

          <motion.aside
            className="hero-quote"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="quote-mark">“</p>
            <p>{quoteCopy[locale]}</p>
            <span>— У Балканъ</span>
          </motion.aside>
        </section>

        <section className="feature-grid" id="podcast" aria-label="Sections">
          {featureCards.map((card, index) => (
            <motion.article
              className="feature-card"
              key={card.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
            >
              <div className={`feature-icon icon-${card.icon}`} aria-hidden="true" />
              <h3>{card.copy[locale].title}</h3>
              <p>{card.copy[locale].description}</p>
              <span className="card-link">{locale === 'bg' ? 'Отвори' : 'Open'}</span>
            </motion.article>
          ))}
        </section>

        <section className="details-panel" id="mission">
          <div>
            <p className="eyebrow">{detail.title}</p>
            <p>{detail.body}</p>
          </div>
          <div className="details-note" id="goals">
            <strong>{locale === 'bg' ? 'Следваща стъпка' : 'Next step'}</strong>
            <span>
              {locale === 'bg'
                ? 'Преобразуваме тази основа в отделни страници, ако по-късно решиш да разшириш сайта.'
                : 'We can later split this foundation into separate pages when you decide to expand the site.'}
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
