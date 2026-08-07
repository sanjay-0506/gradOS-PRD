import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import LearningHub from "./pages/LearningHub/LearningHub";
import CourseDetail from "./pages/LearningHub/components/CourseDetail";
import SprintRoadmap from "./pages/LearningHub/components/SprintRoadmap";
import SprintDetail from "./pages/LearningHub/components/SprintDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          {/* Default route - redirect to dashboard */}
          <Route index element={<Navigate to="/dashboard" replace />} />
          
          {/* Dashboard Route */}
          <Route path="dashboard" element={<Dashboard />} />
          
          {/* Learning Hub Routes */}
          <Route path="learning-hub" element={<LearningHub />} />
          <Route path="learning-hub/course/:courseId" element={<CourseDetail />} />
          <Route path="learning-hub/course/:courseId/sprint/:sprintId" element={<SprintDetail />} />
          <Route path="learning-hub/course/:courseId/roadmap" element={<SprintRoadmap />} />
          
          {/* Industry Readiness Route */}
          <Route path="industry-readiness" element={<div>Industry Readiness Page</div>} />
          
          {/* Settings Route */}
          <Route path="settings" element={<div>Settings Page</div>} />
          
          {/* Profile Route */}
          <Route path="profile" element={<div>Profile Page</div>} />
          
          {/* Analytics Route */}
          <Route path="analytics" element={<div>Analytics Page</div>} />
          
          {/* Communication Route */}
          <Route path="communication" element={<div>Communication Page</div>} />
          
          {/* Innovation Route */}
          <Route path="innovation" element={<div>Innovation Page</div>} />
          
          {/* Cognitive Route */}
          <Route path="cognitive" element={<div>Cognitive Page</div>} />
        </Route>
        
        {/* 404 Not Found */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;