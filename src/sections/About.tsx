import HeadingSection from '../components/HeadingSection';
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
import Skill from '../components/Skill';
import Button from '../components/Button';
import blobShape from '../assets/app-images/blob-about-section.svg';
// import blobAboutShape from '../assets/blob-shape-skill-section.svg';

function About({ darkModeIsOn }: { darkModeIsOn: boolean }) {
  const aboutStyles = darkModeIsOn ? 'bg-black' : 'bg-gray-dark';
  return (
    <section className={`relative min-h-screen overflow-hidden sm-des:min-h-screen text-white ${aboutStyles}`}>
      <div className="container grid gap-16 pb-40 pt-10 sm-tab:pb-56 sm-des:pb-20 md-des:gap-10 md-des:grid-cols-12 lg-des:gap-8 lg-des:pb-12">
        {/* Skill Section */}
        <div className="grid gap-16  sm-des:grid-cols-1fr-2fr sm-des:gap-8 md-des:grid-cols-12 md-des:col-span-12">
          <HeadingSection
            sectionName="skills"
            className="sm-des:col-start-2 sm-des:row-start-1 md-des:col-start-8 text-white"
          />
          <img
            src={aboutMeImg}
            alt="about-me"
            className=" mx-auto px-5 sm-des:col-start-1 sm-des:row-span-2 sm-des:px-0 sm-des:row-start-1 sm-des:self-center md-des:row-start-2 md-des:row-span-1 md-des:col-span-4 lg-des:row-start-1 lg-des:row-span-2"
          />
          <div className="relative z-10 grid grid-cols-fit-150 gap-x-2 gap-y-5 md-des:gap-y-0 sm-des:col-start-2 sm-des:row-start-2 md-des:col-start-5 md-des:col-span-9 lg-des:gap-y-4 md-des:items-center">
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

        {/* About Section */}
        <div className=" relative z-10 md-des:col-start-2 md-des:col-span-5">
          <HeadingSection sectionName="about" className="text-white" />
          <div className=" mx-auto mt-8 max-w-[48ch] rounded-3xl bg-red-light p-6 lg-des:mt-5">
            <p className=" mb-5 text-center text-xl font-semibold text-black md-tab:text-start md-tab:text-2xl">
              I&rsquo;m a computer science graduate with a great passion for creating a beautiful websites
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button className=" !rounded-[50px] bg-red-dark" onClick={() => {}}>
                Read More
              </Button>
              <Button className=" !rounded-[50px] bg-white !text-black" onClick={() => {}}>
                View CV
              </Button>
            </div>
          </div>
        </div>

        <img
          src={blobShape}
          alt="blob shape"
          className=" translate-x-5/12 absolute bottom-0 right-0 w-[110%] max-w-[120%] translate-x-[5%] translate-y-2/3 md-tab:w-full md-tab:translate-x-1/4 md-des:w-[70%] md-des:translate-y-[60%] md-des:translate-x-[30%] lg-des:translate-y-[65%]"
        />
      </div>
    </section>
  );
}

export default About;
