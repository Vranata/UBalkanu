import { useMemo, useState } from 'react';
import { navigation, type Locale } from './content';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';

function App() {
  const [locale, setLocale] = useState<Locale>('bg');

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
        <Hero locale={locale} />
        <FeatureGrid locale={locale} />
      </main>
    </div>
  );
}

export default App;
