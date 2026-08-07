import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import DomainPage from './pages/domain/DomainPage';
import LearningHub from './pages/LearningHub/LearningHub';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="domain/*" element={<DomainPage />} />
        <Route path="learning" element={<LearningHub />} />
        <Route path="learning-hub/*" element={<LearningHub />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;