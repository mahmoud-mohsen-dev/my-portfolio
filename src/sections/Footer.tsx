import Logo from '../components/Logo';
import twitterIcon from '../assets/app-images/twitter.svg';
import githubIcon from '../assets/app-images/github.svg';
import linkedinIcon from '../assets/app-images/linkedin.svg';
import SocialIcon from '../components/SocialIcon';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Footer() {
  const location = useLocation();
  const path = location.pathname;
  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
  return (
    <footer className="flex flex-col place-items-center gap-5 bg-black py-5">
      {path === '/' ? (
        <a href="#home">
          <Logo height={50} fill="#4675F4" />
        </a>
      ) : (
        <Link to="/">
          <Logo height={50} fill="#4675F4" />
        </Link>
      )}

      <div className="flex w-40 justify-center gap-5">
        <SocialIcon href="https://twitter.com/mahmoud_codes" src={twitterIcon} alt="twitter icon" />
        <SocialIcon href="https://github.com/mahmoud-mohsen-dev" src={githubIcon} alt="github icon" />
        <SocialIcon href="https://www.linkedin.com/in/mahmoud-mohsen-dev/" src={linkedinIcon} alt="linkedin icon" />
      </div>
      <p className="text-2xl font-bold text-white">&copy; 2024 Mahmoud Mohsen</p>
    </footer>
  );
}

export default Footer;
