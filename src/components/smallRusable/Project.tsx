import { projectType } from '../../types/myTypes';
import Anchor from '../buttons/Anchor';
import { useState } from 'react';
function Project({ info, darkModeIsOn, index }: { info: projectType; darkModeIsOn: boolean; index: number }) {
  const { imgSrc, imgAlt, title, description, tools, liveSrc, codeSrc } = info;
  const [hover, setHover] = useState(false);
  const countId = index + 1;
  const isEven = countId % 2 === 0;
  return (
    <div className={`sm-des:grid mt-5 ${isEven ? 'grid-cols-[2fr_3fr]' : 'grid-cols-[3fr_2fr]'} gap-16 items-center`}>
      <a
        className={`relative block transition-shadow ease-transform ${isEven ? 'order-2' : ''}  ${hover ? 'shadow-projectHoverShadow' : 'shadow-projectIdleShadow '}`}
        href={liveSrc}
        target="_blank"
        rel="noreferrer"
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
      >
        <img src={imgSrc} alt={imgAlt} />
        {/* Overlay */}
        <div
          className={`ease-super absolute inset-0 z-[1] bg-[rgba(28,29,37)] transition-opacity duration-300 ${hover ? 'opacity-60' : 'opacity-10'}`}
        ></div>
        {/* on hover this div slide over the image */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`transition-transfrom absolute left-0 top-0 z-[1] flex h-full w-full items-end justify-start bg-mask-hover duration-300 ease-transform ${hover ? 'translate-x-0' : '-translate-x-full'}`}
          >
            {/* tools for the project */}
            <div className={`mx-5 mb-5 font-bold sm-des:mx-8 md-des:mb-10`}>
              <h3 className="mb-2 text-3xl text-white sm-tab:text-5xl md-des:mb-5">Tools</h3>
              <ul className=" flex flex-wrap gap-x-2 sm-tab:gap-x-4 md-des:gap-4">
                {tools.map((item, i) => (
                  <li className={`font-poppins text-blue-light sm-tab:text-3xl`} key={item + i}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* on hover number will be visible */}
        <div
          className=" absolute left-0 top-0  z-[1] h-[125px] w-[150px] translate-y-[-40px] overflow-hidden lg-tab:translate-x-[-30px]"
          style={{ perspective: '200px' }}
        >
          <div
            className={`h-full text-7xl font-extrabold text-white transition-transform delay-200 duration-300 ease-transform lg-tab:text-9xl ${hover ? ' animate-fadeIn' : 'animate-fadeOut'}`}
            style={{
              textShadow: '5px 5px 11px rgba(74,74,74,.5)',
              transform: hover ? 'translate3d(0,0,0)' : 'translate3d(0,100%,0)',
            }}
          >
            {countId <= 9 ? `0${countId}` : countId}
          </div>
        </div>
      </a>

      {/* project Description */}
      <div className="mt-5 sm-des:mt-0">
        <h3
          className={`font-titan text-2xl capitalize tracking-wide md-des:text-[2rem] md-des:leading-10 ${darkModeIsOn ? 'text-white' : 'text-black'}`}
        >
          {title}
        </h3>
        <p
          className={`my-3 font-poppins text-lg font-medium md-des:text-xl ${darkModeIsOn ? 'text-white opacity-75' : 'text-gray-darktext-black'}`}
        >
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-4 text-center text-white sm-des:text-start">
          {liveSrc && (
            <Anchor className=" bg-red-dark text-lg px-5 py-3 rounded" href={liveSrc}>
              View Demo
            </Anchor>
          )}
          {codeSrc && (
            <Anchor
              className={`text-lg px-5 py-3 rounded text-white ${darkModeIsOn ? 'bg-gray-medium' : 'bg-black'}`}
              href={codeSrc}
            >
              Source Code
            </Anchor>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
