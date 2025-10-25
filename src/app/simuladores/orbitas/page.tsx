'use client';

import { motion } from 'framer-motion';
import { Suspense } from 'react';
import SectionTitle from '@/components/SectionTitle';
import InputField from '@/components/InputField';
import OrbitScene from '@/components/OrbitScene';
import { useSimulatorStore } from '@/lib/store';

function OrbitSceneLoader() {
  return (
    <div style={{ 
      background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.6), rgba(31, 41, 55, 0.6))',
      border: '1px solid rgba(236, 72, 153, 0.3)',
      borderRadius: '1.5rem',
      height: '24rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(12px)'
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ 
          width: '3rem',
          height: '3rem',
          borderRadius: '50%',
          border: '2px solid transparent',
          borderTop: '2px solid #ec4899',
          animation: 'spin 1s linear infinite',
          margin: '0 auto 1rem auto'
        }}></div>
        <p style={{ color: '#d1d5db', fontSize: '0.95rem' }}>Carregando simulação 3D...</p>
      </div>
    </div>
  );
}

export default function OrbitasPage() {
  const { orbitData, setOrbitData, isPlaying, setIsPlaying } = useSimulatorStore();

  // Calculate orbital period based on Kepler's laws
  const calculateOrbitalPeriod = () => {
    const G = 6.67430e-11; // Gravitational constant
    const M = orbitData.starMass * 1.989e30; // Star mass in kg
    const r = orbitData.orbitRadius * 1.496e11; // Orbit radius in meters
    const T = 2 * Math.PI * Math.sqrt((r ** 3) / (G * M));
    return (T / (365.25 * 24 * 3600)).toFixed(2); // Convert to years
  };

  // Calculate escape velocity
  const calculateEscapeVelocity = () => {
    const G = 6.67430e-11;
    const M = orbitData.starMass * 1.989e30;
    const r = orbitData.orbitRadius * 1.496e11;
    const v = Math.sqrt((2 * G * M) / r);
    return (v / 1000).toFixed(1); // Convert to km/s
  };

  const orbitalPeriod = calculateOrbitalPeriod();
  const escapeVelocity = calculateEscapeVelocity();

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
        background: 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.1) 0%, transparent 70%)' 
      }}></div>
      <div style={{ 
        position: 'absolute', 
        top: '15%', 
        left: '5%', 
        width: '18rem', 
        height: '18rem', 
        background: 'rgba(236, 72, 153, 0.08)', 
        borderRadius: '50%', 
        filter: 'blur(3rem)' 
      }}></div>
      <div style={{ 
        position: 'absolute', 
        bottom: '15%', 
        right: '5%', 
        width: '22rem', 
        height: '22rem', 
        background: 'rgba(59, 130, 246, 0.08)', 
        borderRadius: '50%', 
        filter: 'blur(3rem)' 
      }}></div>
      
      <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: '10' }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <SectionTitle 
            title="Simulação de Órbitas"
            subtitle="Analise como a matéria escura influencia as órbitas planetárias e a dinâmica estelar"
          />
          
          {/* Quick Info Cards */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem', 
            marginTop: '2rem',
            marginBottom: '1rem'
          }}>
            <div style={{ 
              background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(147, 51, 234, 0.1))',
              border: '1px solid rgba(236, 72, 153, 0.3)',
              borderRadius: '1rem',
              padding: '1.5rem',
              backdropFilter: 'blur(8px)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🪐</div>
              <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>
                Simulação 3D
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#d1d5db' }}>
                Visualização interativa em tempo real
              </p>
            </div>
            
            <div style={{ 
              background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))',
              border: '1px solid rgba(147, 51, 234, 0.3)',
              borderRadius: '1rem',
              padding: '1.5rem',
              backdropFilter: 'blur(8px)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚖️</div>
              <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>
                Leis de Kepler
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#d1d5db' }}>
                Cálculos orbitais precisos
              </p>
            </div>
            
            <div style={{ 
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(236, 72, 153, 0.1))',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '1rem',
              padding: '1.5rem',
              backdropFilter: 'blur(8px)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌌</div>
              <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>
                Influência M.E.
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#d1d5db' }}>
                Efeitos da matéria escura
              </p>
            </div>
          </div>
        </div>
        
        {/* Main Content: Controls and 3D Scene Side by Side */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem',
          alignItems: 'start'
        }}>
          
          {/* Left Side - Controls Panel */}
          <motion.div
            style={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem'
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
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
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                marginBottom: '1.5rem' 
              }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>
                  🚀 Parâmetros Orbitais
                </h3>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    border: 'none',
                    cursor: 'pointer',
                    background: isPlaying 
                      ? 'linear-gradient(to right, #ef4444, #dc2626)' 
                      : 'linear-gradient(to right, #10b981, #059669)',
                    color: 'white'
                  }}
                >
                  {isPlaying ? '⏸️ Pausar' : '▶️ Iniciar'}
                </button>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <InputField
                  label="Massa do Planeta"
                  value={orbitData.planetMass}
                  onChange={(value) => setOrbitData({ planetMass: value })}
                  min={0.1}
                  max={10}
                  step={0.1}
                  unit="M⊕"
                />
                
                <InputField
                  label="Massa da Estrela"
                  value={orbitData.starMass}
                  onChange={(value) => setOrbitData({ starMass: value })}
                  min={0.5}
                  max={5}
                  step={0.1}
                  unit="M☉"
                />
                
                <InputField
                  label="Halo de Matéria Escura"
                  value={orbitData.darkMatterHalo}
                  onChange={(value) => setOrbitData({ darkMatterHalo: value })}
                  min={0}
                  max={100}
                  step={5}
                  unit="%"
                />
                
                <InputField
                  label="Raio Orbital"
                  value={orbitData.orbitRadius}
                  onChange={(value) => setOrbitData({ orbitRadius: value })}
                  min={1}
                  max={50}
                  step={0.5}
                  unit="AU"
                />
                
                <InputField
                  label="Velocidade de Animação"
                  value={orbitData.orbitSpeed}
                  onChange={(value) => setOrbitData({ orbitSpeed: value })}
                  min={0.1}
                  max={5}
                  step={0.1}
                  unit="x"
                />
              </div>
            </div>
            
            {/* Calculations Panel */}
            <div style={{ 
              background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.6), rgba(31, 41, 55, 0.6))',
              border: '1px solid rgba(147, 51, 234, 0.3)',
              borderRadius: '1.5rem',
              padding: '2rem',
              backdropFilter: 'blur(12px)'
            }}>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'white', marginBottom: '1.5rem' }}>
                🧮 Cálculos Orbitais
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  padding: '0.75rem',
                  background: 'rgba(59, 130, 246, 0.1)',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(59, 130, 246, 0.2)'
                }}>
                  <span style={{ color: '#d1d5db' }}>Período Orbital:</span>
                  <span style={{ color: '#3b82f6', fontWeight: '600' }}>{orbitalPeriod} anos</span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  padding: '0.75rem',
                  background: 'rgba(147, 51, 234, 0.1)',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(147, 51, 234, 0.2)'
                }}>
                  <span style={{ color: '#d1d5db' }}>Velocidade de Escape:</span>
                  <span style={{ color: '#a855f7', fontWeight: '600' }}>{escapeVelocity} km/s</span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  padding: '0.75rem',
                  background: 'rgba(236, 72, 153, 0.1)',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(236, 72, 153, 0.2)'
                }}>
                  <span style={{ color: '#d1d5db' }}>Influência M.E.:</span>
                  <span style={{ color: '#ec4899', fontWeight: '600' }}>
                    {(orbitData.darkMatterHalo * 0.15).toFixed(1)}%
                  </span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  padding: '1rem',
                  background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(147, 51, 234, 0.15))',
                  borderRadius: '0.75rem',
                  border: '1px solid rgba(236, 72, 153, 0.3)',
                  marginTop: '0.5rem'
                }}>
                  <span style={{ color: '#f3f4f6', fontWeight: '500' }}>Estabilidade:</span>
                  <span style={{ 
                    fontWeight: 'bold',
                    color: orbitData.darkMatterHalo > 70 ? '#f87171' :
                           orbitData.darkMatterHalo > 40 ? '#fbbf24' : '#34d399'
                  }}>
                    {orbitData.darkMatterHalo > 70 ? 'Instável' :
                     orbitData.darkMatterHalo > 40 ? 'Moderada' : 'Estável'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Side - 3D Scene Panel */}
          <motion.div
            style={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Suspense fallback={<OrbitSceneLoader />}>
              <OrbitScene
                planetMass={orbitData.planetMass}
                starMass={orbitData.starMass}
                darkMatterHalo={orbitData.darkMatterHalo}
                orbitRadius={orbitData.orbitRadius}
                orbitSpeed={isPlaying ? orbitData.orbitSpeed : 0}
              />
            </Suspense>
            
            {/* Controls Info */}
            <div style={{ 
              background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.3), rgba(31, 41, 55, 0.3))',
              border: '1px solid rgba(236, 72, 153, 0.2)',
              borderRadius: '1rem',
              padding: '1rem',
              backdropFilter: 'blur(8px)',
              textAlign: 'center'
            }}>
              <p style={{ color: '#d1d5db', fontSize: '0.875rem', margin: '0' }}>
                🖱️ <strong>Mouse:</strong> Rotacionar câmera • 🔍 <strong>Scroll:</strong> Zoom • ⌨️ <strong>Parâmetros:</strong> Ajustar valores
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Enhanced Information Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem', 
          marginTop: '3rem' 
        }}>
          <div style={{ 
            background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.6), rgba(31, 41, 55, 0.6))',
            border: '1px solid rgba(236, 72, 153, 0.3)',
            borderRadius: '1.5rem',
            padding: '2rem',
            backdropFilter: 'blur(12px)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ fontSize: '1.5rem', marginRight: '0.75rem' }}>🌌</div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#ec4899' }}>
                Efeitos da Matéria Escura
              </h4>
            </div>
            <p style={{ color: '#d1d5db', fontSize: '0.95rem', lineHeight: '1.6' }}>
              A matéria escura forma halos massivos ao redor de sistemas estelares, 
              influenciando sutilmente as órbitas planetárias através de sua força gravitacional. 
              Altas concentrações podem afetar a estabilidade orbital e criar perturbações observáveis.
            </p>
            <div style={{ 
              marginTop: '1rem',
              padding: '0.75rem',
              background: 'rgba(236, 72, 153, 0.1)',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              color: '#ec4899'
            }}>
              💡 Influência sutil mas mensurável nos sistemas planetários
            </div>
          </div>
          
          <div style={{ 
            background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.6), rgba(31, 41, 55, 0.6))',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '1.5rem',
            padding: '2rem',
            backdropFilter: 'blur(12px)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ fontSize: '1.5rem', marginRight: '0.75rem' }}>⚖️</div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#3b82f6' }}>
                Dinâmica Orbital
              </h4>
            </div>
            <p style={{ color: '#d1d5db', fontSize: '0.95rem', lineHeight: '1.6' }}>
              As leis de Kepler governam o movimento planetário, mas a presença de matéria escura 
              pode introduzir perturbações sutis que afetam períodos orbitais e excentricidades 
              ao longo de escalas de tempo cosmológicas.
            </p>
            <div style={{ 
              marginTop: '1rem',
              padding: '0.75rem',
              background: 'rgba(59, 130, 246, 0.1)',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              color: '#3b82f6'
            }}>
              💡 Física newtoniana com correções relativísticas
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
              <div style={{ fontSize: '1.5rem', marginRight: '0.75rem' }}>🔬</div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#a855f7' }}>
                Métodos de Detecção
              </h4>
            </div>
            <p style={{ color: '#d1d5db', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Astrônomos detectam a influência da matéria escura através de observações de 
              velocidades orbitais anômalas, lentes gravitacionais e perturbações em sistemas 
              estelares que não podem ser explicadas pela matéria visível.
            </p>
            <div style={{ 
              marginTop: '1rem',
              padding: '0.75rem',
              background: 'rgba(147, 51, 234, 0.1)',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              color: '#a855f7'
            }}>
              💡 Evidências observacionais indiretas mas conclusivas
            </div>
          </div>
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
            🎓 Compreendendo a Simulação
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
                🪐 Parâmetros Orbitais
              </h4>
              <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.5' }}>
                Ajuste massas planetárias e estelares para observar como elas afetam os períodos orbitais segundo as leis de Kepler.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#a855f7', fontWeight: '600', marginBottom: '0.5rem' }}>
                🌌 Halo de Matéria Escura
              </h4>
              <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.5' }}>
                Concentrações altas de matéria escura podem criar perturbações orbitais e afetar a estabilidade do sistema.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#3b82f6', fontWeight: '600', marginBottom: '0.5rem' }}>
                ⚖️ Estabilidade Orbital
              </h4>
              <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.5' }}>
                Monitor o indicador de estabilidade para entender quando um sistema pode se tornar gravitacionalmente instável.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}