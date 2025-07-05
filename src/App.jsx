import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects_new';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import ProjectDetail from './components/ProjectDetail';
import PersonalJourney from './components/PersonalJourney';
import './styles/projects-ultra-modern.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Hero />
            <main>
              <About />
              <Skills />
              <Experience />
              <Education />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </>
        } />
        <Route path="/project/:id" element={
          <>
            <Header />
            <ProjectDetail />
            <Footer />
          </>
        } />
        <Route path="/personal-journey" element={
          <>
            <Header />
            <PersonalJourney />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
