import HeadingSection from '../components/HeadingSection';
import whoWillWinTheMillionImg from '../assets/projects-images/who-will-win-the-million.png';
import Project from '../components/Project';
import { projectType } from '../types/myTypes';

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

  return (
    <section className={`${projectsStyles} py-12`}>
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
