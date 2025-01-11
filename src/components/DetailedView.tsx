import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from 'recharts';
import { Phase } from '../types';
import { Edit2, Plus, Save, X, Users, Link, CheckSquare } from 'lucide-react';

interface DetailedViewProps {
  phase: Phase;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export function DetailedView({ phase }: DetailedViewProps) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [selectedComponent, setSelectedComponent] = React.useState<string | null>(null);

  const addComponent = (type: string) => {
    setSelectedComponent(type);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Edit Mode Controls */}
      <div className="flex flex-wrap justify-between items-center gap-4 p-4 border-b border-gray-200">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors"
        >
          {isEditing ? (
            <>
              <Save size={20} />
              <span className="hidden sm:inline">Save Changes</span>
            </>
          ) : (
            <>
              <Edit2 size={20} />
              <span className="hidden sm:inline">Edit View</span>
            </>
          )}
        </button>

        {isEditing && (
          <button
            onClick={() => addComponent('chart')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50"
          >
            <Plus size={20} />
            <span className="hidden sm:inline">Add Component</span>
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Charts Section */}
          <div className="space-y-6">
            {phase.charts.pie && (
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold">{phase.charts.pie.title}</h4>
                  {isEditing && (
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <X size={16} />
                      </button>
                    </div>
                  )}
                </div>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={phase.charts.pie.data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label
                      >
                        {phase.charts.pie.data.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {phase.charts.bar && (
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold">{phase.charts.bar.title}</h4>
                  {isEditing && (
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <X size={16} />
                      </button>
                    </div>
                  )}
                </div>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={phase.charts.bar.data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </div>

          {/* Lists Section */}
          <div className="space-y-6">
            {phase.lists.map((list, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold">{list.title}</h4>
                  {isEditing && (
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <X size={16} />
                      </button>
                    </div>
                  )}
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  {list.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b last:border-b-0 gap-2"
                    >
                      <span className="font-medium sm:font-normal">{item.label}</span>
                      <span className="text-gray-600 sm:font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Component Selection Modal */}
      {selectedComponent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Add Component</h3>
              <button onClick={() => setSelectedComponent(null)}>
                <X size={20} />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: BarChart, label: 'Chart' },
                { icon: Users, label: 'Team' },
                { icon: Link, label: 'Links' },
                { icon: CheckSquare, label: 'Checklist' },
              ].map((item, index) => (
                <button
                  key={index}
                  className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                  onClick={() => {
                    setSelectedComponent(null);
                  }}
                >
                  <item.icon size={24} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}