import { useMemo, useState } from 'react';
import { navigation, quoteCopy, type Locale } from './content';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import SidePatterns from './components/SidePatterns';

function App() {
  const [locale, setLocale] = useState<Locale>('bg');

  const activeNavigation = useMemo(
    () => navigation.map((item) => ({ ...item, label: item.copy[locale] })),
    [locale],
  );

  return (
    <div className="app-shell">
      <SidePatterns />
      <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="У БАЛКАНЪ home">
          <img className="brand-mark" src="/assets/logo.svg" alt="У Балканъ logo" />
          <span className="brand-name">У БАЛКАНЪ</span>
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
        <section className="home-stage" aria-label="Hero and sections">
          <Hero locale={locale} />
          <FeatureGrid locale={locale} />
        </section>

        <section className="bottom-quote" aria-label="Featured quote">
          <span className="bottom-quote-mark">“</span>
          <p>{quoteCopy[locale]}</p>
          <span className="bottom-quote-mark">”</span>
        </section>
      </main>
      </div>
    </div>
  );
}

export default App;
