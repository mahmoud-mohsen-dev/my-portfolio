import { HeroProps } from '../types/myTypes';
import coding from '../assets/Coding.svg';
import Button from '../components/Button';
import lines from '../assets/lines.svg';
import blobShap from '../assets/blob-hero-section.svg';
import circleLines from '../assets/weird-shap-hero-section.svg';

function Hero({ darkModeIsOn }: HeroProps) {
  const heroStyles = darkModeIsOn ? 'bg-gray-dark text-white' : 'bg-secondary';
  const nameStyles = darkModeIsOn ? 'text-blue-medium' : 'text-primary';
  const jobTitleStyles = darkModeIsOn ? 'text-red-medium' : 'text-red-dark';

  return (
    <section className={` h-dvh py-20 relative z-10 overflow-hidden ${heroStyles}`}>
      <div className="container h-full px-5 md:px-24 mx-auto sm:grid grid-cols-12 grid-rows-12">
        <img
          src={coding}
          alt="coding"
          className="  max-h-[50%] mx-auto mt-4 col-start-7 row-start-2 col-span-6 row-span-8 sm:max-h-full"
        />
        <div className=" font-bold font-poppins text-2xl md:text-3xl tracking-wide text-center sm:text-left mt-4 sm:max-w-fit col-start-1 col-span-7 row-start-6">
          <h2 className="capitalize ">hello i&rsquo;m</h2>
          <h1 className={`my-2 uppercase text-3xl font-mochiy md:text-4xl lg:text-6xl md:mt-2 md:mb-4 ${nameStyles}`}>
            mahmoud mohsen
          </h1>
          <h2 className={`capitalize sm:text-right ${jobTitleStyles}`}>frontend web developer</h2>
          <Button className={` bg-primary mt-3 mx-auto block sm:ml-auto sm:mr-0 `} onClick={() => {}}>
            Projects
          </Button>
        </div>
      </div>
      <img
        src={circleLines}
        alt="lines shape a circle"
        className="hidden absolute top-1/4 -translate-x-1/2 -z-10 -translate-y-1/4 md:block"
      />
      <img
        src={blobShap}
        alt="blob shap"
        className="absolute bottom-0 left-0 -translate-x-1/2 md:-translate-x-1/4 translate-y-1/2 -z-20"
      />
      <img src={lines} alt="lines" className=" absolute right-0 bottom-0 translate-x-1/3 -z-10 md:-translate-x-0" />
    </section>
  );
}

export default Hero;
