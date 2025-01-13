import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div
      className={`rounded-xl shadow-md overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}