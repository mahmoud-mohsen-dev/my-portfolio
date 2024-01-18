function HeadingSection({ sectionName, className }: { sectionName: string; className?: string }) {
  return (
    <div className={`mx-auto w-fit ${className}`}>
      <h3 className=" p-2 font-Paytone text-5xl uppercase tracking-wide text-secondary">{sectionName}</h3>
      <div className="h-1 w-full bg-primary"></div>
      <div className="mx-auto mt-2 h-1 w-1/2 bg-primary"></div>
    </div>
  );
}

export default HeadingSection;
