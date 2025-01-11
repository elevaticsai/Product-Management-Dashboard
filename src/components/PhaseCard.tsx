import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from './ui/Card';
import { Progress } from './ui/Progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/Dialog';
import { DetailedView } from './DetailedView';
import { Phase } from '../types';
import { Maximize2 } from 'lucide-react';

interface PhaseCardProps {
  phase: Phase;
}

export function PhaseCard({ phase }: PhaseCardProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Card
        onClick={() => setIsOpen(true)}
        className="p-6 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
        style={{
          background: `linear-gradient(135deg, ${phase.gradientFrom} 0%, ${phase.gradientTo} 100%)`,
        }}
      >
        <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>
        <div className="space-y-4">
          {phase.metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="flex items-center justify-between text-white">
                <span className="flex items-center gap-2">
                  <Icon size={20} />
                  {metric.label}
                </span>
                <span className="font-semibold">{metric.value}</span>
              </div>
            );
          })}
          <div className="mt-4">
            <div className="flex justify-between text-white text-sm mb-1">
              <span>Progress</span>
              <span>{phase.progress}%</span>
            </div>
            <Progress value={phase.progress} className="h-2" />
          </div>
        </div>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <div className="flex justify-between items-center">
              <DialogTitle>{phase.title}</DialogTitle>
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate(`/phase/${phase.id}`);
                }}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                <Maximize2 size={16} />
                <span>Full View</span>
              </button>
            </div>
          </DialogHeader>
          <DetailedView phase={phase} />
        </DialogContent>
      </Dialog>
    </>
  );
}