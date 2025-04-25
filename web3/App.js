import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import MoodToggle from './components/MoodToggle';
import AIChatbot from './components/AIChatbot';
import EasterEgg from './components/EasterEgg';
import './styles/main.scss';

function App() {
  const [mode, setMode] = useState('serious');
  const [easterEgg, setEasterEgg] = useState(false);

  return (
    <Router>
      <div className={`app ${mode} ${easterEgg ? 'easter-egg' : ''}`}>
        <MoodToggle mode={mode} setMode={setMode} />
        <EasterEgg setActive={setEasterEgg} />
        
        <Routes>
          <Route path="/" element={<Home mode={mode} />} />
          <Route path="/projects" element={<Projects mode={mode} />} />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>

        <AIChatbot mode={mode} />
      </div>
    </Router>
  );
}

export default App;