'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({ title, subtitle, className = '' }: SectionTitleProps) {
  return (
    <motion.div
      className={`text-center mb-12 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}