function SocialIcon({ className, href, src, alt }: { className?: string; href: string; src: string; alt: string }) {
  return (
    <a
      rel="noreferrer"
      target="_blank"
      href={href}
      className={`transition-transform duration-300 ease-transform hover:-translate-y-2 ${className}`}
    >
      <img src={src} alt={alt} />
    </a>
  );
}

export default SocialIcon;
