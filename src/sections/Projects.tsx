import HeadingSection from '../components/HeadingSection';
import Project from '../components/Project';
import { projectType } from '../types/myTypes';
import projectsData from '../data/projects.json';
function Projects({ darkModeIsOn }: { darkModeIsOn: boolean }) {
  const projectsStyles = darkModeIsOn ? 'bg-gray-dark' : 'bg-secondary';

  const filteredAndSortedProjects = projectsData
    .filter((project: projectType) => project.order > 0)
    .sort((a, b) => a.order - b.order);
  // console.log(filteredAndSortedProjects);

  return (
    <section className={`${projectsStyles} py-20 pt-8`} id="projects" data-section>
      <div className="container grid gap-16">
        <HeadingSection sectionName="projects" className={`${darkModeIsOn ? 'text-white' : 'text-black'}`} />

        {filteredAndSortedProjects.map((project, i) => {
          return <Project info={project} darkModeIsOn={darkModeIsOn} key={project.id + i} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
