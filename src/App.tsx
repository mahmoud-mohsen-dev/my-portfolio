import { useState } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Footer from './sections/Footer';
import Contact from './sections/Contact';
function App() {
  const [darkModeIsOn, setDarkModeIsOn] = useState(false);

  return (
    <>
      <Navbar darkModeIsOn={darkModeIsOn} setDarkModeIsOn={setDarkModeIsOn} />
      <main>
        <Hero darkModeIsOn={darkModeIsOn} />
        <div id="about" data-section>
          <Skills darkModeIsOn={darkModeIsOn} />
          <About darkModeIsOn={darkModeIsOn} />
        </div>
        <Projects darkModeIsOn={darkModeIsOn} />
        <Contact darkModeIsOn={darkModeIsOn} />
      </main>
      <Footer />
    </>
  );
}

export default App;
