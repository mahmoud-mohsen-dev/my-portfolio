import HeadingSection from '../components/smallRusable/HeadingSection';
import aboutMeImg from '../assets/app-images/about-me.svg';
import javascriptImg from '../assets/app-images/javascript.svg';
import cssImg from '../assets/app-images/css.svg';
import htmlImg from '../assets/app-images/html.svg';
import reactImg from '../assets/app-images/react.svg';
import typescriptImg from '../assets/app-images/typesctipt.svg';
import tailwindcss from '../assets/app-images/tailwind.svg';
import bootstrapImg from '../assets/app-images/bootstrap.svg';
import gitImg from '../assets/app-images/git.svg';
import figmaImg from '../assets/app-images/figma.svg';
import githubIMg from '../assets/app-images/github-skills-section.svg';
import Skill from '../components/smallRusable/Skill';

function Skills({ darkModeIsOn }: { darkModeIsOn: boolean }) {
  const skillsStyles = darkModeIsOn ? 'bg-black' : 'bg-gray-dark';
  return (
    <section className={`text-white ${skillsStyles}`}>
      <div className="container py-8 sm-des:grid sm-des:grid-cols-12 sm-des:gap-x-5">
        <div className="sm-des:col-span-8">
          <HeadingSection sectionName="skills" className="text-white" />
          <div className="mt-10 grid grid-cols-fit-150 gap-x-2 gap-y-5">
            <Skill src={javascriptImg} alt="javascript icon" tool="JavaScript" />
            <Skill src={cssImg} alt="CSS icon" tool="CSS" />
            <Skill src={typescriptImg} alt="TypeScript icon" tool="TypeScript" />
            <Skill src={gitImg} alt="GIT icon" tool="GIT" />
            <Skill src={githubIMg} alt="GitHub icon" tool="GitHub" />
            <Skill src={tailwindcss} alt="TailwindCSS icon" tool="TailwindCSS" />
            <Skill src={htmlImg} alt="HTML icon" tool="HTML" />
            <Skill src={bootstrapImg} alt="Bootstrap icon" tool="Bootstrap" />
            <Skill src={reactImg} alt="React icon" tool="React" />
            <Skill src={figmaImg} alt="Figma icon" tool="Figma" />
          </div>
        </div>

        <img
          src={aboutMeImg}
          alt="about-me"
          className="mx-auto mt-10 self-center sm-des:col-span-4 sm-des:col-start-9"
        />
      </div>
    </section>
  );
}

export default Skills;
