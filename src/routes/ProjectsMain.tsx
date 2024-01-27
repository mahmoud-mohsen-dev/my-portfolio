import projectsData from '../data/projects.json';
import { darkModeIsOnType } from '../types/myTypes';
import ProjectsSection from './ProjectsSection';
function ProjectsMain({ darkModeIsOn }: darkModeIsOnType) {
  return <ProjectsSection darkModeIsOn={darkModeIsOn} projectsData={projectsData} isChallenge={false} />;
}

export default ProjectsMain;
