import Skills from '../../sections/Skills';
import About from '../../sections/About';
import { darkModeIsOnType } from '../../types/myTypes';
function AboutSection({ darkModeIsOn }: darkModeIsOnType) {
  return (
    <section id="about" data-section>
      <Skills darkModeIsOn={darkModeIsOn} />
      <About darkModeIsOn={darkModeIsOn} />
    </section>
  );
}

export default AboutSection;
