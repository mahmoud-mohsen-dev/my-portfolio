import HeadingSection from '../components/smallRusable/HeadingSection';
import blobShape from '../assets/app-images/blob-shape-skill-and-about-section.svg';
import javascriptImg from '../assets/app-images/javascript.svg';
import cssImg from '../assets/app-images/css.svg';
import htmlImg from '../assets/app-images/html.svg';
import reactImg from '../assets/app-images/react.svg';
import typescriptImg from '../assets/app-images/typesctipt.svg';
import tailwindcss from '../assets/app-images/tailwind.svg';
import bootstrapImg from '../assets/app-images/bootstrap.svg';
import gitImg from '../assets/app-images/git.svg';
import figmaImg from '../assets/app-images/figma.svg';
import githubIMg from '../assets/app-images/github-red.svg';
import Skill from '../components/smallRusable/Skill';
import githubIcon from '../assets/app-images/github-white.svg';
import linkedinIcon from '../assets/app-images/linkedin.svg';
import mailIcon from '../assets/app-images/mail.svg';
import SocialIcon from '../components/smallRusable/SocialIcon';

function Skills({ darkModeIsOn }: { darkModeIsOn: boolean }) {
  const skillsStyles = darkModeIsOn ? 'bg-black' : 'bg-gray-dark';
  return (
    <section className={`text-white relative overflow-hidden ${skillsStyles}`}>
      <div className="container pb-52 sm-des:pb-14 pt-10 sm-des:grid sm-des:grid-cols-12 sm-des:gap-x-5">
        <div className="sm-des:col-span-8 relative z-10">
          <HeadingSection sectionName="skills" className="text-white" />
          <div className="mt-10 grid grid-cols-fit-150 gap-y-5">
            <Skill src={javascriptImg} alt="javascript icon" tool="JavaScript" />
            <Skill src={cssImg} alt="CSS icon" tool="CSS" />
            <Skill src={typescriptImg} alt="TypeScript icon" tool="TypeScript" />
            <Skill src={gitImg} alt="GIT icon" tool="GIT" />
            <Skill src={githubIMg} alt="GitHub icon" tool="GitHub" imgClassName="fill-red-dark" />
            <Skill src={tailwindcss} alt="TailwindCSS icon" tool="TailwindCSS" />
            <Skill src={htmlImg} alt="HTML icon" tool="HTML" />
            <Skill src={bootstrapImg} alt="Bootstrap icon" tool="Bootstrap" />
            <Skill src={reactImg} alt="React icon" tool="React" />
            <Skill src={figmaImg} alt="Figma icon" tool="Figma" />
          </div>
        </div>

        {/* Social Icons */}
        <div className=" relative  z-10 mx-auto translate-y-44 sm-des:translate-y-0 mt-20 flex justify-between rounded-3xl bg-[rgba(14,36,49,0.3)] p-5 md-mob:w-80 sm-des:col-start-10 sm-des:col-span-4 sm-des:mt-0 sm-des:h-fit sm-des:self-end sm-des:justify-self-start ">
          <SocialIcon href="mailto:mahmoud.mohsen.developer@gmail.com" src={mailIcon} alt="mail icon" />
          <SocialIcon href="https://github.com/mahmoud-mohsen-dev" src={githubIcon} alt="github icon" />
          <SocialIcon href="https://www.linkedin.com/in/mahmoud-mohsen-dev/" src={linkedinIcon} alt="linkedin icon" />
        </div>

        {/* BlobShape}*/}
        <img
          src={blobShape}
          alt="blob shape"
          className="absolute z-0 bottom-0 right-0 w-[120%] max-w-[1500px] translate-x-[7%] md-mob:translate-y-[10%] sm-tab:w-full sm-tab:translate-y-[18%] md-tab:translate-x-0 md-tab:translate-y-[35%] lg-tab:translate-y-[40%] sm-des:translate-y-[55%] md-des:max-w-[38%] md-des:translate-y-[15%] lg-des:max-w-[34%] lg-des:translate-y-[10%]"
        />
      </div>
    </section>
  );
}

export default Skills;
