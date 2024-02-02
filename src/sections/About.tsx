import HeadingSection from '../components/smallRusable/HeadingSection';
import blobShape from '../assets/app-images/blob-shape-skill-and-about-section.svg';
import Anchor from '../components/buttons/Anchor';
import githubIcon from '../assets/app-images/github-white.svg';
import linkedinIcon from '../assets/app-images/linkedin.svg';
import mailIcon from '../assets/app-images/mail.svg';
import SocialIcon from '../components/smallRusable/SocialIcon';
import Modal from '../components/smallRusable/Modal';
import { darkModeIsOnType } from '../types/myTypes';

function About({ darkModeIsOn, cvUrl }: darkModeIsOnType) {
  const aboutStyles = darkModeIsOn ? 'bg-black' : 'bg-gray-dark';
  return (
    <section className={`${aboutStyles} relative overflow-hidden`}>
      <div className="container  py-10 pt-8 sm-des:grid sm-des:grid-cols-12 sm-des:gap-x-5">
        {/* About section */}
        <div className=" sm-des:col-span-8">
          <HeadingSection sectionName="about" className={`text-white`} />
          <div className=" relative z-10 mx-auto mt-8 max-w-[74ch] rounded-xl bg-red-light p-10">
            <p className=" mb-5 text-center text-lg !leading-[2.4rem] text-pretty sm-tab:text-2xl font-semibold text-black">
              I&rsquo;m a computer science graduate with 4 years of experience in sales. I&rsquo;m happy to leverage my
              skills to help grow your business. Let&rsquo;s work together!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5">
              {/* modal */}
              <Modal cvURl={cvUrl || ''} />
              {/* <ModalButton /> */}
              <Anchor className="rounded-md bg-white px-4 py-4 text-xl text-black" href="#contact" blank={false}>
                Get in touch
              </Anchor>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className=" relative  z-[1] mx-auto mt-20 flex justify-between rounded-3xl bg-[rgba(14,36,49,0.3)] p-5 md-mob:w-80 sm-des:col-start-9 sm-des:mt-0 sm-des:h-fit sm-des:place-self-end ">
          <SocialIcon href="mailto:mahmoud-mohsen-developer@gmail.com" src={mailIcon} alt="mail icon" />
          <SocialIcon href="https://github.com/mahmoud-mohsen-dev" src={githubIcon} alt="github icon" />
          <SocialIcon href="https://www.linkedin.com/in/mahmoud-mohsen-dev/" src={linkedinIcon} alt="linkedin icon" />
        </div>

        <img
          src={blobShape}
          alt="blob shape"
          className="absolute bottom-0 right-0 w-[120%] max-w-[1500px] translate-x-[7%] md-mob:translate-y-[10%] sm-tab:w-full sm-tab:translate-y-[18%] md-tab:translate-x-0 md-tab:translate-y-[35%] lg-tab:translate-y-[40%] sm-des:translate-y-[55%] md-des:max-w-[42%] md-des:translate-y-[15%] lg-des:max-w-[42%] lg-des:translate-y-[25%]"
        />
      </div>
    </section>
  );
}

export default About;
