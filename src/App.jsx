import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import ProjectDetail from './components/ProjectDetail';
import './styles/theme.css';
import './styles/site.css';

function App() {
  return (
    <Router basename="/personal">
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Hero />
            <main id="main">
              <Projects />
              <Experience />
              <Skills />
              <About />
              <Education />
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
      </Routes>
    </Router>
  );
}

export default App;
