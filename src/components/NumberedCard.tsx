'use client';

import { motion } from 'framer-motion';

interface NumberedCardProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

export default function NumberedCard({ number, title, description, className = '' }: NumberedCardProps) {
  return (
    <motion.div
      className={`relative p-8 pt-12 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-pink-500/20 rounded-xl backdrop-blur-sm ${className}`}
      style={{padding: '2rem', marginBottom: '2rem'}}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      {/* Number badge */}
      <div className="absolute -top-6 -left-4 w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
        {number}
      </div>
      
      {/* Content */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-white mb-4" style={{justifyContent: 'center', display: 'flex'}}>
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/10 to-purple-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
    </motion.div>
  );
}