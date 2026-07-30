import { motion } from 'framer-motion';
import type { Locale } from '../content';
import { heroCopy, quoteCopy } from '../content';

type Props = {
  locale: Locale;
};

export default function Hero({ locale }: Props) {
  const copy = heroCopy[locale];

  return (
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
          <a className="secondary-link" href="#podcast">
            {locale === 'bg' ? 'Разгледай' : 'Explore'}
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
  );
}
