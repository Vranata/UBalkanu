import { motion } from 'framer-motion';
import type { Feature, Locale } from '../content';

type Props = {
  card: Feature;
  locale: Locale;
  index?: number;
};

export default function FeatureCard({ card, locale, index = 0 }: Props) {
  return (
    <motion.article
      className="feature-card"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
    >
      <div className="feature-icon" aria-hidden="true">
        <img src={`/assets/icons/${card.icon}.svg`} alt="" width={44} height={44} />
      </div>
      <h3>{card.copy[locale].title}</h3>
      <p>{card.copy[locale].description}</p>
      <span className="card-link">{locale === 'bg' ? 'Отвори' : 'Open'}</span>
    </motion.article>
  );
}
