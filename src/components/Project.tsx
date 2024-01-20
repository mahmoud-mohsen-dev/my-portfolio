import { projectType } from '../types/myTypes';
import Anchor from './Anchor';
import { useState } from 'react';
function Project({ info, darkModeIsOn }: { info: projectType; darkModeIsOn: boolean }) {
  const { id, imgSrc, imgAlt, title, description, tools, liveSrc, codeSrc } = info;
  const [hover, setHover] = useState(false);
  const isEven = id % 2 === 0;
  console.log(isEven);
  console.log(id);
  return (
    <div
      className={`flex flex-col gap-5  sm-des:items-center sm-des:mx-auto sm-des:max-w-[1000px] md-des:max-w-[1300px] sm-des:gap-20 ${isEven ? 'sm-des:flex-row-reverse' : 'sm-des:flex-row'}`}
    >
      <a
        className={`relative block sm-des:max-w-[55%] transition-shadow ease-transform ${hover ? 'shadow-projectHoverShadow' : 'shadow-projectIdleShadow '}`}
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
          className={`bg-[rgba(28,29,37)] absolute inset-0 z-10 transition-opacity duration-300 ease-super ${hover ? 'opacity-60' : 'opacity-10'}`}
        ></div>
        {/* on hover this div slide over the image */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute top-0 flex justify-start items-end bg-mask-hover z-30 w-full h-full left-0 transition-transfrom duration-300 ease-transform ${hover ? 'translate-x-0' : '-translate-x-full'}`}
          >
            {/* tools for the project */}
            <div className={`mx-5 sm-des:mx-8 mb-5 md-des:mb-10 font-bold`}>
              <h3 className="text-3xl sm-tab:text-5xl mb-2 md-des:mb-5 text-white">Tools</h3>
              <ul className=" flex flex-wrap gap-x-2 sm-tab:gap-x-4 md-des:gap-4">
                {tools.map((item, i) => (
                  <li className={`font-poppins sm-tab:text-3xl text-blue-light`} key={item + i}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* on hover number will be visible */}
        <div className=" overflow-hidden absolute top-0 left-0 lg-tab:translate-x-[-30px] z-30 translate-y-[-40px] w-[150px] h-[125px]">
          <div
            className={`text-7xl lg-tab:text-9xl font-extrabold h-full text-white transition-transform duration-300 delay-200 ease-transform ${hover ? 'translate-y-0' : 'translate-y-full'}`}
            style={{ textShadow: '5px 5px 11px rgba(74,74,74,.5)' }}
          >
            0{id}
          </div>
        </div>
      </a>

      {/* project Description */}
      <div className="">
        <h3
          className={`font-titan text-2xl capitalize tracking-wide md-des:text-4xl ${darkModeIsOn ? 'text-white' : 'text-black'}`}
        >
          {title}
        </h3>
        <p
          className={`font-poppins text-lg md-des:text-xl my-3 font-medium ${darkModeIsOn ? 'text-white opacity-75' : 'text-gray-darktext-black'}`}
        >
          {description}
        </p>

        <div className="flex gap-4 flex-wrap mt-4 text-center sm-des:text-start">
          <Anchor className=" px-5 py-3 bg-red-dark" href={liveSrc}>
            View Demo
          </Anchor>
          <Anchor className={`px-5 py-3 ${darkModeIsOn ? 'bg-gray-medium' : 'bg-black'}`} href={codeSrc}>
            Source Code
          </Anchor>
        </div>
      </div>
    </div>
  );
}

export default Project;
