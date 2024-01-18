import { projectType } from '../types/myTypes';
import Anchor from './Anchor';
function Project({ info }: { info: projectType }) {
  const { id, imgSrc, imgAlt, title, description, tools, liveSrc, codeSrc } = info;
  console.log(id);
  return (
    <div className="flex flex-col gap-10">
      <div>
        <div className="">
          <img src={imgSrc} alt={imgAlt} className="" />
        </div>
      </div>

      {/* project Description */}
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <h4>{tools}</h4>
        <div>
          <Anchor className="" href={liveSrc}>
            Demo
          </Anchor>
        </div>
        <div>
          <Anchor className="" href={codeSrc}>
            Code
          </Anchor>
        </div>
      </div>
    </div>
  );
}

export default Project;
