import { Link } from 'react-router-dom';
import HeadingSection from '../components/smallRusable/HeadingSection';
import challengesData from '../data/challenges.json';

function Challenges({ darkModeIsOn }: { darkModeIsOn: boolean }) {
  const filtered = challengesData.filter((item) => typeof item.order === 'number' && item.order > 0);
  const ordered = filtered.sort((a, b) => {
    if (a.order !== null && b.order !== null) {
      return a.order - b.order;
    }
    return 0;
  });
  const onlySix = ordered.slice(0, 6);
  console.log(onlySix);
  return (
    <div className={`py-10 ${darkModeIsOn ? 'bg-black' : 'bg-gray-dark'}`} id="challenges">
      <HeadingSection sectionName="Challenges" className={`text-white`} />
      <div></div>
      <Link
        to="/challenges"
        className="mx-auto block w-fit text-white font-normal bg-red-dark py-3 px-5 text-xl rounded-md mt-10 cursor-pointer font-titan tracking-wide shadow-buttonShadow transition-all  active:scale-90 hover:md-tab:scale-110 md-tab:active:scale-90 "
      >
        see all challenges
      </Link>
    </div>
  );
}

export default Challenges;
