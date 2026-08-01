import { motion } from 'framer-motion';
import type { Feature, Locale } from '../content';
import micIcon from '../assets/icons/mic.svg';
import flagIcon from '../assets/icons/flag.svg';
import targetIcon from '../assets/icons/target.svg';
import compassIcon from '../assets/icons/compass.svg';
import sparkIcon from '../assets/icons/spark.svg';
import clapperIcon from '../assets/icons/clapper.svg';

type Props = {
  card: Feature;
  locale: Locale;
  index?: number;
};

const iconMap: Record<string, string> = {
  mic: micIcon,
  flag: flagIcon,
  target: targetIcon,
  compass: compassIcon,
  spark: sparkIcon,
  clapper: clapperIcon,
};

export default function FeatureCard({ card, locale, index = 0 }: Props) {
  const iconSrc = iconMap[card.icon] ?? micIcon;

  return (
    <motion.article
      className="feature-card"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
    >
      <div className="feature-icon" aria-hidden="true">
        <img src={iconSrc} alt="" width={54} height={54} />
      </div>
      <h3>{card.copy[locale].title}</h3>
      <p>{card.copy[locale].description}</p>
      <span className="card-link" aria-hidden="true">→</span>
    </motion.article>
  );
}
