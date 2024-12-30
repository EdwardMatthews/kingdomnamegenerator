'use client';

import { useState } from 'react';
import { generateMultipleNames } from '@/lib/nameGenerator';

interface NameListProps {
  names: string[];
}

export default function NameList({ names: initialNames }: NameListProps) {
  const [names, setNames] = useState(initialNames);

  const handleGenerate = () => {
    const newNames = generateMultipleNames(10);
    setNames(newNames);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
        {names.map((name, index) => (
          <div
            key={`${name}-${index}`}
            className="card hover:shadow-lg transition-shadow duration-200 animate-slide-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <h3 className="text-xl font-semibold text-royal-800">{name}</h3>
          </div>
        ))}
      </div>
      <button
        onClick={handleGenerate}
        className="btn-royal mt-8 animate-fade-in"
      >
        Generate Kingdom Names
      </button>
    </div>
  );
}
