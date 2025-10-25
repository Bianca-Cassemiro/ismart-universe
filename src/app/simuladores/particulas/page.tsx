'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import InputField from '@/components/InputField';
import ParticlesChart from '@/components/ParticlesChart';
import { useSimulatorStore } from '@/lib/store';

export default function ParticulasPage() {
  const { particleData, setParticleData } = useSimulatorStore();
  const [chartData, setChartData] = useState({
    darkMatter: [] as number[],
    baryonic: [] as number[],
    labels: [] as string[],
  });

  // Generate chart data based on current parameters
  useEffect(() => {
    const generateData = () => {
      const timePoints = 10;
      const labels = Array.from({ length: timePoints }, (_, i) => `T${i + 1}`);
      
      const darkMatterPoints = [];
      const baryonicPoints = [];
      
      for (let i = 0; i < timePoints; i++) {
        const timeProgress = i / (timePoints - 1);
        
        // Dark matter particles (less affected by temperature/pressure)
        const darkBase = particleData.darkMatterParticles;
        const darkVariation = Math.sin(timeProgress * Math.PI) * 0.1;
        darkMatterPoints.push(darkBase * (1 + darkVariation));
        
        // Baryonic particles (more affected by temperature/pressure)
        const baryonicBase = particleData.baryonicParticles;
        const temperatureEffect = (particleData.temperature / 10000) * 0.3;
        const pressureEffect = (particleData.pressure / 100) * 0.2;
        const baryonicVariation = Math.sin(timeProgress * Math.PI * 2) * (temperatureEffect + pressureEffect);
        baryonicPoints.push(baryonicBase * (1 + baryonicVariation));
      }
      
      setChartData({
        darkMatter: darkMatterPoints,
        baryonic: baryonicPoints,
        labels,
      });
    };

    generateData();
  }, [particleData]);

  // Calculate interaction statistics
  const calculateInteractions = () => {
    const ratio = particleData.darkMatterParticles / particleData.baryonicParticles;
    const temperatureEffect = Math.log(particleData.temperature / 1000 + 1) * 10;
    const pressureEffect = Math.sqrt(particleData.pressure) * 2;
    
    return {
      ratio: ratio.toFixed(2),
      temperatureEffect: temperatureEffect.toFixed(1),
      pressureEffect: pressureEffect.toFixed(1),
      totalInteractions: Math.floor(ratio * temperatureEffect * pressureEffect),
    };
  };

  const stats = calculateInteractions();

  return (
    <div style={{ 
      minHeight: '100vh', 
      paddingTop: '6rem', 
      paddingBottom: '6rem', 
      paddingLeft: '1rem', 
      paddingRight: '1rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decorative elements */}
      <div style={{ 
        position: 'absolute', 
        inset: '0', 
        background: 'radial-gradient(ellipse at center, rgba(236, 72, 153, 0.1) 0%, transparent 70%)' 
      }}></div>
      <div style={{ 
        position: 'absolute', 
        top: '20%', 
        left: '10%', 
        width: '16rem', 
        height: '16rem', 
        background: 'rgba(147, 51, 234, 0.08)', 
        borderRadius: '50%', 
        filter: 'blur(3rem)' 
      }}></div>
      <div style={{ 
        position: 'absolute', 
        bottom: '20%', 
        right: '10%', 
        width: '20rem', 
        height: '20rem', 
        background: 'rgba(236, 72, 153, 0.08)', 
        borderRadius: '50%', 
        filter: 'blur(3rem)' 
      }}></div>
      
      <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: '10' }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <SectionTitle 
            title="Simulação de Partículas"
            subtitle="Compare o comportamento entre partículas de matéria escura e matéria bariônica"
          />
          
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(1, 1fr)', 
          gap: '2rem',
          '@media (min-width: 1280px)': {
            gridTemplateColumns: 'repeat(3, 1fr)'
          }
        } as any}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr', 
          gap: '2rem'
        }}>
          
          {/* Controls Panel */}
          <motion.div
            style={{ 
              gridColumn: '1 / -1',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Parameters Section */}
            <div style={{ 
              background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.8), rgba(31, 41, 55, 0.8))',
              border: '1px solid rgba(236, 72, 153, 0.3)',
              borderRadius: '1.5rem',
              padding: '2rem',
              backdropFilter: 'blur(12px)'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>
                ⚙️ Parâmetros de Simulação
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <InputField
                  label="Partículas de Matéria Escura"
                  value={particleData.darkMatterParticles}
                  onChange={(value) => setParticleData({ darkMatterParticles: value })}
                  min={100}
                  max={10000}
                  step={100}
                />
                
                <InputField
                  label="Partículas Bariônicas"
                  value={particleData.baryonicParticles}
                  onChange={(value) => setParticleData({ baryonicParticles: value })}
                  min={50}
                  max={5000}
                  step={50}
                />
                
                <InputField
                  label="Temperatura"
                  value={particleData.temperature}
                  onChange={(value) => setParticleData({ temperature: value })}
                  min={100}
                  max={10000}
                  step={100}
                  unit="K"
                />
                
                <InputField
                  label="Pressão"
                  value={particleData.pressure}
                  onChange={(value) => setParticleData({ pressure: value })}
                  min={1}
                  max={100}
                  step={1}
                  unit="atm"
                />
                
                <InputField
                  label="Escala de Tempo"
                  value={particleData.timeScale}
                  onChange={(value) => setParticleData({ timeScale: value })}
                  min={10}
                  max={1000}
                  step={10}
                  unit="anos"
                />
              </div>
            </div>
        
          </motion.div>
          
          {/* Chart Panel */}
          <motion.div
            style={{ gridColumn: '1 / -1' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ParticlesChart
              darkMatterData={chartData.darkMatter}
              baryonicData={chartData.baryonic}
              labels={chartData.labels}
            />
            
            {/* Enhanced Information Cards */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '1.5rem', 
              marginTop: '2rem' 
            }}>
              <div style={{ 
                background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.6), rgba(31, 41, 55, 0.6))',
                border: '1px solid rgba(236, 72, 153, 0.3)',
                borderRadius: '1.5rem',
                padding: '2rem',
                backdropFilter: 'blur(12px)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '1.5rem', marginRight: '0.75rem' }}>🌑</div>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#ec4899' }}>
                    Matéria Escura
                  </h4>
                </div>
                <p style={{ color: '#d1d5db', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Partículas de matéria escura interagem fracamente com a matéria bariônica e são 
                  menos afetadas por temperatura e pressão. Sua distribuição permanece mais estável 
                  ao longo do tempo, formando halos que sustentam a estrutura galáctica.
                </p>
                <div style={{ 
                  marginTop: '1rem',
                  padding: '0.75rem',
                  background: 'rgba(236, 72, 153, 0.1)',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  color: '#ec4899'
                }}>
                  💡 Representa ~85% da matéria total do universo
                </div>
              </div>
              
              <div style={{ 
                background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.6), rgba(31, 41, 55, 0.6))',
                border: '1px solid rgba(147, 51, 234, 0.3)',
                borderRadius: '1.5rem',
                padding: '2rem',
                backdropFilter: 'blur(12px)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '1.5rem', marginRight: '0.75rem' }}>⭐</div>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#a855f7' }}>
                    Matéria Bariônica
                  </h4>
                </div>
                <p style={{ color: '#d1d5db', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Composta por prótons, nêutrons e elétrons, a matéria bariônica responde 
                  significativamente às mudanças de temperatura e pressão, formando estruturas 
                  complexas como estrelas, planetas e galáxias visíveis.
                </p>
                <div style={{ 
                  marginTop: '1rem',
                  padding: '0.75rem',
                  background: 'rgba(147, 51, 234, 0.1)',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  color: '#a855f7'
                }}>
                  💡 Toda a matéria visível que conhecemos
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Educational Section */}
        <div style={{ 
          marginTop: '4rem',
          background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(147, 51, 234, 0.1))',
          border: '1px solid rgba(236, 72, 153, 0.2)',
          borderRadius: '2rem',
          padding: '3rem 2rem',
          backdropFilter: 'blur(12px)',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
            🎓 Como Interpretar os Resultados
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem', 
            marginTop: '2rem',
            textAlign: 'left'
          }}>
            <div>
              <h4 style={{ color: '#ec4899', fontWeight: '600', marginBottom: '0.5rem' }}>
                📈 Razão DM/Bariônica
              </h4>
              <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.5' }}>
                Valores altos indicam domínio da matéria escura, refletindo as condições do universo primordial.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#a855f7', fontWeight: '600', marginBottom: '0.5rem' }}>
                🌡️ Efeitos Térmicos
              </h4>
              <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.5' }}>
                Altas temperaturas aumentam a energia cinética das partículas bariônicas, afetando suas interações.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#3b82f6', fontWeight: '600', marginBottom: '0.5rem' }}>
                💪 Pressão
              </h4>
              <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.5' }}>
                Pressões elevadas comprimem a matéria bariônica, simulando condições dentro de estrelas.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}