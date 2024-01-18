import { HeroProps } from '../types/myTypes';
import coding from '../assets/app-images/coding.svg';
import Button from '../components/Button';
import lines from '../assets/app-images/lines.svg';
import blobShap from '../assets/app-images/blob-hero-section.svg';
import circleLines from '../assets/app-images/weird-shape-hero-section.svg';

function Hero({ darkModeIsOn }: HeroProps) {
  const heroStyles = darkModeIsOn ? 'bg-gray-dark text-white' : 'bg-secondary';
  const jobTitleStyles = darkModeIsOn ? 'text-red-medium' : 'text-red-dark';

  return (
    <section className={`relative z-10 h-screen overflow-hidden py-20 ${heroStyles}`}>
      {/* Hero section content */}
      <div className="container h-full grid-cols-12 grid-rows-12 md-tab:grid ">
        <img
          src={coding}
          alt="coding"
          className="  col-span-8 col-start-6 row-span-6 row-start-3 mx-auto mt-4 max-h-[50%] md-tab:mt-0 md-tab:max-h-full md-des:col-span-5 md-des:col-start-8 md-des:row-span-8 md-des:row-start-3 md-des:mb-5 md-des:ml-16 lg-des:col-span-5 lg-des:col-start-8  lg-des:row-span-10 lg-des:row-start-2"
        />
        <div className=" col-span-12 col-start-1 row-start-8 mt-4 text-center font-poppins text-xl font-bold tracking-wide sm-tab:text-3xl md-tab:m-auto md-tab:max-w-fit md-tab:text-left md-tab:text-4xl sm-des:row-start-9 md-des:row-start-7 md-des:m-[unset]">
          <h2 className="capitalize">hi, i&rsquo;m</h2>
          <h1
            className={`text-stroke-3 my-2 bg-hero-back bg-clip-text bg-[0_0] font-poppins text-2xl uppercase tracking-wider text-[transparent] md-mob:text-3xl sm-tab:text-5xl md-tab:my-5 md-tab:text-[59px] lg-tab:text-7xl md-des:my-3`}
          >
            mahmoud mohsen
          </h1>
          <h2 className={`capitalize md-tab:text-right ${jobTitleStyles}`}>frontend web developer</h2>
          <Button className={` mx-auto mt-5 block bg-primary md-des:ml-auto md-des:mr-0 `} onClick={() => {}}>
            Projects
          </Button>
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
