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
  FileCheck,
  LogOut
} from 'lucide-react';
import { phases } from '../data/phases';
import { useAuth } from '../contexts/AuthContext';

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
  const { logout, user } = useAuth();
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
          className="fixed inset-0 bg-black/50 lg:hidden z-40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}
      
      <aside className={`
        fixed top-0 left-0 h-screen bg-white border-r border-gray-100 z-50
        w-[280px] transform transition-transform duration-300 ease-in-out overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        <div className="sticky top-0 z-10 bg-white border-b border-gray-100">
          <div className="px-5 h-16 flex items-center justify-between">
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
          
          {/* User Info - Mobile Only */}
          <div className="lg:hidden px-5 py-3 border-t border-gray-100 bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="text-sm font-medium text-indigo-600">
                  {user?.name?.[0] || user?.email?.[0] || 'U'}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {user?.name || 'User'}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {user?.email}
                </p>
              </div>
            </div>
          </div>
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
              <li>
                <button
                  onClick={logout}
                  className="w-full flex items-center gap-3 px-5 py-2 text-sm font-normal text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut size={18} />
                  Sign out
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );
}