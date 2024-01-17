function HeadingSection({ sectionName }: { sectionName: string }) {
  return (
    <div className="mx-auto w-fit">
      <h3 className=" uppercase p-2 tracking-wide text-secondary font-Paytone text-6xl">{sectionName}</h3>
      <div className="w-full h-1 bg-primary"></div>
      <div className="mx-auto w-1/2 mt-2 h-1 bg-primary"></div>
    </div>
  );
}

export default HeadingSection;
