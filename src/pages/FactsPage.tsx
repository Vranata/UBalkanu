import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Locale } from '../content';

type Props = {
  locale: Locale;
};

type FactCategory = {
  id: string;
  name: { bg: string; en: string };
};

const categories: FactCategory[] = [
  { id: 'all', name: { bg: 'Всички', en: 'All' } },
  { id: 'nature', name: { bg: 'Природа и малко известни места', en: 'Nature & Hidden Places' } },
  { id: 'history', name: { bg: 'История', en: 'History' } },
  { id: 'architecture', name: { bg: 'Архитектура и забележителности', en: 'Architecture & Landmarks' } },
  { id: 'cuisine', name: { bg: 'Българска кухня', en: 'Bulgarian Cuisine' } },
  { id: 'folklore', name: { bg: 'Фолклор', en: 'Folklore' } },
  { id: 'crafts', name: { bg: 'Занаяти и индустрия', en: 'Crafts & Industry' } },
  { id: 'faith', name: { bg: 'Вяра и духовност', en: 'Faith & Spirituality' } },
  { id: 'art', name: { bg: 'Изкуство', en: 'Art' } },
  { id: 'sports', name: { bg: 'Спорт', en: 'Sports' } },
  { id: 'language', name: { bg: 'Български език', en: 'Bulgarian Language' } },
  { id: 'personalities', name: { bg: 'Знаменити личности', en: 'Famous Personalities' } },
];

const facts = [
  {
    id: 1,
    catId: 'language',
    category: { bg: 'Български език', en: 'Bulgarian Language' },
    title: { bg: 'Кирилицата е Българска', en: 'The Cyrillic Alphabet is Bulgarian' },
    text: {
      bg: 'Азбуката, използвана днес от над 250 милиона души по целия свят, е създадена в Преславската книжовна школа през IX век под покровителството на българските царе.',
      en: 'The alphabet used today by over 250 million people worldwide was created in the Preslav Literary School in 9th century Bulgaria.',
    },
  },
  {
    id: 2,
    catId: 'nature',
    category: { bg: 'Природа и малко известни места', en: 'Nature & Hidden Places' },
    title: { bg: 'Златото на Розовата Долина', en: 'Gold of the Rose Valley' },
    text: {
      bg: 'България произвежда около 70% от световното розово масло. За 1 грам розово масло са необходими над 1400 рози, брани ръчно при изгрев слънце.',
      en: 'Bulgaria produces ~70% of global rose oil. Producing 1 gram of rose oil requires over 1,400 hand-picked roses gathered at sunrise.',
    },
  },
  {
    id: 3,
    catId: 'art',
    category: { bg: 'Изкуство', en: 'Art' },
    title: { bg: 'Ренесанс преди Ренесанса', en: 'Renaissance Before Giotto' },
    text: {
      bg: 'Стенописите на Боянската църква (1259 г.) съдържат реалистични портрети и живи човешки състояния, изпреварили италианския Ренесанс с десетилетия.',
      en: 'The Boyana Church frescoes (1259 AD) depict realistic facial expressions and human emotion, preceding the Italian Renaissance by decades.',
    },
  },
  {
    id: 4,
    catId: 'folklore',
    category: { bg: 'Фолклор', en: 'Folklore' },
    title: { bg: 'Нестинарството — Огненият Танц', en: 'Nestinarstvo — Fire Dance' },
    text: {
      bg: 'Древният ритуал на танц върху жива жарава без изгаряне е световно нематериално наследство на ЮНЕСКО, съхранено в странджанските села.',
      en: 'The ancient ritual of bare-foot fire walking without burning is a UNESCO world intangible heritage preserved in Strandzha villages.',
    },
  },
  {
    id: 5,
    catId: 'history',
    category: { bg: 'История', en: 'History' },
    title: { bg: 'Най-старото обработено злато в света', en: 'Oldest Processed Gold in the World' },
    text: {
      bg: 'Варненският некропол пази златно съкровище на над 6500 години — най-старото технологично обработено злато в човешката история.',
      en: 'The Varna Necropolis preserves gold treasure over 6,500 years old — the oldest technologically processed gold in human history.',
    },
  },
  {
    id: 6,
    catId: 'architecture',
    category: { bg: 'Архитектура и забележителности', en: 'Architecture & Landmarks' },
    title: { bg: 'Белоградчишките скали', en: 'Belogradchik Rocks' },
    text: {
      bg: 'Природният феномен от червени скални фигури е бил естествена крепост през римско време и средновековието.',
      en: 'The natural phenomenon of red rock formations served as a natural fortress during Roman times and the Middle Ages.',
    },
  },
  {
    id: 7,
    catId: 'cuisine',
    category: { bg: 'Българска кухня', en: 'Bulgarian Cuisine' },
    title: { bg: 'Lactobacillus Bulgaricus', en: 'Lactobacillus Bulgaricus' },
    text: {
      bg: 'Уникалната бактерия, отговорна за вкуса и здравето на автентичното българско кисело мляко, вирее естествено единствено в нашите географски ширини.',
      en: 'The unique bacterium responsible for authentic Bulgarian yogurt thrives naturally only in our geographic latitudes.',
    },
  },
  {
    id: 8,
    catId: 'crafts',
    category: { bg: 'Занаяти и индустрия', en: 'Crafts & Industry' },
    title: { bg: 'Самоковската и Тревненската школи', en: 'Samokov & Tryavna Schools' },
    text: {
      bg: 'Майсторите от Възраждането са създали уникални дърворезби, медникарски съдове и иконописи, разпознаваеми из целия Балкански полуостров.',
      en: 'Master craftsmen of the Bulgarian Revival created unique woodcarvings, coppersmith works, and icons recognized across the Balkan peninsula.',
    },
  },
  {
    id: 9,
    catId: 'faith',
    category: { bg: 'Вяра и духовност', en: 'Faith & Spirituality' },
    title: { bg: 'Рилският манастир', en: 'Rila Monastery' },
    text: {
      bg: 'Основан през X век от Св. Иван Рилски, манастирът е пазител на българския дух, книжовност и православна традиция през най-тъмните векове.',
      en: 'Founded in the 10th century by St. John of Rila, the monastery remained the guardian of Bulgarian spirit, literacy, and Orthodox tradition.',
    },
  },
  {
    id: 10,
    catId: 'sports',
    category: { bg: 'Спорт', en: 'Sports' },
    title: { bg: 'Световният рекорд в скока на височина', en: 'World Record in High Jump' },
    text: {
      bg: 'Стефка Костадинова поставя световния рекорд от 2.09 м през 1987 г. в Рим, който остава неподобрен близо четири десетилетия.',
      en: 'Stefka Kostadinova set the high jump world record of 2.09m in 1987 in Rome, which stood unbroken for nearly four decades.',
    },
  },
  {
    id: 11,
    catId: 'personalities',
    category: { bg: 'Знаменити личности', en: 'Famous Personalities' },
    title: { bg: 'Джон Атанасов — Бащата на компютъра', en: 'John Atanasoff — Father of the Computer' },
    text: {
      bg: 'Американският физик и изобретател от български произход Джон Атанасов създава първия електронен цифров компютър (ABC) през 1937–1942 г.',
      en: 'American physicist and inventor of Bulgarian descent John Atanasoff created the first electronic digital computer (ABC) between 1937 and 1942.',
    },
  },
];

export default function FactsPage({ locale }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredFacts = activeCategory === 'all'
    ? facts
    : facts.filter((f) => f.catId === activeCategory);

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
            ? '11-те ключови рубрики за нашето културно наследство.'
            : '11 key categories about our cultural heritage.'}
        </p>
      </header>

      <div className="category-filter">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={activeCategory === cat.id ? 'active' : ''}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.name[locale]}
          </button>
        ))}
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
