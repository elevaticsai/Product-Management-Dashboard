import React from 'react';
import { PhaseCard } from '../components/PhaseCard';
import { Filters } from '../components/Filters';
import { phases } from '../data/phases';

export default function Dashboard() {
  return (
    <div className="p-4 lg:p-8">
      <header className="mb-8 mt-14 lg:mt-0">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Product Management Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Track and manage your product lifecycle phases
        </p>
      </header>

      <Filters />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {phases.map((phase) => (
          <PhaseCard key={phase.id} phase={phase} />
        ))}
      </div>
    </div>
  );
}