import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Menu } from 'lucide-react';
import Dashboard from './pages/Dashboard';
import PhasePage from './pages/PhasePage';
import TestPlanPage from './pages/TestPlanPage';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
      >
        <Menu size={24} />
      </button>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <main className="lg:ml-64 min-h-screen">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/phase/:phaseId" element={<PhasePage />} />
          <Route path="/phase/testing/test-plan" element={<TestPlanPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;