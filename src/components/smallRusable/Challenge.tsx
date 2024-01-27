import { challengeType } from '../../types/myTypes';
import Anchor from '../buttons/Anchor';
function Challenge({ info, darkModeIsOn }: { info: challengeType; darkModeIsOn: boolean }) {
  const { imgSrc, imgAlt, title, description, tools, liveSrc, codeSrc } = info;
  return (
    <div className={`p-8 rounded-xl ${darkModeIsOn ? ' bg-gray-700' : 'bg-blue-100 '}`}>
      <img src={imgSrc} alt={imgAlt} className="rounded-lg" />
      <ul className=" flex flex-wrap gap-x-1 gap-y-1 mt-5 mb-2">
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
      <div>
        <h3
          className={`font-titan text-3xl capitalize tracking-wide mt-4 ${darkModeIsOn ? 'text-white' : 'text-black'}`}
        >
          {title}
        </h3>
        <p
          className={`my-3 font-poppins font-medium ${darkModeIsOn ? 'text-white opacity-75' : 'text-gray-darktext-black'}`}
        >
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-4 justify-center">
          <Anchor className=" bg-red-dark text-lg px-5 py-3" href={liveSrc}>
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

export default Challenge;
