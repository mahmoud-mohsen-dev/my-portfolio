import { useEffect, useState } from 'react';
import { Fade as Hamburger } from 'hamburger-react';
import { NavbarProps } from '../types/myTypes';
import Logo from '../components/navbar/Logo';
import DarkAndCvButtons from '../components/buttons/DarkAndCvButtons';
import Tabs from '../components/navbar/Tabs';
import { Link, useLocation } from 'react-router-dom';
import NotHomeTabs from '../components/navbar/NotHomeTabs';

function Navbar({ darkModeIsOn, setDarkModeIsOn }: NavbarProps<boolean>) {
  // hamburger icon is clicked
  const [isOpen, setOpen] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  // Is Navbar on top of the hero section
  const [isNavbarOnTop, setIsNavbarOnTop] = useState(true);

  // get Current Location path
  const location = useLocation();
  const path = location.pathname;

  // listen to every scroll event and set isNavbarOnTop
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY >= 20 ? setIsNavbarOnTop(false) : setIsNavbarOnTop(true);
    });
  }, []);

  let navStyles;
  let cvBtnStyles;
  if (darkModeIsOn) {
    navStyles = isNavbarOnTop ? 'bg-gray-dark' : ' bg-black  ';
    cvBtnStyles = isNavbarOnTop ? 'text-red-light' : 'text-red-light';
  } else {
    navStyles = isNavbarOnTop ? 'bg-secondary ' : ' bg-blue-400';
    cvBtnStyles = isNavbarOnTop ? 'text-red-dark' : 'text-white';
  }

  const closeNavWindow = () => {
    if (isOpen && openNav) {
      setOpenNav(false);
      setOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 z-50 w-full ${navStyles}  ${isNavbarOnTop ? '' : 'shadow-md'}`}>
      <nav className={`container flex transition-all duration-300 ${isNavbarOnTop ? 'h-20' : 'h-[58px]'}`}>
        {/* hamburger icon will be displayed on mobile screens */}
        <div className="relative z-50 flex w-full items-center justify-between ">
          {path === '/' ? (
            <a href="#home">
              <Logo height={isNavbarOnTop ? 50 : 38} fill={darkModeIsOn ? 'rgb(207,87,84)' : 'black'} />
            </a>
          ) : (
            <Link to="/">
              <Logo height={isNavbarOnTop ? 50 : 38} fill={darkModeIsOn ? 'rgb(207,87,84)' : 'black'} />
            </Link>
          )}
          {/* hamburger Menu */}
          <div className="md-tab:hidden" id="hamburger">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              duration={0.3}
              color={darkModeIsOn ? 'white' : '#0E2431'}
              onToggle={(toggled) => {
                if (toggled) {
                  // open a menu
                  setOpenNav(true);
                } else {
                  // close a menu
                  setOpenNav(false);
                }
              }}
            />
          </div>
        </div>

        {/* Navbar items and cv button and darkMode button */}
        <div
          className={`fixed top-0 z-10 flex h-screen w-full max-w-lg flex-col items-center justify-evenly pt-10 font-poppins text-3xl font-semibold tracking-wide transition-[left] duration-300 md-tab:static md-tab:z-50 md-tab:h-full md-tab:max-w-none md-tab:flex-row md-tab:justify-end md-tab:p-0 md-tab:text-sm lg-tab:text-lg md-des:text-xl md-tab:duration-0 ${navStyles}  ${openNav ? ' left-0' : '-left-full'}`}
        >
          {path === '/' ? (
            <Tabs darkModeIsOn={darkModeIsOn} closeNavWindow={closeNavWindow} />
          ) : (
            <NotHomeTabs darkModeIsOn={darkModeIsOn} closeNavWindow={closeNavWindow} />
          )}
          <DarkAndCvButtons
            cvBtnStyles={cvBtnStyles}
            closeNavWindow={closeNavWindow}
            darkModeIsOn={darkModeIsOn}
            setDarkModeIsOn={setDarkModeIsOn}
          />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
