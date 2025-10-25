'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="bg-black/90 border-t border-pink-500/20 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">iU</span>
              </div>
              <span className="text-white font-bold text-xl">iSmart Universe</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Explorando os mistérios da matéria escura através de simulações interativas e educação científica.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm">
                  Início
                </a>
              </li>
              <li>
                <a href="/simuladores" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm">
                  Simuladores
                </a>
              </li>
              <li>
                <a href="/simuladores/materia" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm">
                  Concentração da Matéria
                </a>
              </li>
              <li>
                <a href="/simuladores/particulas" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm">
                  Partículas
                </a>
              </li>
              <li>
                <a href="/simuladores/orbitas" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm">
                  Órbitas Planetárias
                </a>
              </li>
            </ul>
          </div>
          
          {/* Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Sobre o Projeto</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Uma plataforma educacional para compreender os fenômenos da matéria escura no universo.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © 2025 iSmart Universe. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}