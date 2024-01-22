function HeadingSection({ sectionName, className }: { sectionName: string; className?: string }) {
  return (
    <div className={`mx-auto w-fit ${className}`}>
      <h3 className="pb-2 font-Paytone text-[2.7rem] uppercase leading-none tracking-wide">{sectionName}</h3>
      <div className="h-1 w-full bg-primary"></div>
      <div className="mx-auto mt-2 h-1 w-1/2 bg-primary"></div>
      <div className="mx-auto mt-2 h-1 w-5 bg-primary"></div>
    </div>
  );
}

export default HeadingSection;
