function Skill({ src, alt, tool, imgClassName }: { src: string; alt: string; tool: string; imgClassName?: string }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <img src={src} alt={alt} className={`h-20 ${imgClassName}`} />
      <p className=" font-mochiy text-xl ">{tool}</p>
    </div>
  );
}

export default Skill;
