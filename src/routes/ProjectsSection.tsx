import { projectsSectionProps, projectType } from '../types/myTypes';
import Project from '../components/smallRusable/Project';
import Challenge from '../components/smallRusable/Challenge';

function ProjectsSection({ darkModeIsOn, projectsData, isChallenge }: projectsSectionProps) {
  const filteredAndSortedProjects = projectsData
    .filter((project: projectType) => typeof project.order === 'number' && project.order > 0)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  const dontHasOrderNumber = projectsData.filter((item) => typeof item.order !== 'number');
  const result = [...filteredAndSortedProjects, ...dontHasOrderNumber];

  let projectOrChallengesElements;
  if (isChallenge) {
    projectOrChallengesElements = (
      <div className="container mt-10 grid md-mob:grid-cols-fit-450 gap-x-12 gap-y-16">
        {result.map((challenge, i) => {
          return (
            <Challenge info={challenge} darkModeIsOn={darkModeIsOn} key={challenge.description + i + new Date()} />
          );
        })}
      </div>
    );
  } else {
    projectOrChallengesElements = (
      <div className="container grid gap-16">
        {result.map((project, i) => {
          return (
            <Project info={project} darkModeIsOn={darkModeIsOn} key={project.description + i + new Date()} index={i} />
          );
        })}
      </div>
    );
  }
  return (
    <section
      className={`pt-32 py-24 min-h-screen ${darkModeIsOn ? 'bg-gray-dark' : isChallenge ? 'bg-gray-dark' : 'bg-secondary'}`}
    >
      {projectOrChallengesElements}
    </section>
  );
}

export default ProjectsSection;
