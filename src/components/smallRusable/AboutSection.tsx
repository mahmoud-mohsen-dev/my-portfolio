import Skills from '../../sections/Skills';
import About from '../../sections/About';
import { AboutProps } from '../../types/myTypes';
function AboutSection({ darkModeIsOn, cvUrl }: AboutProps) {
  return (
    <section id="about" data-section>
      <Skills darkModeIsOn={darkModeIsOn} />
      <About darkModeIsOn={darkModeIsOn} cvUrl={cvUrl} />
    </section>
  );
}

export default AboutSection;
