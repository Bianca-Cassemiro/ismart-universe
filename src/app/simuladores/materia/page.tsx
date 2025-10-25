'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import InputField from '@/components/InputField';
import { useSimulatorStore } from '@/lib/store';

export default function MateriaPage() {
  const { matterData, setMatterData } = useSimulatorStore();
  
  // Calculate gravitational influence visualization
  const calculateInfluence = () => {
    const totalMatter = matterData.darkMatterDensity + matterData.baryonicMatterDensity;
    const influence = (totalMatter * matterData.gravitationalInfluence) / 100;
    return Math.min(influence, 100);
  };

  const generateVisualizationData = () => {
    const data = [];
    const centerX = 200;
    const centerY = 200;
    
    for (let i = 0; i < 50; i++) {
      const angle = (i / 50) * Math.PI * 2;
      const baseRadius = matterData.radius;
      const influence = calculateInfluence();
      const radius = baseRadius + (Math.random() * influence * 2);
      
      data.push({
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        size: Math.random() * 4 + 2,
        type: Math.random() > 0.8 ? 'baryonic' : 'dark',
      });
    }
    return data;
  };

  const visualizationData = generateVisualizationData();

  return (
    <div style={{ minHeight: '100vh', paddingTop: '6rem', paddingBottom: '6rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <SectionTitle 
            title="Concentração da Matéria"
            subtitle="Explore como diferentes concentrações de matéria escura e bariônica afetam a influência gravitacional"
          />
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '2rem'
        }}>
          
          {/* Controls Panel */}
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ 
              background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.8), rgba(31, 41, 55, 0.8))',
              border: '1px solid rgba(236, 72, 153, 0.3)',
              borderRadius: '1rem',
              padding: '2rem',
              backdropFilter: 'blur(8px)'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>
                Parâmetros da Simulação
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <InputField
                  label="Densidade de Matéria Escura"
                  value={matterData.darkMatterDensity}
                  onChange={(value) => setMatterData({ darkMatterDensity: value })}
                  min={0}
                  max={100}
                  unit="%"
                />
                
                <InputField
                  label="Densidade de Matéria Bariônica"
                  value={matterData.baryonicMatterDensity}
                  onChange={(value) => setMatterData({ baryonicMatterDensity: value })}
                  min={0}
                  max={100}
                  unit="%"
                />
                
                <InputField
                  label="Intensidade Gravitacional"
                  value={matterData.gravitationalInfluence}
                  onChange={(value) => setMatterData({ gravitationalInfluence: value })}
                  min={0}
                  max={10}
                  step={0.1}
                  unit="G"
                />
                
                <InputField
                  label="Raio da Região"
                  value={matterData.radius}
                  onChange={(value) => setMatterData({ radius: value })}
                  min={50}
                  max={300}
                  unit="ly"
                />
              </div>
              
              {/* Statistics */}
              <div style={{ 
                marginTop: '2rem', 
                paddingTop: '1.5rem', 
                borderTop: '1px solid rgba(236, 72, 153, 0.2)' 
              }}>
                <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'white', marginBottom: '1rem' }}>
                  Estatísticas
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ec4899', marginBottom: '0.5rem' }}>
                      {(matterData.darkMatterDensity + matterData.baryonicMatterDensity).toFixed(1)}%
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Densidade Total</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '0.5rem' }}>
                      {calculateInfluence().toFixed(1)}
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Influência Total</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Visualization Panel */}
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ 
              background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.8), rgba(31, 41, 55, 0.8))',
              border: '1px solid rgba(236, 72, 153, 0.3)',
              borderRadius: '1rem',
              padding: '2rem',
              backdropFilter: 'blur(8px)'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>
                Visualização Gravitacional
              </h3>
              
              {/* SVG Visualization */}
              <div style={{ position: 'relative' }}>
                <svg
                  width="100%"
                  height="400"
                  viewBox="0 0 400 400"
                  style={{ 
                    border: '1px solid rgba(236, 72, 153, 0.2)', 
                    borderRadius: '0.5rem', 
                    background: 'rgba(0, 0, 0, 0.3)' 
                  }}
                >
                  {/* Background grid */}
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#333" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  
                  {/* Central gravitational field */}
                  <circle
                    cx="200"
                    cy="200"
                    r={matterData.radius / 2}
                    fill="none"
                    stroke="#ff69b4"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    opacity="0.5"
                  />
                  
                  {/* Matter particles */}
                  {visualizationData.map((particle, index) => (
                    <circle
                      key={index}
                      cx={particle.x}
                      cy={particle.y}
                      r={particle.size}
                      fill={particle.type === 'dark' ? '#ff69b4' : '#9d4edd'}
                      opacity="0.8"
                    >
                      <animate
                        attributeName="opacity"
                        values="0.3;0.8;0.3"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  ))}
                  
                  {/* Center point */}
                  <circle cx="200" cy="200" r="4" fill="#ffffff" />
                </svg>
                
                {/* Legend */}
                <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '0.75rem', height: '0.75rem', background: '#ec4899', borderRadius: '50%' }}></div>
                    <span style={{ fontSize: '0.875rem', color: '#d1d5db' }}>Matéria Escura</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '0.75rem', height: '0.75rem', background: '#a855f7', borderRadius: '50%' }}></div>
                    <span style={{ fontSize: '0.875rem', color: '#d1d5db' }}>Matéria Bariônica</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Information Panel */}
            <div style={{ 
              background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.5), rgba(31, 41, 55, 0.5))',
              border: '1px solid rgba(236, 72, 153, 0.2)',
              borderRadius: '0.75rem',
              padding: '1.5rem',
              backdropFilter: 'blur(8px)'
            }}>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'white', marginBottom: '0.75rem' }}>
                Informações Científicas
              </h4>
              <p style={{ color: '#d1d5db', fontSize: '0.875rem', lineHeight: '1.5' }}>
                A concentração de matéria escura é aproximadamente 5 vezes maior que a matéria bariônica 
                no universo. Sua influência gravitacional é fundamental para a formação de estruturas 
                cósmicas em grande escala, como galáxias e aglomerados de galáxias.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}