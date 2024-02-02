function HeadingSection({ sectionName, className }: { sectionName: string; className?: string }) {
  return (
    <div className={`mx-auto w-fit ${className}`}>
      <h3 className="pb-3 font-titan text-4xl md-mob:text-[2.7rem] uppercase leading-none tracking-wide">
        {sectionName}
      </h3>
      <div className="h-[5px] rounded w-full bg-primary"></div>
      <div className="mx-auto mt-3 rounded h-[5px] w-1/2 bg-primary"></div>
    </div>
  );
}

export default HeadingSection;
