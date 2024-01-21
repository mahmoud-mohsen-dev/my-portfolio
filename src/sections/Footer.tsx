import Logo from '../components/Logo';
import twitterIcon from '../assets/app-images/twitter.svg';
import githubIcon from '../assets/app-images/github.svg';
import linkedinIcon from '../assets/app-images/linkedin.svg';
import SocialIcon from '../components/SocialIcon';

function Footer() {
  return (
    <footer className="bg-black flex place-items-center flex-col py-5 gap-5">
      <Logo height={50} fill="#4675F4" />
      <div className="flex gap-5 justify-center w-40">
        <SocialIcon href="https://twitter.com/mahmoud_codes" src={twitterIcon} alt="twitter icon" />
        <SocialIcon href="https://github.com/mahmoud-mohsen-dev" src={githubIcon} alt="github icon" />
        <SocialIcon href="https://www.linkedin.com/in/mahmoud-mohsen-dev/" src={linkedinIcon} alt="linkedin icon" />
      </div>
      <p className="text-white text-2xl font-bold">&copy; 2024 Mahmoud Mohsen</p>
    </footer>
  );
}

export default Footer;
