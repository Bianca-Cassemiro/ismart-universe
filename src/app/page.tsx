import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import NumberedCard from '@/components/NumberedCard';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <Hero />
      
      {/* Explanations Section */}
      <section id="explicacoes" style={{ 
        position: 'relative', 
        paddingTop: '8rem', 
        paddingBottom: '8rem', 
        paddingLeft: '1rem', 
        paddingRight: '1rem', 
        overflow: 'hidden' 
      }}>
        {/* Background decorative elements */}
        <div style={{ 
          position: 'absolute', 
          inset: '0', 
          background: 'linear-gradient(to bottom, transparent, rgba(147, 51, 234, 0.05), transparent)' 
        }}></div>
        <div style={{ 
          position: 'absolute', 
          top: '5rem', 
          left: '2.5rem', 
          width: '16rem', 
          height: '16rem', 
          background: 'rgba(236, 72, 153, 0.1)', 
          borderRadius: '50%', 
          filter: 'blur(3rem)' 
        }}></div>
        <div style={{ 
          position: 'absolute', 
          bottom: '5rem', 
          right: '2.5rem', 
          width: '24rem', 
          height: '24rem', 
          background: 'rgba(147, 51, 234, 0.1)', 
          borderRadius: '50%', 
          filter: 'blur(3rem)' 
        }}></div>
        
        <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: '10' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <SectionTitle 
              title="Compreendendo a Matéria Escura"
            />
          </div>
          
          
          {/* Main content cards */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '3rem', 
            marginBottom: '6rem', 
            paddingLeft: '1.5rem', 
            paddingRight: '1.5rem' 
          }}>
            <NumberedCard
              number="01"
              title="O que é Matéria Escura?"
              description="A matéria escura representa aproximadamente 27% do universo, mas não emite, absorve ou reflete luz. Sua presença é detectada apenas através de seus efeitos gravitacionais sobre a matéria visível."
              className="transform hover:scale-105 transition-transform duration-300"
            />
            
            <NumberedCard
              number="02"
              title="Influência Gravitacional"
              description="Embora invisível, a matéria escura exerce uma força gravitacional significativa que afeta a formação de galáxias, o movimento das estrelas e a estrutura do universo em grande escala."
              className="transform hover:scale-105 transition-transform duration-300"
            />
            
            <NumberedCard
              number="03"
              title="Detecção e Estudo"
              description="Cientistas utilizam simulações computacionais, observações astronômicas e experimentos em laboratório para compreender as propriedades e comportamentos da matéria escura."
              className="transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Call to action section */}
          <div style={{
            textAlign: 'center',
            background: 'linear-gradient(to right, rgba(17, 24, 39, 0.8), rgba(31, 41, 55, 0.8))',
            border: '1px solid rgba(236, 72, 153, 0.3)',
            borderRadius: '1rem',
            padding: '4rem 2rem',
            backdropFilter: 'blur(8px)',
            marginLeft: '1.5rem',
            marginRight: '1.5rem'
          }}>
            <h3 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>
              Pronto para Explorar?
            </h3>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#d1d5db', 
              marginBottom: '2.5rem', 
              maxWidth: '42rem', 
              margin: '0 auto 2.5rem auto',
              lineHeight: '1.6'
            }}>
              Agora que você conhece os fundamentos, experimente nossos simuladores interativos para visualizar como a matéria escura influencia o cosmos.
            </p>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.5rem', 
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <a
                href="/simuladores/materia"
                style={{
                  padding: '1.25rem 2.5rem',
                  background: 'linear-gradient(to right, #ec4899, #a855f7)',
                  color: 'white',
                  fontWeight: '600',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 25px rgba(236, 72, 153, 0.25)',
                  display: 'inline-block'
                }}
                className="hover:scale-105 hover:shadow-pink-500/40"
              >
                Simular Influência Gravitacional
              </a>
              <a
                href="/simuladores/particulas"
                style={{
                  padding: '1.25rem 2.5rem',
                  border: '2px solid rgba(236, 72, 153, 0.5)',
                  color: '#ec4899',
                  fontWeight: '600',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  display: 'inline-block'
                }}
                className="hover:bg-pink-500/10 hover:border-pink-500"
              >
                Explorar Concentração
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
