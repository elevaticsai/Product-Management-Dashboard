import React from 'react';

interface ProgressProps {
  value: number;
  className?: string;
}

export function Progress({ value, className = '' }: ProgressProps) {
  return (
    <div className={`bg-white/20 rounded-full overflow-hidden ${className}`}>
      <div
        className="bg-white h-full transition-all duration-300 ease-in-out"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}