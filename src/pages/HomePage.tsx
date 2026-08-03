import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import type { Locale } from '../content';

type Props = {
  locale: Locale;
};

export default function HomePage({ locale }: Props) {
  return (
    <div className="page-fade-in">
      <section className="home-stage" aria-label="Hero and sections">
        <Hero locale={locale} />
        <FeatureGrid locale={locale} />
      </section>
    </div>
  );
}
