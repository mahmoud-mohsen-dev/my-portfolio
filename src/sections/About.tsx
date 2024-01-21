import HeadingSection from '../components/HeadingSection';
import Button from '../components/Button';
import blobShape from '../assets/app-images/blob-shape-skill-and-about-section.svg';
import Anchor from '../components/Anchor';
import githubIcon from '../assets/app-images/github.svg';
import linkedinIcon from '../assets/app-images/linkedin.svg';
import twitterIcon from '../assets/app-images/twitter.svg';
import SocialIcon from '../components/SocialIcon';

function About({ darkModeIsOn }: { darkModeIsOn: boolean }) {
  const aboutStyles = darkModeIsOn ? 'bg-black' : 'bg-blue-light';
  return (
    <section className={`${aboutStyles} relative overflow-hidden`}>
      <div className="container py-10 sm-des:grid sm-des:grid-cols-12 sm-des:gap-x-5">
        {/* About section */}
        <div className="relative z-10 sm-des:col-span-8">
          <HeadingSection sectionName="about" className={`${darkModeIsOn ? 'text-white' : 'text-black'}`} />
          <div className=" mx-auto mt-8 max-w-[48ch] rounded-3xl bg-red-light p-6">
            <p className=" mb-5 text-center text-xl font-semibold text-black">
              I&rsquo;m a computer science graduate with a great passion for creating a beautiful websites
            </p>
            <div className="flex flex-wrap justify-center items-center gap-5">
              <Button className=" bg-red-dark" onClick={() => {}}>
                Read More
              </Button>
              <Anchor className="rounded-xl bg-white px-5 py-4 !text-black" href="#cv">
                View CV
              </Anchor>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className=" bg-[rgba(14,36,49,0.3)]  relative z-10 md-mob:w-80 flex justify-between p-5 rounded-3xl mx-auto mt-20 sm-des:mt-0 sm-des:place-self-end sm-des:col-start-9 sm-des:h-fit ">
          <SocialIcon href="https://twitter.com/mahmoud_codes" src={twitterIcon} alt="twitter icon" />
          <SocialIcon href="https://github.com/mahmoud-mohsen-dev" src={githubIcon} alt="github icon" />
          <SocialIcon href="https://www.linkedin.com/in/mahmoud-mohsen-dev/" src={linkedinIcon} alt="linkedin icon" />
        </div>

        <img
          src={blobShape}
          alt="blob shape"
          className="absolute right-0 bottom-0 w-[120%] max-w-[1500px] translate-x-[7%] md-mob:translate-y-[10%] sm-tab:translate-y-[18%] sm-tab:w-full md-tab:translate-x-0 md-tab:translate-y-[35%] lg-tab:translate-y-[40%] sm-des:translate-y-[55%] md-des:translate-y-[15%] md-des:max-w-[42%] lg-des:max-w-[45%] lg-des:translate-y-[30%]"
        />
      </div>
    </section>
  );
}

export default About;
