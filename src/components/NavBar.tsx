'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();
  
  const navItems = [
    { href: '/#explicacoes', label: 'Explicações teóricas' },
    { href: '/simuladores/orbitas', label: 'Influência Gravitacional' },
    { href: '/simuladores/materia', label: 'Concentração da matéria' },
  ];
  
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-pink-500/20"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center ml-8" style={{marginLeft:'1rem'}}>
            <span className="text-white font-bold text-xl">iSmart Academy</span>
          </Link>
          
          {/* Navigation items */}
          <div className="hidden md:flex ml-2 items-center mr-8" >
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                style={{marginLeft:'1rem'}}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  index > 0 ? 'ml-12' : ''
                } ${
                  pathname === item.href
                    ? 'text-pink-400'
                    : 'text-gray-300 hover:text-pink-400'
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600"
                    layoutId="navbar-underline"
                  />
                )}
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden mr-8">
            <button className="text-gray-300 hover:text-pink-400 transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}