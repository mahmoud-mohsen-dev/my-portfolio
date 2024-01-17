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
            <img src={darkModeIsOn ? logoDanger : logoPrimary} alt="portfolio-logo" className=" inline-block" />
          </a>
          {/* hamburger Menu */}
          <div className="pr-3 md:hidden" id="hamburger">
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

        <div
          className={`fixed top-0 z-10 md:z-50 flex h-screen w-full max-w-lg flex-col items-center justify-around px-36 pt-24 pb-10 xs:py-32 font-poppins text-4xl font-semibold  tracking-wide transition-[left] duration-300 md:static md:h-full md:max-w-none md:flex-row md:justify-end md:p-0 md:px-2 md:text-xl md:duration-0 lg:text-3xl ${navStyles}  ${openNav ? ' left-0' : '-left-full'}`}
        >
          <ul className=" flex basis-2/3 flex-col justify-between text-center md:absolute md:left-1/2 md:-translate-x-1/2 md:flex-row md:gap-5 xl:gap-8">
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

          <div className="mt-5 flex w-full flex-wrap items-center justify-center gap-7 md:ml-16  md:mt-0 md:max-w-40 md:flex-row md:flex-nowrap ">
            <a
              href="#cv"
              className={`rounded-full px-3 py-1 hover:scale-110 hover:transition-all hover:duration-200 active:scale-100 md:mt-0 ${cvBtnStyles}`}
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
              <img src={darkModeIsOn ? whiteSun : blackSun} alt="dark-mode-button" className=" w-8" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
