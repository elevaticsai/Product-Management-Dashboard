import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Settings,
  Bell,
  X,
  FolderKanban,
  Lightbulb,
  Search,
  Calendar,
  Code,
  TestTube,
  Rocket,
  Settings2,
  FileCheck
} from 'lucide-react';
import { phases } from '../data/phases';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const phaseIcons: Record<string, any> = {
  ideation: Lightbulb,
  research: Search,
  planning: Calendar,
  development: Code,
  testing: TestTube,
  launch: Rocket,
  maintenance: Settings2,
};

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedPhase, setExpandedPhase] = React.useState<string | null>(null);

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  const togglePhase = (phaseId: string) => {
    setExpandedPhase(expandedPhase === phaseId ? null : phaseId);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-40"
          onClick={onClose}
        />
      )}
      
      <div className={`
        fixed top-0 left-0 h-screen bg-white border-r border-gray-100 z-50
        w-64 transform transition-transform duration-200 ease-in-out overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        <div className="px-5 h-16 flex items-center justify-between border-b border-gray-100">
          <h2 
            className="text-lg font-normal text-gray-800 flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavigation('/')}
          >
            <FolderKanban className="text-indigo-600" size={20} />
            ProductFlow
          </h2>
          <button onClick={onClose} className="lg:hidden text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>
        
        <nav className="py-4">
          <div className="mb-6">
            <div className="px-5 mb-2 text-xs font-normal text-gray-400 uppercase tracking-wider">
              Main
            </div>
            <ul>
              <li>
                <button
                  onClick={() => handleNavigation('/')}
                  className={`w-full flex items-center gap-3 px-5 py-2 text-sm font-normal transition-colors
                    ${location.pathname === '/'
                      ? 'bg-indigo-50/50 text-indigo-600'
                      : 'text-gray-600 hover:bg-gray-50'
                    }`}
                >
                  <LayoutDashboard size={18} />
                  Dashboard
                </button>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="px-5 mb-2 text-xs font-normal text-gray-400 uppercase tracking-wider">
              Phases
            </div>
            <ul>
              {phases.map((phase) => {
                const Icon = phaseIcons[phase.id] || LayoutDashboard;
                const isActive = location.pathname.startsWith(`/phase/${phase.id}`);
                const hasSubmenu = phase.id === 'testing';
                
                return (
                  <li key={phase.id}>
                    <div>
                      <button
                        onClick={() => {
                          if (hasSubmenu) {
                            togglePhase(phase.id);
                          }
                          handleNavigation(`/phase/${phase.id}`);
                        }}
                        className={`w-full flex items-center gap-3 px-5 py-2 text-sm font-normal transition-colors
                          ${isActive
                            ? 'bg-indigo-50/50 text-indigo-600'
                            : 'text-gray-600 hover:bg-gray-50'
                          }`}
                      >
                        <Icon size={18} />
                        {phase.title}
                      </button>
                      
                      {/* Submenu for Testing & QA */}
                      {hasSubmenu && (
                        <div className="ml-7 border-l border-gray-200">
                          <button
                            onClick={() => handleNavigation('/phase/testing/test-plan')}
                            className={`w-full flex items-center gap-3 px-5 py-2 text-sm font-normal transition-colors
                              ${location.pathname === '/phase/testing/test-plan'
                                ? 'text-indigo-600'
                                : 'text-gray-600 hover:text-gray-900'
                              }`}
                          >
                            <FileCheck size={16} />
                            Test Plan
                          </button>
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <div className="px-5 mb-2 text-xs font-normal text-gray-400 uppercase tracking-wider">
              Settings
            </div>
            <ul>
              {[
                { icon: Users, label: 'Team' },
                { icon: Bell, label: 'Notifications' },
                { icon: Settings, label: 'Settings' },
              ].map((item, index) => (
                <li key={index}>
                  <button
                    className="w-full flex items-center gap-3 px-5 py-2 text-sm font-normal text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    <item.icon size={18} />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}