import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import { darkModeIsOnType } from '../types/myTypes';
import Challenges from '../sections/Challenges';
import AboutSection from '../components/smallRusable/AboutSection';

function Home({ darkModeIsOn }: darkModeIsOnType) {
  return (
    <main>
      <Hero darkModeIsOn={darkModeIsOn} />
      <AboutSection darkModeIsOn={darkModeIsOn} />
      <Projects darkModeIsOn={darkModeIsOn} />
      <Challenges darkModeIsOn={darkModeIsOn} />
      <Contact darkModeIsOn={darkModeIsOn} />
    </main>
  );
}

export default Home;