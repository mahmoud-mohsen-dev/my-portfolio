import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import { HomeProps } from '../types/myTypes';
import Challenges from '../sections/Challenges';
import AboutSection from '../components/smallRusable/AboutSection';

function Home({ darkModeIsOn, cvUrl = '' }: HomeProps) {
  return (
    <main>
      <Hero darkModeIsOn={darkModeIsOn} cvUrl={cvUrl} />
      <AboutSection darkModeIsOn={darkModeIsOn} cvUrl={cvUrl} />
      <Projects darkModeIsOn={darkModeIsOn} />
      <Challenges darkModeIsOn={darkModeIsOn} />
      <Contact darkModeIsOn={darkModeIsOn} />
    </main>
  );
}

export default Home;
