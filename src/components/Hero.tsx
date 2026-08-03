import { motion } from 'framer-motion';
import type { Locale } from '../content';
import { heroCopy, heroQuoteCopy } from '../content';

type Props = {
  locale: Locale;
};

export default function Hero({ locale }: Props) {
  const copy = heroCopy[locale];
  const heroQuote = heroQuoteCopy[locale];

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <img className="hero-logo" src="/assets/logo.svg" alt="У Балканъ logo" />
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <h2>{copy.subtitle}</h2>
        <p className="hero-body">{copy.body}</p>
        <div className="hero-actions">
          <a className="primary-button" href="#podcast">
            {copy.cta}
          </a>
          <a className="secondary-link" href="#podcast">
            {locale === 'bg' ? 'Разгледай' : 'Explore'}
          </a>
        </div>
      </div>

      <motion.aside
        className="hero-quote"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
      >
        <span className="hero-quote-symbol">”</span>
        <p className="hero-quote-text">{heroQuote.quote}</p>
        <span className="hero-quote-author">{heroQuote.author}</span>
      </motion.aside>
    </section>
  );
}
