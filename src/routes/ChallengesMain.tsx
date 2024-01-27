import { darkModeIsOnType } from '../types/myTypes';
import ProjectsSection from './ProjectsSection';
import challengsData from '../data/challenges.json';

function ChallengesMain({ darkModeIsOn }: darkModeIsOnType) {
  return <ProjectsSection darkModeIsOn={darkModeIsOn} projectsData={challengsData} isChallenge={true} />;
}

export default ChallengesMain;
