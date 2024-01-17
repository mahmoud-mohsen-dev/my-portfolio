function Skill({ src, alt, tool }: { src: string; alt: string; tool: string }) {
  return (
    <div className=" w-fit mx-auto flex flex-col justify-center">
      <img src={src} alt={alt} />
      <p className=" font-mochiy text-xl ">{tool}</p>
    </div>
  );
}

export default Skill;
