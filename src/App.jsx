import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Hero from './components/layout/Hero';
import Dashboard from './features/dashboard/Dashboard';
import Templates from './features/templates/Templates';
import ComponentsPage from './features/components/ComponentsPage';
import Settings from './features/settings/Settings';
import Pricing from './features/pricing/Pricing';
import BrowseCategory from './features/browse/BrowseCategory';
import Documentation from './features/resources/Documentation';
import Blog from './features/resources/Blog';
import Support from './features/resources/Support';
import Community from './features/resources/Community';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hero />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="templates" element={<Templates />} />
            <Route path="components" element={<ComponentsPage />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="settings" element={<Settings />} />
            <Route path="browse/:categoryId" element={<BrowseCategory />} />
            <Route path="resources/documentation" element={<Documentation />} />
            <Route path="resources/blog" element={<Blog />} />
            <Route path="resources/support" element={<Support />} />
            <Route path="resources/community" element={<Community />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
