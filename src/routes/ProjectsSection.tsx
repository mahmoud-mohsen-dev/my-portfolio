import { projectsSectionProps, projectType } from '../types/myTypes';
import Project from '../components/Project';

function ProjectsSection({ darkModeIsOn, projectsData }: projectsSectionProps) {
  const filteredAndSortedProjects = projectsData
    .sort((a, b) => a.order - b.order)
    .filter((project: projectType) => typeof project.order === 'number');
  const dontHasOrderNumber = projectsData.filter((item) => typeof item.order !== 'number');
  const result = [...filteredAndSortedProjects, ...dontHasOrderNumber];
  return (
    <section className={`pt-32 py-24 min-h-screen ${darkModeIsOn ? 'bg-gray-dark' : 'bg-secondary'}`}>
      <div className="container grid gap-16">
        {result.map((project, i) => {
          return <Project info={project} darkModeIsOn={darkModeIsOn} key={project.id + i} />;
        })}
      </div>
    </section>
  );
}

export default ProjectsSection;
