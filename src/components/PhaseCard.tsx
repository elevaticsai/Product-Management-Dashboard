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
        className="p-4 sm:p-6 cursor-pointer transform transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
        style={{
          background: `linear-gradient(135deg, ${phase.gradientFrom} 0%, ${phase.gradientTo} 100%)`,
        }}
      >
        <h3 className="text-lg sm:text-xl font-bold text-white mb-4">{phase.title}</h3>
        <div className="space-y-3 sm:space-y-4">
          {phase.metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="flex items-center justify-between text-white">
                <span className="flex items-center gap-2 text-sm sm:text-base">
                  <Icon size={18} />
                  {metric.label}
                </span>
                <span className="font-semibold text-sm sm:text-base">{metric.value}</span>
              </div>
            );
          })}
          <div className="mt-4">
            <div className="flex justify-between text-white text-xs sm:text-sm mb-1">
              <span>Progress</span>
              <span>{phase.progress}%</span>
            </div>
            <Progress value={phase.progress} className="h-1.5 sm:h-2" />
          </div>
        </div>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-[95vw] max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex justify-between items-center">
              <DialogTitle>{phase.title}</DialogTitle>
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate(`/phase/${phase.id}`);
                }}
                className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                <Maximize2 size={16} />
                <span className="hidden sm:inline">Full View</span>
              </button>
            </div>
          </DialogHeader>
          <DetailedView phase={phase} />
        </DialogContent>
      </Dialog>
    </>
  );
}