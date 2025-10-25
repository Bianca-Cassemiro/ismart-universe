import { z } from 'zod';

// Validation schemas for simulator inputs
export const matterConcentrationSchema = z.object({
  darkMatterDensity: z.number().min(0).max(100),
  baryonicMatterDensity: z.number().min(0).max(100),
  gravitationalInfluence: z.number().min(0).max(10),
  radius: z.number().min(1).max(1000),
});

export const particleSchema = z.object({
  darkMatterParticles: z.number().min(0).max(10000),
  baryonicParticles: z.number().min(0).max(10000),
  temperature: z.number().min(0).max(10000),
  pressure: z.number().min(0).max(100),
  timeScale: z.number().min(1).max(1000),
});

export const orbitSchema = z.object({
  planetMass: z.number().min(0.1).max(10),
  starMass: z.number().min(0.5).max(50),
  darkMatterHalo: z.number().min(0).max(100),
  orbitRadius: z.number().min(0.1).max(100),
  orbitSpeed: z.number().min(0.1).max(10),
});

export const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

// Type exports
export type MatterConcentration = z.infer<typeof matterConcentrationSchema>;
export type Particle = z.infer<typeof particleSchema>;
export type Orbit = z.infer<typeof orbitSchema>;
export type Contact = z.infer<typeof contactSchema>;