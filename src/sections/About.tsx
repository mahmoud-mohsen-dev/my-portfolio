import HeadingSection from '../components/HeadingSection';
import aboutMeImg from '../assets/about-me.svg';
import javascriptImg from '../assets/javascript.svg';
import cssImg from '../assets/css.svg';
import htmlImg from '../assets/html.svg';
import reactImg from '../assets/react.svg';
import typescriptImg from '../assets/typesctipt.svg';
import tailwindcss from '../assets/tailwind.svg';
import bootstrapImg from '../assets/bootstrap.svg';
import gitImg from '../assets/git.svg';
import figmaImg from '../assets/figma.svg';
import githubIMg from '../assets/github.svg';
import Skill from '../components/Skill';

function About() {
  return (
    <section className=" bg-black text-white min-h-screen">
      <div className="container py-10">
        <div className="grid gap-16 justify-center items-center">
          <HeadingSection sectionName="skills" />
          <img src={aboutMeImg} alt="about-me" className=" px-5" />
          <div className="grid grid-cols-fit-200 max-w-1/4">
            <Skill src={javascriptImg} alt="javascript icon" tool="JavaScript" />
            <Skill src={cssImg} alt="CSS icon" tool="CSS" />
            <Skill src={typescriptImg} alt="TypeScript icon" tool="TypeScript" />
            <Skill src={gitImg} alt="GIT icon" tool="GIT" />
            <Skill src={githubIMg} alt="GitHub icon" tool="GitHub" />
            <Skill src={tailwindcss} alt="TailwindCSS icon" tool="TailwindCSS" />
            <Skill src={reactImg} alt="React icon" tool="React" />
            <Skill src={bootstrapImg} alt="Bootstrap icon" tool="Bootstrap" />
            <Skill src={htmlImg} alt="HTML icon" tool="HTML" />
            <Skill src={figmaImg} alt="Figma icon" tool="Figma" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
