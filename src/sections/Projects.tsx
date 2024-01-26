import HeadingSection from '../components/HeadingSection';
import Project from '../components/Project';
import { projectType } from '../types/myTypes';
import projectsData from '../data/projects.json';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
function Projects({ darkModeIsOn }: { darkModeIsOn: boolean }) {
  const projectsStyles = darkModeIsOn ? 'bg-gray-dark' : 'bg-secondary';

  const filteredAndSortedProjects = projectsData
    .filter((project: projectType) => project.order > 0)
    .sort((a, b) => a.order - b.order);

  return (
    <section className={`${projectsStyles} py-16 pt-8`} id="projects" data-section>
      <div className="container grid gap-16">
        <HeadingSection sectionName="projects" className={`${darkModeIsOn ? 'text-white' : 'text-black'}`} />

        {filteredAndSortedProjects.map((project, i) => {
          return <Project info={project} darkModeIsOn={darkModeIsOn} key={project.id + i} />;
        })}

        <Link to="projects" className="mx-auto">
          <Button className=" mx-auto px-6 py-4 !rounded-md text-xl bg-primary" onClick={() => {}}>
            See All Projects
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Projects;
