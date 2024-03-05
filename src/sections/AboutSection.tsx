import Skills from './Skills';
import About from './About';
import { AboutProps } from '../types/myTypes';
function AboutSection({ darkModeIsOn, cvUrl }: AboutProps) {
  return (
    <section id="about" data-section>
      <About darkModeIsOn={darkModeIsOn} cvUrl={cvUrl} />
      <Skills darkModeIsOn={darkModeIsOn} />
    </section>
  );
}

export default AboutSection;
