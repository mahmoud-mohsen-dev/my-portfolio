import { challengeType } from '../../types/myTypes';
import Anchor from '../buttons/Anchor';
import { motion } from 'framer-motion';
function Challenge({ info, darkModeIsOn }: { info: challengeType; darkModeIsOn: boolean }) {
  const { imgSrc, imgAlt, title, description, tools, liveSrc, codeSrc } = info;
  return (
    <div className={`p-4 py-6 rounded-xl flex flex-col ${darkModeIsOn ? ' bg-gray-700' : 'bg-blue-50 '}`}>
      <motion.a className="overflow-hidden block rounded-xl " href={liveSrc} target="_blank">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="transition-transform ease-transform duration-300 scale-[1.02] hover:rotate-6 hover:scale-125"
        />
      </motion.a>
      <ul className=" flex flex-wrap gap-2 mt-5 mb-2">
        {tools.map((item, i) => (
          <li
            className={`font-poppins text-red-medium text-sm border-red-medium px-1 border rounded-sm`}
            key={item + i}
          >
            {item}
          </li>
        ))}
      </ul>
      {/* project Description */}
      <div className="flex flex-col flex-grow justify-between">
        <h3
          className={`font-titan text-3xl capitalize tracking-wide mt-4 ${darkModeIsOn ? 'text-white' : 'text-black'}`}
        >
          {title}
        </h3>
        <p
          className={`mt-3 font-poppins font-medium ${darkModeIsOn ? 'text-white opacity-75' : 'text-gray-darktext-black'}`}
        >
          {description}
        </p>

        <div className="mt-4 flex-wrap gap-6 justify-start flex">
          {liveSrc && (
            <Anchor className=" bg-red-dark px-5 py-3 rounded text-white" href={liveSrc} blank={liveSrc ? true : false}>
              View Demo
            </Anchor>
          )}
          {codeSrc && (
            <Anchor
              className={`px-5 py-3 rounded text-white ${darkModeIsOn ? 'bg-gray-medium' : 'bg-black'}`}
              href={codeSrc}
              blank={liveSrc ? true : false}
            >
              Source Code
            </Anchor>
          )}
        </div>
      </div>
    </div>
  );
}

export default Challenge;
