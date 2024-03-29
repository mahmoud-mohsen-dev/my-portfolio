import { HeroProps } from '../types/myTypes';
import Anchor from '../components/buttons/Anchor';
import lines from '../assets/app-images/lines.svg';
import blobShap from '../assets/app-images/blob-hero-section.svg';
import circleLines from '../assets/app-images/weird-shape-hero-section.svg';

// eslint-disable-next-line import/named
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import animationData from '../data/person-smiling-animation.json';
import { useRef } from 'react';

function Hero({ darkModeIsOn, cvUrl }: HeroProps) {
  const personRef = useRef<LottieRefCurrentProps>(null);
  const heroStyles = darkModeIsOn ? 'bg-gray-dark text-white' : 'bg-secondary';
  const jobTitleStyles = darkModeIsOn ? 'text-red-medium' : 'text-red-dark';

  return (
    <section
      className={`relative z-10 overflow-hidden py-20 min-h-screen flex flex-col justify-center md-des:h-screen ${heroStyles}`}
      id="home"
      data-section
    >
      {/* Hero section content */}
      <div className="container h-full grid-cols-12 grid-rows-12 md-des:grid ">
        <Lottie
          animationData={animationData}
          lottieRef={personRef}
          onComplete={() => {
            personRef.current?.setDirection(-1);
            personRef.current?.play();
            personRef.current?.setSpeed(0.5);
            personRef.current?.playSegments([10, 45], false);
          }}
          loop={false}
          className="relative z-[1] w-full md-des:col-span-8 md-des:col-start-6 md-des:row-span-10 md-des:row-start-1 md-des:ml-20 lg-des:col-span-7 lg-des:col-start-6 lg-des:row-span-11 lg-des:row-start-1 lg-des:ml-32"
        />

        <div className="relative z-[2] col-span-12 col-start-1 row-start-8 mt-4 text-center font-poppins text-xl font-bold tracking-wide sm-tab:text-3xl md-tab:m-auto md-tab:max-w-fit md-tab:text-left md-tab:text-4xl sm-des:row-start-9 md-des:row-start-7 md-des:ml-16">
          <h2 className="capitalize">hi, i&rsquo;m</h2>
          <h1
            className={`text-stroke-3 my-2 bg-hero-back bg-clip-text bg-[0_0] font-poppins text-2xl uppercase tracking-wider text-[transparent] md-mob:text-3xl sm-tab:text-4xl md-tab:my-5 md-tab:text-[59px] lg-tab:text-6xl md-des:my-3 lg-des:text-7xl`}
          >
            mahmoud mohsen
          </h1>
          <h2 className={`capitalize md-tab:text-right ${jobTitleStyles}`}>frontend web developer</h2>
          <div className="mx-auto mt-6 flex gap-5 flex-wrap justify-center md-tab:justify-end">
            <Anchor
              className="rounded-md bg-white h-fit px-2 py-2.5 text-xl md-tab:px-4 md-tab:py-4 md-tab:text-2xl text-black block w-fit"
              href={cvUrl}
            >
              View CV
            </Anchor>
            <Anchor
              className={`block w-fit rounded-md bg-gradient-to-r from-primary to-blue-600 h-fit px-2 py-2.5 text-xl md-tab:px-4 md-tab:py-4 md-tab:text-2xl text-white `}
              href="#projects"
              blank={false}
            >
              Projects
            </Anchor>
          </div>
        </div>
      </div>

      {/* Circle shape on the left */}
      <img
        src={circleLines}
        alt="lines shape a circle"
        className="absolute top-1/4 -z-10 hidden -translate-x-1/2 -translate-y-1/4 md-tab:block"
      />

      {/* blop shape on the bottom left */}
      <img
        src={blobShap}
        alt="blob shap"
        className="absolute bottom-0 left-0 -z-20 -translate-x-1/2 translate-y-1/2 md-tab:-translate-x-1/4"
      />

      {/* lines shape on the bottom right */}
      <img src={lines} alt="lines" className=" absolute bottom-0 right-0 -z-10 translate-x-1/3 md-tab:-translate-x-0" />
    </section>
  );
}

export default Hero;
