import { HeroProps } from '../types/myTypes';

function Hero({ darkModeIsOn }: HeroProps) {
  const heroStyles = darkModeIsOn ? 'bg-gray-dark text-white' : 'bg-secondary';
  return <section className={` h-[1000px] pt-20 ${heroStyles}`}></section>;
}

export default Hero;
