import { motion } from 'framer-motion';
import type { Locale } from '../content';

type Props = {
  locale: Locale;
};

const CompassSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" width="72" height="72">
    <circle cx="32" cy="32" r="28" stroke="#bfa15f" strokeWidth="1.5" opacity="0.4" />
    <circle cx="32" cy="32" r="22" stroke="#bfa15f" strokeWidth="1.5" />
    <path d="M32 10v6M32 48v6M10 32h6M48 32h6" stroke="#bfa15f" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <path d="M24 24l6 12 12-6-6-12-12 6z" stroke="#bfa15f" strokeWidth="1.5" strokeLinejoin="round" fill="#bfa15f" fillOpacity="0.18" />
    <circle cx="32" cy="32" r="2.5" fill="#bfa15f" />
  </svg>
);

export default function GuidePage({ locale }: Props) {
  return (
    <motion.div
      className="page-detail-container coming-soon-container"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.4 }}
    >
      {/* Animated compass */}
      <motion.div
        className="coming-soon-icon"
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      >
        <CompassSvg />
      </motion.div>

      {/* Badge */}
      <motion.span
        className="page-badge"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        {locale === 'bg' ? 'Пътеводител на Културния Стопаджия' : 'Cultural Hitchhiker\'s Guide'}
      </motion.span>

      {/* Main heading */}
      <motion.h1
        className="coming-soon-title"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.5 }}
      >
        {locale === 'bg' ? 'ОЧАКВАЙТЕ СКОРО' : 'COMING SOON'}
      </motion.h1>

      {/* Ornament */}
      <motion.div
        className="coming-soon-ornament"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        ❖ ❖ ❖
      </motion.div>

      {/* Subtitle */}
      <motion.p
        className="coming-soon-subtitle"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.5 }}
      >
        {locale === 'bg'
          ? 'Подготвяме нещо специално — пътеводител за открити духом, за хора, готови да открият истинска България и Балканите.'
          : 'We are preparing something special — a guide for the open-hearted, for people ready to discover authentic Bulgaria and the Balkans.'}
      </motion.p>
    </motion.div>
  );
}
