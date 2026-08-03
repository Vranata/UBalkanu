import { useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link, Navigate } from 'react-router-dom';
import { navigation, quoteCopy, type Locale } from './content';
import SidePatterns from './components/SidePatterns';

import HomePage from './pages/HomePage';
import PodcastPage from './pages/PodcastPage';
import MissionPage from './pages/MissionPage';
import GoalsPage from './pages/GoalsPage';
import GuidePage from './pages/GuidePage';
import FactsPage from './pages/FactsPage';
import FilmPage from './pages/FilmPage';

function AppContent() {
  const [locale, setLocale] = useState<Locale>('bg');

  const activeNavigation = useMemo(
    () =>
      navigation.map((item) => ({
        ...item,
        path: item.id === 'home' ? '/' : `/${item.id}`,
        label: item.copy[locale],
      })),
    [locale],
  );

  return (
    <div className="app-shell">
      <SidePatterns />
      <div className="page-shell">
        <header className="topbar">
          <Link className="brand" to="/" aria-label="У БАЛКАНЪ home">
            <img className="brand-mark" src="/assets/logo.svg" alt="У Балканъ logo" />
            <span className="brand-name">У БАЛКАНЪ</span>
          </Link>

          <nav className="nav" aria-label="Primary">
            {activeNavigation.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) => (isActive ? 'active-nav-item' : '')}
                end={item.path === '/'}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="locale-toggle" aria-label="Language switcher">
            <button
              type="button"
              className={locale === 'bg' ? 'active' : ''}
              onClick={() => setLocale('bg')}
            >
              BG
            </button>
            <button
              type="button"
              className={locale === 'en' ? 'active' : ''}
              onClick={() => setLocale('en')}
            >
              EN
            </button>
          </div>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage locale={locale} />} />
            <Route path="/podcast" element={<PodcastPage locale={locale} />} />
            <Route path="/mission" element={<MissionPage locale={locale} />} />
            <Route path="/goals" element={<GoalsPage locale={locale} />} />
            <Route path="/guide" element={<GuidePage locale={locale} />} />
            <Route path="/facts" element={<FactsPage locale={locale} />} />
            <Route path="/film" element={<FilmPage locale={locale} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <section className="bottom-quote" aria-label="Featured quote">
          <span className="bottom-quote-mark">“</span>
          <p>{quoteCopy[locale]}</p>
          <span className="bottom-quote-mark">”</span>
        </section>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
