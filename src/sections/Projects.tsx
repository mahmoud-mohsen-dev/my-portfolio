import HeadingSection from '../components/HeadingSection';
import whoWillWinTheMillionImg from '../assets/projects-images/who-will-win-the-million.png';
import Project from '../components/Project';
import { projectType } from '../types/myTypes';
import projectsData from '../data/projects.json';
function Projects({ darkModeIsOn }: { darkModeIsOn: boolean }) {
  const projectsStyles = darkModeIsOn ? 'bg-gray-dark' : 'bg-secondary';

  const whoWillWinTheMillion: projectType = {
    id: 1,
    imgSrc: whoWillWinTheMillionImg,
    imgAlt: 'who will win the million quiz game',
    title: 'who will win the million',
    description: 'An interactive web-based quiz game inspired by the popular TV show "Who Wants to Be a Millionaire."',
    tools: ['React', 'TypeScript', 'CSS', 'Figma'],
    liveSrc: 'https://mahmoud-mohsen-dev.github.io/who-will-win-the-million/',
    codeSrc: 'https://github.com/mahmoud-mohsen-dev/who-will-win-the-million',
  };

  // const projectOne = JSON.parse(projectsData);
  console.log(projectsData);

  // "imgSrc": "/assets/who-will-win-the-million.png",

  return (
    <section className={`${projectsStyles} py-20 pt-8`} id="projects">
      <div className="container grid gap-16">
        <HeadingSection sectionName="projects" className={`${darkModeIsOn ? 'text-white' : 'text-black'}`} />
        <Project info={whoWillWinTheMillion} darkModeIsOn={darkModeIsOn} />
        <Project info={{ ...whoWillWinTheMillion, id: 2 }} darkModeIsOn={darkModeIsOn} />
        <Project info={{ ...whoWillWinTheMillion, id: 3 }} darkModeIsOn={darkModeIsOn} />
      </div>
    </section>
  );
}

export default Projects;
