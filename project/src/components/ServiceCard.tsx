import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="glass-card p-8 rounded-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transform-gpu hover:-translate-y-2">
        <div className="text-blue-400 mb-6 text-3xl group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        
        <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>
        
        <button className="flex items-center text-blue-400 font-semibold group-hover:text-blue-300 transition-colors duration-300">
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard