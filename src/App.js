import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import './styles.css'; 
import { useSpring, animated } from 'react-spring';
import Home from './components/Home';


function App() {
  const fadeAnimation = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div className="App" style={fadeAnimation}>
      <div className="App">
       <Header />
        <main>
          <Home/>
          <About />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        
     </div>
    </animated.div>
  );
}

export default App;
