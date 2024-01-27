import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import { darkModeIsOnType } from '../types/myTypes';
import Challenges from '../sections/Challenges';

function Home({ darkModeIsOn }: darkModeIsOnType) {
  return (
    <main>
      <Hero darkModeIsOn={darkModeIsOn} />
      <Projects darkModeIsOn={darkModeIsOn} />
      <Challenges darkModeIsOn={darkModeIsOn} />
      <Contact darkModeIsOn={darkModeIsOn} />
    </main>
  );
}

export default Home;
