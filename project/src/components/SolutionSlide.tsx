import React from 'react';
import { motion } from 'framer-motion';

interface SolutionSlideProps {
  title: string;
  tagline: string;
  description: string;
}

const SolutionSlide: React.FC<SolutionSlideProps> = ({ title, tagline, description }) => {
  return (
    <div className="w-full px-4 py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="relative z-10 w-full max-w-5xl mx-auto"
      >
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 gradient-text leading-tight text-shadow-lg text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {title}
        </motion.h2>
        
        <motion.h3
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-blue-400 mb-4 sm:mb-6 glow-text text-center max-w-3xl mx-auto px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 1.2, delay: 0.1, ease: "easeInOut" }}
        >
          {tagline}
        </motion.h3>
        
        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed text-center max-w-2xl mx-auto backdrop-blur-sm bg-gray-900/30 p-4 sm:p-6 rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
        >
          {description}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default SolutionSlide;