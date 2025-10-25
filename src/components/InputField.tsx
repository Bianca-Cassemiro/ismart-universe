'use client';

interface InputFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  className?: string;
}

export default function InputField({ 
  label, 
  value, 
  onChange, 
  min = 0, 
  max = 100, 
  step = 1, 
  unit = '', 
  className = '' 
}: InputFieldProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <label className="block text-sm font-medium text-gray-300">
        {label} {unit && <span className="text-pink-400">({unit})</span>}
      </label>
      
      <div className="space-y-3">
        {/* Slider */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
          style={{
            background: `linear-gradient(to right, #ff69b4 0%, #9d4edd ${((value - min) / (max - min)) * 100}%, #374151 ${((value - min) / (max - min)) * 100}%, #374151 100%)`
          }}
        />
        
        {/* Number input */}
        <input
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full px-3 py-2 bg-gray-800/50 border border-pink-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500/60 focus:ring-1 focus:ring-pink-500/20 transition-colors duration-300"
        />
      </div>
      
      {/* Value display */}
      <div className="text-right">
        <span className="text-sm text-pink-400 font-medium">
          {value} {unit}
        </span>
      </div>
    </div>
  );
}