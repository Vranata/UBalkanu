import { Link, NavLink } from 'react-router-dom';
import { navigation, type Locale } from '../content';

interface FooterProps {
  locale: Locale;
}

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ubalkanabg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@ubalkanabg',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8z" />
        <polygon points="9.7 15.5 15.8 12 9.7 8.5 9.7 15.5" fill="#140f0c" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@ubalkanabg',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.6 3h-3.2v11.4a3.2 3.2 0 1 1-3.2-3.2c.3 0 .6 0 .9.1V8c-.3 0-.6-.1-.9-.1a6.4 6.4 0 1 0 6.4 6.4V8.4A9.5 9.5 0 0 0 24 9.3V6.2A6.4 6.4 0 0 1 19.6 3z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61576619913603',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z" />
      </svg>
    ),
  },
];

export default function Footer({ locale }: FooterProps) {
  const year = new Date().getFullYear();

  const navItems = navigation.map((item) => ({
    ...item,
    path: item.id === 'home' ? '/' : `/${item.id}`,
    label: item.copy[locale],
  }));

  return (
    <footer className="site-footer">
      {/* Decorative top border */}
      <div className="footer-ornament-line" aria-hidden="true">
        <span className="footer-ornament-glyph">❖</span>
      </div>

      <div className="footer-inner">
        {/* Brand column */}
        <div className="footer-brand-col">
          <Link className="footer-brand" to="/" aria-label="У БАЛКАНЪ home">
            <img className="footer-brand-mark" src="/assets/balkana-logo.png" alt="У Балканъ logo" />
            <span className="footer-brand-name">У БАЛКАНЪ</span>
          </Link>
          <p className="footer-tagline">
            {locale === 'bg'
              ? 'Където корените говорят, а бъдещето слуша.'
              : 'Where the roots speak and the future listens.'}
          </p>
          <div className="footer-social" aria-label="Social media">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="footer-social-link">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation column */}
        <nav className="footer-nav" aria-label="Footer navigation">
          <span className="footer-nav-heading">
            {locale === 'bg' ? 'Навигация' : 'Navigation'}
          </span>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) => isActive ? 'footer-nav-link active' : 'footer-nav-link'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact column */}
        <div className="footer-contact-col">
          <span className="footer-nav-heading">
            {locale === 'bg' ? 'Свържи се' : 'Get in touch'}
          </span>
          <a href="mailto:ubalkanabg@gmail.com" className="footer-contact-link">
            ubalkanabg@gmail.com
          </a>
          <p className="footer-contact-note">
            {locale === 'bg'
              ? 'За партньорства, въпроси и сътрудничество.'
              : 'For partnerships, questions and collaboration.'}
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span className="footer-copy">
          © {year} У Балканъ.{' '}
          {locale === 'bg' ? 'Всички права запазени.' : 'All rights reserved.'}
        </span>
        <span className="footer-made-with">
          {locale === 'bg' ? 'Направено с любов към България.' : 'Made with love for Bulgaria.'}
        </span>
      </div>
    </footer>
  );
}
