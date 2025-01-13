import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { phases } from '../data/phases';
import { DetailedView } from '../components/DetailedView';
import { ArrowLeft, Maximize2, FileCheck } from 'lucide-react';

export default function PhasePage() {
  const { phaseId } = useParams();
  const navigate = useNavigate();
  const phase = phases.find(p => p.id === phaseId);

  if (!phase) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-red-600">Phase not found</h1>
        <button
          onClick={() => navigate('/')}
          className="mt-4 flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={20} />
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 lg:p-8">
      <div className="flex items-center justify-between mb-8 mt-14 lg:mt-0">
        <div>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft size={20} />
            Back to Dashboard
          </button>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            {phase.title}
          </h1>
        </div>
        {phase.id === 'testing' && (
          <button
            onClick={() => navigate('/phase/testing/test-plan')}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            <FileCheck size={18} />
            View Test Plan
          </button>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-sm min-h-[calc(100vh-12rem)]">
        <DetailedView phase={phase} />
      </div>
    </div>
  );
}