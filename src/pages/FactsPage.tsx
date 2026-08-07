import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Locale } from '../content';

type Props = {
  locale: Locale;
};

export type FactCategory =
  | 'all'
  | 'nature'
  | 'history'
  | 'architecture'
  | 'cuisine'
  | 'folklore'
  | 'crafts'
  | 'faith'
  | 'art'
  | 'sports'
  | 'language';

type FactItem = {
  id: number;
  categoryKey: FactCategory;
  category: { bg: string; en: string };
  title: { bg: string; en: string };
  text: { bg: string; en: string };
};

const categories: { id: FactCategory; label: { bg: string; en: string } }[] = [
  { id: 'all', label: { bg: 'Всички', en: 'All' } },
  { id: 'nature', label: { bg: 'Природа и малко известни места', en: 'Nature & Hidden Gems' } },
  { id: 'history', label: { bg: 'История', en: 'History' } },
  { id: 'architecture', label: { bg: 'Архитектура и забележителности', en: 'Architecture & Landmarks' } },
  { id: 'cuisine', label: { bg: 'Българска кухня', en: 'Bulgarian Cuisine' } },
  { id: 'folklore', label: { bg: 'Фолклор', en: 'Folklore' } },
  { id: 'crafts', label: { bg: 'Занаяти', en: 'Crafts' } },
  { id: 'faith', label: { bg: 'Вяра и духовност', en: 'Faith & Spirituality' } },
  { id: 'art', label: { bg: 'Изкуство', en: 'Art' } },
  { id: 'sports', label: { bg: 'Спорт', en: 'Sports' } },
  { id: 'language', label: { bg: 'Български език', en: 'Bulgarian Language' } },
];

const facts: FactItem[] = [
  {
    id: 1,
    categoryKey: 'nature',
    category: { bg: 'Природа и малко известни места', en: 'Nature & Hidden Gems' },
    title: { bg: 'Златото на Розовата Долина', en: 'Gold of the Rose Valley' },
    text: {
      bg: 'България произвежда около 70% от световното розово масло. За 1 грам розово масло са необходими над 1400 рози, брани ръчно при изгрев слънце.',
      en: 'Bulgaria produces ~70% of global rose oil. Producing 1 gram of rose oil requires over 1,400 hand-picked roses gathered at sunrise.',
    },
  },
  {
    id: 2,
    categoryKey: 'nature',
    category: { bg: 'Природа и малко известни места', en: 'Nature & Hidden Gems' },
    title: { bg: 'Пещерата „Проходна“ (Очите на Бога)', en: 'Prohodna Cave (Eyes of God)' },
    text: {
      bg: 'Едно от най-магичните природни феномени у нас, където два естествени отвора в тавана на пещерата наподобяват човешки очи.',
      en: 'One of Bulgaria’s most magical natural wonders, where two ceiling openings resemble massive human eyes gazing downwards.',
    },
  },
  {
    id: 3,
    categoryKey: 'history',
    category: { bg: 'История', en: 'History' },
    title: { bg: 'Най-старото обработено злато в света', en: 'Oldest Processed Gold in the World' },
    text: {
      bg: 'Варненският некропол пази златно съкровище на над 6500 години (от V хил. пр. Хр.), изпреварващо по възраст дори цивилизациите на Египет и Месопотамия.',
      en: 'The Varna Necropolis treasure dates back over 6,500 years (5th millennium BC), predating ancient Egypt and Mesopotamia.',
    },
  },
  {
    id: 4,
    categoryKey: 'architecture',
    category: { bg: 'Архитектура и забележителности', en: 'Architecture & Landmarks' },
    title: { bg: 'Боянската църква и Ренесансът', en: 'Boyana Church & Early Renaissance' },
    text: {
      bg: 'Стенописите от 1259 г. съдържат живописни и реалистични човешки изображения, изпреварили италианския Ренесанс с десетилетия.',
      en: 'The 1259 AD frescoes contain realistic portraits and human expression, preceding the Italian Renaissance by decades.',
    },
  },
  {
    id: 5,
    categoryKey: 'architecture',
    category: { bg: 'Архитектура и забележителности', en: 'Architecture & Landmarks' },
    title: { bg: 'Мостът на Колю Фичето над Янтра', en: 'Ficheto Bridge over Yantra' },
    text: {
      bg: 'Самоукият майстор Колю Фичето гарантира здравината на моста при Бяла с живота си, заставайки под него по време на пробното натоварване.',
      en: 'Self-taught master architect Kolyu Ficheto staked his life under the bridge during its stress test to prove its durability.',
    },
  },
  {
    id: 6,
    categoryKey: 'cuisine',
    category: { bg: 'Българска кухня', en: 'Bulgarian Cuisine' },
    title: { bg: 'Lactobacillus bulgaricus', en: 'Lactobacillus bulgaricus' },
    text: {
      bg: 'Българското кисело мляко дължи уникалния си вкус и здравословни свойства на бактерията Lactobacillus bulgaricus, открита от д-р Стамен Григоров.',
      en: 'Bulgarian yogurt gets its unique taste and health benefits from Lactobacillus bulgaricus, discovered by Dr. Stamen Grigorov in 1905.',
    },
  },
  {
    id: 7,
    categoryKey: 'folklore',
    category: { bg: 'Фолклор', en: 'Folklore' },
    title: { bg: 'Нестинарството — Огненият Танц', en: 'Nestinarstvo — Fire Dance' },
    text: {
      bg: 'Древният ритуал на танц върху жива жарава е част от световното нематериално културно наследство на ЮНЕСКО, съхранено в Странджа.',
      en: 'The ancient ritual of walking on glowing embers is recognized as UNESCO Intangible Cultural Heritage preserved in Strandzha.',
    },
  },
  {
    id: 8,
    categoryKey: 'folklore',
    category: { bg: 'Фолклор', en: 'Folklore' },
    title: { bg: 'Песента на Валя Балканска в Космоса', en: 'Bulgarian Song in Deep Space' },
    text: {
      bg: '„Излел е Дельо хайдутин“ в изпълнение на Валя Балканска пътува в Космоса на борда на американските сонди „Вояджър“ 1 и 2.',
      en: '"Izlel e Delyu Haydutin" performed by Valya Balkanska travels through interstellar space aboard the Voyager 1 and 2 probes.',
    },
  },
  {
    id: 9,
    categoryKey: 'crafts',
    category: { bg: 'Занаяти', en: 'Crafts' },
    title: { bg: 'Чипровските килими', en: 'Chiprovtsi Carpets' },
    text: {
      bg: 'Тъкането на традиционните чипровски килими с характерни геометрични фигури и естествени багрила е вписано в листата на ЮНЕСКО.',
      en: 'The hand-weaving of traditional Chiprovtsi carpets featuring unique geometric patterns is part of UNESCO cultural heritage.',
    },
  },
  {
    id: 10,
    categoryKey: 'faith',
    category: { bg: 'Вяра и духовност', en: 'Faith & Spirituality' },
    title: { bg: 'Рилският манастир', en: 'Rila Monastery' },
    text: {
      bg: 'Основан през X век от св. Иван Рилски, манастирът е пазител на българската духовност, просвета и идентичност през вековете.',
      en: 'Founded in the 10th century by St. Ivan of Rila, the monastery served as a bastion of Bulgarian faith and education for centuries.',
    },
  },
  {
    id: 11,
    categoryKey: 'art',
    category: { bg: 'Изкуство', en: 'Art' },
    title: { bg: 'Майстора и българската душа', en: 'Vladimir Dimitrov — Maystora' },
    text: {
      bg: 'Владимир Димитров – Майстора създава уникален стил, съчетаващ ярки багри и традиционни балкански образи с модернистични похвати.',
      en: 'Master painter Vladimir Dimitrov – Maystora captured the essence of Bulgarian folk life with vivid colors and modernist expressions.',
    },
  },
  {
    id: 12,
    categoryKey: 'sports',
    category: { bg: 'Спорт', en: 'Sports' },
    title: { bg: 'Непобеденият рекорд на Стефка Костадинова', en: 'Stefka Kostadinova World Record' },
    text: {
      bg: 'Световният рекорд на Стефка Костадинова в скока на височина (209 см), поставен в Рим през 1987 г., остава сред най-величествените постижения в леката атлетика.',
      en: 'Stefka Kostadinova set an iconic high jump world record of 2.09 m in Rome in 1987, standing among track and field’s greatest feats.',
    },
  },
  {
    id: 13,
    categoryKey: 'language',
    category: { bg: 'Български език', en: 'Bulgarian Language' },
    title: { bg: 'Кирилицата е Българска', en: 'The Cyrillic Alphabet is Bulgarian' },
    text: {
      bg: 'Азбуката, използвана днес от над 250 милиона души по целия свят, е създадена в Преславската книжовна школа през IX век.',
      en: 'The Cyrillic script, used today by over 250 million people worldwide, was developed in 9th century Bulgaria at the Preslav School.',
    },
  },
];

export default function FactsPage({ locale }: Props) {
  const [activeCategory, setActiveCategory] = useState<FactCategory>('all');

  const filteredFacts =
    activeCategory === 'all'
      ? facts
      : facts.filter((f) => f.categoryKey === activeCategory);

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
            ? 'Открийте 10-те рубрики с любопитни факти за нашата история, природа, култура и традиции.'
            : 'Explore the 10 curated categories of curious facts about our history, nature, culture, and traditions.'}
        </p>
      </header>

      <div className="category-filter" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '1.5rem 0 2rem', justifyContent: 'center' }}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={activeCategory === cat.id ? 'active' : ''}
            onClick={() => setActiveCategory(cat.id)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '2rem',
              border: activeCategory === cat.id ? '1px solid var(--accent-gold, #d8b77b)' : '1px solid rgba(255,255,255,0.15)',
              background: activeCategory === cat.id ? 'rgba(216, 183, 123, 0.2)' : 'rgba(0,0,0,0.3)',
              color: activeCategory === cat.id ? '#f3e5ca' : 'var(--muted, #b3a998)',
              cursor: 'pointer',
              fontSize: '0.88rem',
              transition: 'all 0.2s ease',
            }}
          >
            {cat.label[locale]}
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

