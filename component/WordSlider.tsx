'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const arrayOfWords = [
  'Awesome!',
  'Genius!',
  'Intelligent!',
  'Prodigy!',
  'Him!',
  'Amazing!',
  'Terrific!',
  'Broke!',
];

const WordSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % arrayOfWords.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <AnimatePresence mode='wait'>
        <motion.div
          key={activeIndex}
          initial={{ y: '4rem' }}
          animate={{ y: '0rem' }}
          exit={{ y: '4rem' }}
          transition={{ duration: 1 }}
        >
          <p>{arrayOfWords[activeIndex]}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default WordSlider;
