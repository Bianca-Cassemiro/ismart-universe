'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
          style={{  marginBottom: '1.5rem' }}>
            Matéria Escura 
          </h1>

          <p className="text-xl md:text-2xl mt-4 text-gray-300 mb-8 leading-relaxed">
            Simulador das suas influências no universo. <br />
            Aprenda física e astronomia de forma interativa!
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/simuladores">
              <button 
                className="group relative text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
                style={{ padding: '1rem 3rem', marginTop: '1.5rem' }}
              >
                <span className="relative z-10">Escolher Simulação</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Floating particles animation */}
        <motion.div
          className="absolute top-20 w-2 h-2 bg-pink-400 rounded-full"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 left-1/4 w-1 h-1 bg-blue-400 rounded-full"
          animate={{
            y: [0, -40, 0],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
    </section>
  );
}