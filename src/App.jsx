import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';

import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </Router>
);

export default App;