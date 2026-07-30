import FeatureCard from './FeatureCard';
import { featureCards } from '../content';
import type { Locale } from '../content';

type Props = {
  locale: Locale;
};

export default function FeatureGrid({ locale }: Props) {
  return (
    <section className="feature-grid" id="podcast" aria-label="Sections">
      {featureCards.map((card, i) => (
        <FeatureCard key={card.id} card={card} locale={locale} index={i} />
      ))}
    </section>
  );
}
