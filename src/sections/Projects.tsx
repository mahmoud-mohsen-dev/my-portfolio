import HeadingSection from '../components/smallRusable/HeadingSection';
import Project from '../components/smallRusable/Project';
import { projectType } from '../types/myTypes';
import projectsData from '../data/projects.json';
import Button from '../components/buttons/Button';
import { Link } from 'react-router-dom';
function Projects({ darkModeIsOn }: { darkModeIsOn: boolean }) {
  const projectsStyles = darkModeIsOn ? 'bg-gray-dark' : 'bg-secondary';

  const filteredAndSortedProjects = projectsData
    .filter((project: projectType) => typeof project.order === 'number')
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <section className={`${projectsStyles} py-16 pt-8`} id="projects" data-section>
      <div className="container grid gap-16">
        <HeadingSection sectionName="projects" className={`${darkModeIsOn ? 'text-white' : 'text-black'}`} />

        {filteredAndSortedProjects.map((project, i) => {
          return <Project info={project} darkModeIsOn={darkModeIsOn} key={project.description + i} index={i} />;
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
