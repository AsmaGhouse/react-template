import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Hero from './components/layout/Hero';
import Dashboard from './features/dashboard/Dashboard';
import Templates from './features/templates/Templates';
import ComponentsPage from './features/components/ComponentsPage';
import Settings from './features/settings/Settings';
import Pricing from './features/pricing/Pricing';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="templates" element={<Templates />} />
          <Route path="components" element={<ComponentsPage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
