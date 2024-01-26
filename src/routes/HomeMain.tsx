import Hero from '../sections/Hero';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Contact from '../sections/Contact';
import { darkModeIsOnType } from '../types/myTypes';

function Home({ darkModeIsOn }: darkModeIsOnType) {
  return (
    <main>
      <Hero darkModeIsOn={darkModeIsOn} />
      <div id="about" data-section>
        <Skills darkModeIsOn={darkModeIsOn} />
        <About darkModeIsOn={darkModeIsOn} />
      </div>
      <Projects darkModeIsOn={darkModeIsOn} />
      <Contact darkModeIsOn={darkModeIsOn} />
    </main>
  );
}

export default Home;
