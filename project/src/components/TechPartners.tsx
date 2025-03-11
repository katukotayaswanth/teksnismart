import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
  },
  {
    name: "Oracle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
  }
];

const TechPartners = () => {
  return (
    <div className="w-full overflow-hidden py-8">
      <div className="flex animate-[scroll_20s_linear_infinite]">
        {[...partners, ...partners, ...partners].map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex-none mx-12"
          >
            <motion.img
              src={partner.logo}
              alt={partner.name}
              className="h-12 w-auto filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechPartners;