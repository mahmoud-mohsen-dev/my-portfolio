function SocialIcon({ className, href, src, alt }: { className?: string; href: string; src: string; alt: string }) {
  return (
    <a
      rel="noreferrer"
      target="_blank"
      href={href}
      className={`hover:-translate-y-2 transition-transform ease-transform duration-100 ${className}`}
    >
      <img src={src} alt={alt} />
    </a>
  );
}

export default SocialIcon;
