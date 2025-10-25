'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface SimulatorCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  number: string;
  className?: string;
}

export default function SimulatorCard({ 
  title, 
  description, 
  href, 
  icon, 
  number, 
  className = '' 
}: SimulatorCardProps) {
  return (
    <motion.div
      className={`group ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <Link href={href}>
        <div className="relative p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-pink-500/30 rounded-2xl backdrop-blur-sm hover:border-pink-500/60 transition-all duration-300 h-full" 
        style={{padding: '1rem'}}>
          
          {/* Number badge */}
          <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
            {number}
          </div>
          
          {/* Icon */}
          <div className="mb-6 text-pink-400 group-hover:text-pink-300 transition-colors duration-300">
            {icon}
          </div>
          
          {/* Content */}
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-100 transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            {description}
          </p>
          
          {/* CTA */}
          <div className="flex items-center text-pink-400 group-hover:text-pink-300 transition-colors duration-300">
            <span className="font-semibold">Explorar Simulação</span>
            <svg 
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </Link>
    </motion.div>
  );
}