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

          <div className="social-icons" aria-label="Social media">
            <a href="https://www.instagram.com/ubalkanapodcast.bg" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8z" />
                <polygon points="9.7 15.5 15.8 12 9.7 8.5 9.7 15.5" fill="#140f0c" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@ubalkanapodcastbg" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.6 3h-3.2v11.4a3.2 3.2 0 1 1-3.2-3.2c.3 0 .6 0 .9.1V8c-.3 0-.6-.1-.9-.1a6.4 6.4 0 1 0 6.4 6.4V8.4A9.5 9.5 0 0 0 24 9.3V6.2A6.4 6.4 0 0 1 19.6 3z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61576619913603" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z" />
              </svg>
            </a>
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
