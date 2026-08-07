import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Locale } from '../content';

// Inline SVG icons matching hero card style
const CompassSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" width="28" height="28">
    <circle cx="32" cy="32" r="24" stroke="#bfa15f" strokeWidth="2"/>
    <path d="M32 14v4M32 46v4M14 32h4M46 32h4" stroke="#bfa15f" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    <path d="M22 22l8 10 10-8-8-10-10 8z" stroke="#bfa15f" strokeWidth="2" strokeLinejoin="round" fill="#bfa15f" fillOpacity="0.12"/>
    <circle cx="32" cy="32" r="2" fill="#bfa15f"/>
  </svg>
);

const PinSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" width="18" height="18">
    <path d="M32 6C22 6 14 14 14 24c0 14 18 34 18 34s18-20 18-34C50 14 42 6 32 6z" stroke="#bfa15f" strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="32" cy="24" r="5" stroke="#bfa15f" strokeWidth="2"/>
  </svg>
);

type Props = {
  locale: Locale;
};

const guideSpots = [
  {
    id: 'rhodopes',
    region: { bg: 'Родопи', en: 'Rhodopes' },
    title: { bg: 'Село Гела & Орфеевите сключения', en: 'Gela Village & Orphean Glades' },
    desc: {
      bg: 'Родното място на легендата за Орфей. Всяко лято тук се провежда Националното надсвирване с каба гайди.',
      en: 'The legendary birthplace of Orpheus. Every summer it hosts the National Kaba Gaida Bagpipe Competition.',
    },
    tag: { bg: 'Музика и Древност', en: 'Music & Antiquity' },
  },
  {
    id: 'stara_planina',
    region: { bg: 'Стара планина', en: 'Stara Planina' },
    title: { bg: 'Трявна & Скритите занаятчии', en: 'Tryavna & Hidden Artisans' },
    desc: {
      bg: 'Старинни дърворезби, чаршия с аромат на кафе на пясък и съхранените майсторски традиции на балканската школа.',
      en: 'Ancient woodcarvings, traditional cobblestone bazaar with sand-brewed coffee, and preserved master craftsmanship.',
    },
    tag: { bg: 'Занаяти', en: 'Crafts' },
  },
  {
    id: 'pirin',
    region: { bg: 'Пирин', en: 'Pirin' },
    title: { bg: 'Мелник & Пясъчните пирамиди', en: 'Melnik & Sand Pyramids' },
    desc: {
      bg: 'Най-малкият град в България, обвикнат в изби с гъсто мелнишко вино и уникални природни пясъчни скулптури.',
      en: 'The smallest town in Bulgaria, cradled in historic wine cellars and unique natural sand structures.',
    },
    tag: { bg: 'Традиция и Вино', en: 'Tradition & Wine' },
  },
];

export default function GuidePage({ locale }: Props) {
  const [selectedSpot, setSelectedSpot] = useState<string | null>(null);

  return (
    <motion.div
      className="page-detail-container"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.4 }}
    >
      <header className="page-header">
        <span className="page-badge">{locale === 'bg' ? 'Отново на път' : 'On The Road'}</span>
        <h1>{locale === 'bg' ? 'ПЪТЕВОДИТЕЛ НА КУЛТУРНИЯ СТОПАДЖИЯ' : 'CULTURAL HITCHHIKER\'S GUIDE'}</h1>
        <p className="page-subtitle">
          {locale === 'bg'
            ? 'Откриваме забележителни места, хора и истории из България и Балканите — подбрани по душа.'
            : 'Uncovering remarkable places, people and stories across Bulgaria and the Balkans.'}
        </p>
      </header>

      <section className="hitchhiker-rules-card">
        <h3><CompassSvg /> {locale === 'bg' ? 'Кодекса на Културния Стопаджия' : 'The Hitchhiker\'s Code'}</h3>
        <ul>
          <li>{locale === 'bg' ? '1. Пътувай бавно — слушай повече, отколкото говориш.' : '1. Travel slow — listen more than you speak.'}</li>
          <li>{locale === 'bg' ? '2. Почитай местните хора и техния традиционен поминък.' : '2. Respect the local elders and traditional ways of life.'}</li>
          <li>{locale === 'bg' ? '3. Отклони се от утъпкания път — там живеят истинските истории.' : '3. Step off the beaten path — that is where authentic stories live.'}</li>
        </ul>
      </section>

      <section className="spots-grid">
        {guideSpots.map((spot) => (
          <article
            key={spot.id}
            className={`spot-card ${selectedSpot === spot.id ? 'active' : ''}`}
            onClick={() => setSelectedSpot(selectedSpot === spot.id ? null : spot.id)}
          >
            <div className="spot-header">
              <span className="spot-region"><PinSvg /> {spot.region[locale]}</span>
              <span className="spot-tag">{spot.tag[locale]}</span>
            </div>
            <h4>{spot.title[locale]}</h4>
            <p>{spot.desc[locale]}</p>
          </article>
        ))}
      </section>
    </motion.div>
  );
}
