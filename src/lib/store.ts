import { create } from 'zustand';
import { MatterConcentration, Particle, Orbit } from './validations';

interface SimulatorState {
  // Matter concentration simulator state
  matterData: MatterConcentration;
  setMatterData: (data: Partial<MatterConcentration>) => void;
  
  // Particle simulator state
  particleData: Particle;
  setParticleData: (data: Partial<Particle>) => void;
  
  // Orbit simulator state
  orbitData: Orbit;
  setOrbitData: (data: Partial<Orbit>) => void;
  
  // UI state
  activeSimulator: 'matter' | 'particles' | 'orbits' | null;
  setActiveSimulator: (simulator: 'matter' | 'particles' | 'orbits' | null) => void;
  
  // Animation states
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  
  // Loading states
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export const useSimulatorStore = create<SimulatorState>((set) => ({
  // Initial matter data
  matterData: {
    darkMatterDensity: 25,
    baryonicMatterDensity: 5,
    gravitationalInfluence: 5,
    radius: 100,
  },
  setMatterData: (data) =>
    set((state) => ({
      matterData: { ...state.matterData, ...data },
    })),
  
  // Initial particle data
  particleData: {
    darkMatterParticles: 1000,
    baryonicParticles: 200,
    temperature: 2000,
    pressure: 50,
    timeScale: 100,
  },
  setParticleData: (data) =>
    set((state) => ({
      particleData: { ...state.particleData, ...data },
    })),
  
  // Initial orbit data
  orbitData: {
    planetMass: 1,
    starMass: 1,
    darkMatterHalo: 30,
    orbitRadius: 10,
    orbitSpeed: 1,
  },
  setOrbitData: (data) =>
    set((state) => ({
      orbitData: { ...state.orbitData, ...data },
    })),
  
  // UI state
  activeSimulator: null,
  setActiveSimulator: (simulator) => set({ activeSimulator: simulator }),
  
  // Animation state
  isPlaying: false,
  setIsPlaying: (playing) => set({ isPlaying: playing }),
  
  // Loading state
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
}));