'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface PlanetProps {
  position: [number, number, number];
  color: string;
  size: number;
  orbitRadius: number;
  orbitSpeed: number;
}

function Planet({ position, color, size, orbitRadius, orbitSpeed }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * orbitSpeed;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} position={[orbitRadius, 0, 0]}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
      </mesh>
      {/* Orbit ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[orbitRadius - 0.05, orbitRadius + 0.05, 64]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

function DarkMatterField({ density }: { density: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  useEffect(() => {
    if (pointsRef.current) {
      const particleCount = Math.floor(density * 100);
      const positions = new Float32Array(particleCount * 3);
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const radius = Math.random() * 30 + 10;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        
        positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i3 + 2] = radius * Math.cos(phi);
      }
      
      pointsRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    }
  }, [density]);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry />
      <pointsMaterial 
        color="#ff69b4" 
        size={0.1} 
        transparent 
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  );
}

interface OrbitSceneProps {
  planetMass: number;
  starMass: number;
  darkMatterHalo: number;
  orbitRadius: number;
  orbitSpeed: number;
  className?: string;
}

export default function OrbitScene({ 
  planetMass, 
  starMass, 
  darkMatterHalo, 
  orbitRadius, 
  orbitSpeed,
  className = '' 
}: OrbitSceneProps) {
  return (
    <div className={`bg-gray-900/50 border border-pink-500/20 rounded-xl overflow-hidden backdrop-blur-sm ${className}`}>
      <div className="h-96 w-full">
        <Canvas camera={{ position: [20, 20, 20], fov: 60 }}>
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <pointLight position={[0, 0, 0]} intensity={2} color="#ffffff" />
          
          {/* Star (Sun) */}
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[starMass, 32, 32]} />
            <meshStandardMaterial 
              color="#ffdd44" 
              emissive="#ffaa00" 
              emissiveIntensity={0.5} 
            />
          </mesh>
          
          {/* Planet */}
          <Planet
            position={[orbitRadius, 0, 0]}
            color="#4a90e2"
            size={planetMass * 0.5}
            orbitRadius={orbitRadius}
            orbitSpeed={orbitSpeed}
          />
          
          {/* Dark Matter Field */}
          <DarkMatterField density={darkMatterHalo} />
          
          {/* Controls */}
          <OrbitControls 
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={5}
            maxDistance={50}
          />
        </Canvas>
      </div>
      
      {/* Info panel */}
      <div className="p-4 bg-gray-800/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <span className="text-gray-400">Massa Estelar:</span>
            <span className="text-white ml-2 font-medium">{starMass.toFixed(1)}M☉</span>
          </div>
          <div>
            <span className="text-gray-400">Massa Planetária:</span>
            <span className="text-white ml-2 font-medium">{planetMass.toFixed(1)}M⊕</span>
          </div>
          <div>
            <span className="text-gray-400">Halo de Matéria Escura:</span>
            <span className="text-pink-400 ml-2 font-medium">{darkMatterHalo}%</span>
          </div>
          <div>
            <span className="text-gray-400">Velocidade Orbital:</span>
            <span className="text-purple-400 ml-2 font-medium">{orbitSpeed.toFixed(1)}x</span>
          </div>
        </div>
      </div>
    </div>
  );
}