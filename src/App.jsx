import { Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard/Dashboard";
import DomainPage from "./pages/domain/DomainPage";

function App() {
  return (
    <Routes>

      <Route element={<DashboardLayout />}>

        <Route
          index
          element={<Dashboard />}
        />

        <Route
          path="/domain"
          element={<DomainPage />}
        />

      </Route>

    </Routes>
  );
}

export default App;