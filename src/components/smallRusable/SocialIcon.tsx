function SocialIcon({ className, href, src, alt }: { className?: string; href: string; src: string; alt: string }) {
  return (
    <a
      rel="noreferrer"
      target="_blank"
      href={href}
      className={` flex justify-center items-center transition-transform duration-300 ease-transform hover:-translate-y-1 ${className}`}
    >
      <img src={src} alt={alt} className="w-12  md-mob:w-fit" />
    </a>
  );
}

export default SocialIcon;
