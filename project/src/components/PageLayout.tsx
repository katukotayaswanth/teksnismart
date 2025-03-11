import React from 'react';
import { motion } from 'framer-motion';
import Background3D from './Background3D';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      {/* 3D Background */}
      <Background3D />
      
      {/* Animated Background Gradient */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.15), transparent 80%)',
            'radial-gradient(circle at 50% 50%, rgba(147,51,234,0.15), transparent 80%)',
            'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.15), transparent 80%)',
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className="fixed inset-0 z-0"
      />

      {/* Floating Orbs */}
      <motion.div
        animate={{
          y: [-20, 20],
          x: [-10, 10],
          opacity: [0.3, 0.6],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="fixed left-10 top-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [20, -20],
          x: [10, -10],
          opacity: [0.3, 0.6],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2,
          ease: "easeInOut",
        }}
        className="fixed right-10 bottom-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"
      />

      {/* Page Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;