import { HeroProps } from '../types/myTypes';
import coding from '../assets/Coding.svg';
import Button from '../components/Button';
import lines from '../assets/lines.svg';
import blobShap from '../assets/blob-hero-section.svg';
import circleLines from '../assets/weird-shape-hero-section.svg';

function Hero({ darkModeIsOn }: HeroProps) {
  const heroStyles = darkModeIsOn ? 'bg-gray-dark text-white' : 'bg-secondary';
  const jobTitleStyles = darkModeIsOn ? 'text-red-medium' : 'text-red-dark';

  return (
    <section className={` relative z-10 h-dvh overflow-hidden py-20 ${heroStyles}`}>
      <div className="container mx-auto h-full grid-cols-12 grid-rows-12 px-5 sm:grid md:px-24">
        <img
          src={coding}
          alt="coding"
          className="  col-span-6 col-start-7 row-span-8 row-start-2 mx-auto mt-4 max-h-[50%] sm:max-h-full"
        />
        <div className=" col-span-7 col-start-1 row-start-6 mt-4 text-center font-poppins text-2xl font-bold tracking-wide sm:max-w-fit sm:text-left md:text-3xl">
          <h2 className="capitalize">hi i&rsquo;m</h2>
          <h1
            className={`text-transparent text-stroke-3 my-2 bg-hero-back font-mochiy text-3xl uppercase md:mb-4 md:mt-2 md:text-4xl lg:text-6xl`}
          >
            mahmoud mohsen
          </h1>
          <h2 className={`capitalize sm:text-right ${jobTitleStyles}`}>frontend web developer</h2>
          <Button className={` mx-auto mt-3 block bg-primary sm:ml-auto sm:mr-0 `} onClick={() => {}}>
            Projects
          </Button>
        </div>
      </div>
      <img
        src={circleLines}
        alt="lines shape a circle"
        className="absolute top-1/4 -z-10 hidden -translate-x-1/2 -translate-y-1/4 md:block"
      />
      <img
        src={blobShap}
        alt="blob shap"
        className="absolute bottom-0 left-0 -z-20 -translate-x-1/2 translate-y-1/2 md:-translate-x-1/4"
      />
      <img src={lines} alt="lines" className=" absolute bottom-0 right-0 -z-10 translate-x-1/3 md:-translate-x-0" />
    </section>
  );
}

export default Hero;
