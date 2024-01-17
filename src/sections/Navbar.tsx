import { useState } from 'react';
import logoPrimary from '../assets/Logo-Primary.svg';
import logoDanger from '../assets/Logo-red.svg';
import whiteSun from '../assets/sun-white.svg';
import blackSun from '../assets/sun-black.svg';
import { Fade as Hamburger } from 'hamburger-react';
import NavItem from '../components/NavItem';
import { NavbarProps } from '../types/myTypes';
function Navbar({ darkModeIsOn, setDarkModeIsOn }: NavbarProps<boolean>) {
  // hamburger icon is clicked
  const [isOpen, setOpen] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  // active Nav link
  const [active, setActive] = useState('1');

  const navStyles = darkModeIsOn ? 'bg-black  text-white' : ' bg-secondary  text-black';
  const cvBtnStyles = darkModeIsOn ? 'text-white hover:bg-red-dark' : 'text-red-dark';

  const closeNavWindow = () => {
    if (isOpen && openNav) {
      setOpenNav(false);
      setOpen(false);
    }
  };

  return (
    <header className={`${navStyles} fixed top-0 z-50 w-full `}>
      <nav className="container flex h-20">
        {/* hamburger icon will be displayed on mobile screens */}
        <div className="relative z-50 flex w-full items-center justify-between ">
          <a href="#home">
            <img
              src={darkModeIsOn ? logoDanger : logoPrimary}
              alt="portfolio-logo"
              className="h-16 md-tab:h-10 lg-tab:h-16"
            />
          </a>
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
          className={`fixed top-0 z-10 flex h-screen w-full max-w-lg flex-col items-center justify-around pb-10 pt-24 font-poppins text-4xl font-semibold tracking-wide transition-[left] duration-300 md-tab:static md-tab:z-50 md-tab:h-full md-tab:max-w-none md-tab:flex-row md-tab:justify-end md-tab:p-0 md-tab:text-2xl md-tab:duration-0 lg-tab:text-3xl md-des:text-4xl ${navStyles}  ${openNav ? ' left-0' : '-left-full'}`}
        >
          <ul className=" flex basis-2/3 flex-col justify-between text-center md-tab:absolute md-tab:left-1/2 md-tab:-translate-x-1/2 md-tab:flex-row md-tab:gap-3 lg-tab:gap-5 md-des:gap-10">
            <NavItem
              text="home"
              id="1"
              active={active}
              setActive={setActive}
              darkModeIsOn={darkModeIsOn}
              closeNavWindow={closeNavWindow}
            />
            <NavItem
              text="about"
              id="2"
              active={active}
              setActive={setActive}
              darkModeIsOn={darkModeIsOn}
              closeNavWindow={closeNavWindow}
            />
            <NavItem
              text="projects"
              id="3"
              active={active}
              setActive={setActive}
              darkModeIsOn={darkModeIsOn}
              closeNavWindow={closeNavWindow}
            />
            <NavItem
              text="contact"
              id="4"
              active={active}
              setActive={setActive}
              darkModeIsOn={darkModeIsOn}
              closeNavWindow={closeNavWindow}
            />
          </ul>

          <div className="flex w-full flex-wrap items-center justify-center gap-10 md-tab:mt-0 md-tab:max-w-40 md-tab:flex-row md-tab:flex-nowrap md-tab:justify-end md-tab:gap-1 lg-tab:gap-3">
            <a
              href="#cv"
              className={`rounded-full px-3 py-1 hover:scale-110 hover:transition-all hover:duration-200 active:scale-100 md-tab:mt-0 ${cvBtnStyles}`}
              onClick={() => closeNavWindow()}
            >
              CV
            </a>

            <button
              onClick={() => {
                setDarkModeIsOn((prev: boolean) => !prev);
                closeNavWindow();
              }}
            >
              <img
                src={darkModeIsOn ? whiteSun : blackSun}
                alt="dark-mode-button"
                className=" w-11 md-tab:w-8 md-des:w-11"
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
