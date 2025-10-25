import SectionTitle from '@/components/SectionTitle';
import SimulatorCard from '@/components/SimulatorCard';

export default function SimuladoresPage() {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '6rem', paddingBottom: '6rem', paddingLeft: '1rem', paddingRight: '1rem', position: 'relative', overflow: 'hidden' }}>
      {/* Background decorative elements */}
      <div style={{ 
        position: 'absolute', 
        inset: '0', 
        background: 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.1) 0%, transparent 70%)' 
      }}></div>
      <div style={{ 
        position: 'absolute', 
        top: '10%', 
        left: '5%', 
        width: '20rem', 
        height: '20rem', 
        background: 'rgba(236, 72, 153, 0.08)', 
        borderRadius: '50%', 
        filter: 'blur(4rem)' 
      }}></div>
      <div style={{ 
        position: 'absolute', 
        bottom: '10%', 
        right: '5%', 
        width: '24rem', 
        height: '24rem', 
        background: 'rgba(147, 51, 234, 0.08)', 
        borderRadius: '50%', 
        filter: 'blur(4rem)' 
      }}></div>
      
      <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: '10' }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <SectionTitle 
            title="Simuladores Interativos"
          />
          <p
          style={{marginTop:'1rem'}}
          >Explore diferentes aspectos da matéria escura através de simulações científicas avançadas.</p>
          
          {/* Stats Bar */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem', 
            marginTop: '3rem',
            marginBottom: '2rem'
          }}>
            <div style={{ 
              textAlign: 'center', 
              padding: '2rem 1rem',
              background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(147, 51, 234, 0.1))',
              border: '1px solid rgba(236, 72, 153, 0.2)',
              borderRadius: '1rem',
              backdropFilter: 'blur(8px)'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ec4899', marginBottom: '0.5rem' }}>2</div>
              <div style={{ fontSize: '0.875rem', color: '#d1d5db' }}>Simuladores Únicos</div>
            </div>
            <div style={{ 
              textAlign: 'center', 
              padding: '2rem 1rem',
              background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))',
              border: '1px solid rgba(147, 51, 234, 0.2)',
              borderRadius: '1rem',
              backdropFilter: 'blur(8px)'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '0.5rem' }}>∞</div>
              <div style={{ fontSize: '0.875rem', color: '#d1d5db' }}>Possibilidades de Exploração</div>
            </div>
            <div style={{ 
              textAlign: 'center', 
              padding: '2rem 1rem',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(236, 72, 153, 0.1))',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              borderRadius: '1rem',
              backdropFilter: 'blur(8px)'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6', marginBottom: '0.5rem' }}>100%</div>
              <div style={{ fontSize: '0.875rem', color: '#d1d5db' }}>Baseado em Ciência Real</div>
            </div>
          </div>
        </div>
        
        {/* Simulators Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem', 
          marginBottom: '5rem' 
        }}>
          
          {/* Matter Concentration Simulator */}
          <SimulatorCard
            number="01"
            title="Concentração da Matéria"
            description="Visualize como a concentração de matéria escura e bariônica afeta a influência gravitacional em diferentes regiões do espaço."
            href="/simuladores/materia"
            icon={
              <svg style={{ width: '3rem', height: '3rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
          />
          
          {/* Orbital Mechanics Simulator */}
          <SimulatorCard
            number="02"
            title="Órbitas Planetárias"
            description="Analise como a presença de matéria escura influencia as órbitas dos planetas e a dinâmica dos sistemas estelares."
            href="/simuladores/orbitas"
            icon={
              <svg style={{ width: '3rem', height: '3rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
        </div>
        

                
        {/* Call to Action */}
        <div style={{ 
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(147, 51, 234, 0.1))',
          border: '1px solid rgba(236, 72, 153, 0.3)',
          borderRadius: '2rem',
          padding: '3rem 2rem',
          backdropFilter: 'blur(12px)'
        }}>
          <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
            Comece Sua Jornada Científica
          </h3>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#d1d5db', 
            marginBottom: '2rem', 
            maxWidth: '48rem', 
            margin: '0 auto 2rem auto',
            lineHeight: '1.6'
          }}>
            Escolha um simulador acima e mergulhe no fascinante mundo da matéria escura. Cada experimento oferece insights únicos sobre os mistérios do cosmos.
          </p>
          
          {/* Quick Links */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '1rem', 
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <a
              href="/simuladores/materia"
              style={{
                width: '100%',
                padding: '1rem 2rem',
                background: 'linear-gradient(to right, #ec4899, #a855f7)',
                color: 'white',
                fontWeight: '600',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                display: 'block',
                border: 'none'
              }}
              className="hover:scale-105 hover:shadow-lg"
            >
              🌌 Explorar Influência Gravitacional
            </a>
            <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
              <a
                href="/simuladores/particulas"
                style={{
                  flex: '1',
                  padding: '0.75rem 1.5rem',
                  border: '2px solid rgba(236, 72, 153, 0.5)',
                  color: '#ec4899',
                  fontWeight: '600',
                  borderRadius: '0.75rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  display: 'block',
                  fontSize: '0.9rem'
                }}
                className="hover:bg-pink-500/10 hover:border-pink-500"
              >
                ⚛️ Partículas
              </a>
              <a
                href="/simuladores/orbitas"
                style={{
                  flex: '1',
                  padding: '0.75rem 1.5rem',
                  border: '2px solid rgba(147, 51, 234, 0.5)',
                  color: '#a855f7',
                  fontWeight: '600',
                  borderRadius: '0.75rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  display: 'block',
                  fontSize: '0.9rem'
                }}
                className="hover:bg-purple-500/10 hover:border-purple-500"
              >
                🪐 Órbitas
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}