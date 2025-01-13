import React from 'react';
<<<<<<< HEAD
import { Routes, Route, Navigate } from 'react-router-dom';
=======
import { Routes, Route } from 'react-router-dom';
>>>>>>> b1e49d5132c35ed1e946b281ac9a71f1b47d83f8
import { Sidebar } from './components/Sidebar';
import { Menu } from 'lucide-react';
import Dashboard from './pages/Dashboard';
import PhasePage from './pages/PhasePage';
import TestPlanPage from './pages/TestPlanPage';
<<<<<<< HEAD
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to="/login" />;
}

function PublicRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return !user ? <>{children}</> : <Navigate to="/" />;
}

function AppContent() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const { user } = useAuth();

  if (!user) {
    return (
      <Routes>
        <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
        <Route path="/signup" element={<PublicRoute><SignupPage /></PublicRoute>} />
        <Route path="/forgot-password" element={<PublicRoute><ForgotPasswordPage /></PublicRoute>} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }
=======

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
>>>>>>> b1e49d5132c35ed1e946b281ac9a71f1b47d83f8

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
<<<<<<< HEAD
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/phase/:phaseId" element={<PrivateRoute><PhasePage /></PrivateRoute>} />
          <Route path="/phase/testing/test-plan" element={<PrivateRoute><TestPlanPage /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/" />} />
=======
          <Route path="/" element={<Dashboard />} />
          <Route path="/phase/:phaseId" element={<PhasePage />} />
          <Route path="/phase/testing/test-plan" element={<TestPlanPage />} />
>>>>>>> b1e49d5132c35ed1e946b281ac9a71f1b47d83f8
        </Routes>
      </main>
    </div>
  );
}

<<<<<<< HEAD
function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

=======
>>>>>>> b1e49d5132c35ed1e946b281ac9a71f1b47d83f8
export default App;