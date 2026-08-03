import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Locale } from '../content';

type Props = {
  locale: Locale;
};

const facts = [
  {
    id: 1,
    category: { bg: 'Азбука', en: 'Alphabet' },
    title: { bg: 'Кирилицата е Българска', en: 'The Cyrillic Alphabet is Bulgarian' },
    text: {
      bg: 'Азбуката, използвана днес от над 250 милиона души по целия свят, е създадена в Преславската книжовна школа през IX век под покровителството на българските царе.',
      en: 'The alphabet used today by over 250 million people worldwide was created in the Preslav Literary School in 9th century Bulgaria.',
    },
  },
  {
    id: 2,
    category: { bg: 'Природа', en: 'Nature' },
    title: { bg: 'Златото на Розовата Долина', en: 'Gold of the Rose Valley' },
    desc: { bg: '70% от световното розово масло', en: '70% of world rose oil' },
    text: {
      bg: 'България произвежда около 70% от световното розово масло. За 1 грам розово масло са необходими над 1400 рози,брани ръчно при изгрев слънце.',
      en: 'Bulgaria produces ~70% of global rose oil. Producing 1 gram of rose oil requires over 1,400 hand-picked roses gathered at sunrise.',
    },
  },
  {
    id: 3,
    category: { bg: 'Изкуство', en: 'Art' },
    title: { bg: 'Ренесанс преди Ренесанса', en: 'Renaissance Before Giotto' },
    text: {
      bg: 'Стенописите на Боянската църква (1259 г.) съдържат реалистични портрети и живи човешки състояния, изпреварили италианския Ренесанс с десетилетия.',
      en: 'The Boyana Church frescoes (1259 AD) depict realistic facial expressions and human emotion, preceding the Italian Renaissance by decades.',
    },
  },
  {
    id: 4,
    category: { bg: 'Традиции', en: 'Tradition' },
    title: { bg: 'Нестинарството — Огненият Танц', en: 'Nestinarstvo — Fire Dance' },
    text: {
      bg: 'Древният ритуал на танц върху жива жарава без изгаряне е световно нематериално наследство на ЮНЕСКО, съхранено в странджанските села.',
      en: 'The ancient ritual of bare-foot fire walking without burning is a UNESCO world intangible heritage preserved in Strandzha villages.',
    },
  },
];

export default function FactsPage({ locale }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredFacts = activeCategory === 'all'
    ? facts
    : facts.filter((f) => f.category.en.toLowerCase() === activeCategory);

  return (
    <motion.div
      className="page-detail-container"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.4 }}
    >
      <header className="page-header">
        <span className="page-badge">{locale === 'bg' ? 'Любопитно' : 'Trivia'}</span>
        <h1>{locale === 'bg' ? 'ЗНАЕХТЕ ЛИ, ЧЕ...' : 'DID YOU KNOW THAT...'}</h1>
        <p className="page-subtitle">
          {locale === 'bg'
            ? 'Любопитни факти за нашата история, традиции, природни чудеса и културно наследство.'
            : 'Curious facts about our history, traditions, natural wonders and cultural heritage.'}
        </p>
      </header>

      <div className="category-filter">
        <button
          className={activeCategory === 'all' ? 'active' : ''}
          onClick={() => setActiveCategory('all')}
        >
          {locale === 'bg' ? 'Всички' : 'All'}
        </button>
        <button
          className={activeCategory === 'alphabet' ? 'active' : ''}
          onClick={() => setActiveCategory('alphabet')}
        >
          {locale === 'bg' ? 'Азбука' : 'Alphabet'}
        </button>
        <button
          className={activeCategory === 'nature' ? 'active' : ''}
          onClick={() => setActiveCategory('nature')}
        >
          {locale === 'bg' ? 'Природа' : 'Nature'}
        </button>
        <button
          className={activeCategory === 'art' ? 'active' : ''}
          onClick={() => setActiveCategory('art')}
        >
          {locale === 'bg' ? 'Изкуство' : 'Art'}
        </button>
        <button
          className={activeCategory === 'tradition' ? 'active' : ''}
          onClick={() => setActiveCategory('tradition')}
        >
          {locale === 'bg' ? 'Традиции' : 'Tradition'}
        </button>
      </div>

      <div className="facts-grid">
        {filteredFacts.map((fact) => (
          <article key={fact.id} className="fact-card">
            <span className="fact-cat">{fact.category[locale]}</span>
            <h3>{fact.title[locale]}</h3>
            <p>{fact.text[locale]}</p>
          </article>
        ))}
      </div>
    </motion.div>
  );
}
