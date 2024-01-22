import HeadingSection from '../components/HeadingSection';
import blobShape from '../assets/app-images/blob-shape-skill-and-about-section.svg';
import Anchor from '../components/Anchor';
import githubIcon from '../assets/app-images/github.svg';
import linkedinIcon from '../assets/app-images/linkedin.svg';
import twitterIcon from '../assets/app-images/twitter.svg';
import SocialIcon from '../components/SocialIcon';
import Modal from '../components/Modal';

function About({ darkModeIsOn }: { darkModeIsOn: boolean }) {
  const aboutStyles = darkModeIsOn ? 'bg-black' : 'bg-blue-light';
  return (
    <section className={`${aboutStyles} relative overflow-hidden`} id="about">
      <div className="container  py-10 pt-8 sm-des:grid sm-des:grid-cols-12 sm-des:gap-x-5">
        {/* About section */}
        <div className=" sm-des:col-span-8">
          <HeadingSection sectionName="about" className={`${darkModeIsOn ? 'text-white' : 'text-black'}`} />
          <div className=" relative z-10 mx-auto mt-8 max-w-[48ch] rounded-3xl bg-red-light p-6">
            <p className=" mb-5 text-center text-xl font-semibold text-black">
              I&rsquo;m a computer science graduate with a great passion for creating a beautiful websites
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5">
              {/* modal */}
              <Modal />
              {/* <ModalButton /> */}
              <Anchor
                className="rounded-xl bg-white px-3 py-4 text-xl !text-black"
                href="https://drive.google.com/file/d/1d45q1btHjTNrjyUrHY4NwmYVjsW7CH6t/view?usp=sharing"
              >
                View CV
              </Anchor>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className=" relative  z-[1] mx-auto mt-20 flex justify-between rounded-3xl bg-[rgba(14,36,49,0.3)] p-5 md-mob:w-80 sm-des:col-start-9 sm-des:mt-0 sm-des:h-fit sm-des:place-self-end ">
          <SocialIcon href="https://twitter.com/mahmoud_codes" src={twitterIcon} alt="twitter icon" />
          <SocialIcon href="https://github.com/mahmoud-mohsen-dev" src={githubIcon} alt="github icon" />
          <SocialIcon href="https://www.linkedin.com/in/mahmoud-mohsen-dev/" src={linkedinIcon} alt="linkedin icon" />
        </div>

        <img
          src={blobShape}
          alt="blob shape"
          className="absolute bottom-0 right-0 w-[120%] max-w-[1500px] translate-x-[7%] md-mob:translate-y-[10%] sm-tab:w-full sm-tab:translate-y-[18%] md-tab:translate-x-0 md-tab:translate-y-[35%] lg-tab:translate-y-[40%] sm-des:translate-y-[55%] md-des:max-w-[42%] md-des:translate-y-[15%] lg-des:max-w-[45%] lg-des:translate-y-[30%]"
        />
      </div>
    </section>
  );
}

export default About;
