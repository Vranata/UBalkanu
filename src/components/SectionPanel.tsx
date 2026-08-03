import { motion } from 'framer-motion';
import type { SectionDetail, Locale } from '../content';

type Props = {
  section: SectionDetail;
  locale: Locale;
};

export default function SectionPanel({ section, locale }: Props) {
  const copy = section.copy[locale];

  return (
    <motion.section
      className="section-panel"
      id={section.id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      aria-label={copy.heading}
    >
      <div className="section-panel-inner">
        <header className="section-panel-header">
          <h2 className="section-panel-heading">{copy.heading}</h2>
          <p className="section-panel-intro">{copy.intro}</p>
        </header>

        <div className="section-panel-grid">
          {copy.items.map((item, i) => (
            <motion.div
              key={i}
              className="section-panel-item"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' }}
            >
              <h3 className="section-item-label">{item.label}</h3>
              <p className="section-item-body">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
