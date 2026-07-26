import { Routes, Route } from 'react-router-dom';
import Cursor from './components/Cursor.jsx';
import NoiseOverlay from './components/NoiseOverlay.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';

export default function App() {
  return (
    <>
      <NoiseOverlay />
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}
