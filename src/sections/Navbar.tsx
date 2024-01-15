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

  return (
    <header className={`${navStyles} fixed top-0 w-full`}>
      <div className="container mx-auto flex h-20 items-center justify-between ">
        <div className="flex w-full items-center justify-between px-3 relative z-50">
          <img src={darkModeIsOn ? logoDanger : logoPrimary} alt="portfolio-logo" className=" inline-block md:h-14" />
          {/* hamburger Menu */}
          <div className=" md:hidden" id="hamburger">
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

        <nav
          className={`fixed top-0 z-10 flex h-screen w-full max-w-lg flex-col items-center justify-around px-36 py-32 font-poppins text-4xl tracking-wide  duration-300 md:static md:z-0 md:h-full md:max-w-none md:flex-row md:justify-end md:p-0 md:px-2 md:text-xl font-semibold md:duration-0 lg:text-3xl transition-[left] ${navStyles}  ${openNav ? ' left-0' : '-left-full'}`}
        >
          <ul className=" flex basis-2/3 flex-col justify-between text-center md:absolute md:left-1/2 md:-translate-x-1/2 md:flex-row md:gap-10">
            <NavItem text="home" id="1" active={active} setActive={setActive} darkModeIsOn={darkModeIsOn} />
            <NavItem text="about" id="2" active={active} setActive={setActive} darkModeIsOn={darkModeIsOn} />
            <NavItem text="projects" id="3" active={active} setActive={setActive} darkModeIsOn={darkModeIsOn} />
            <NavItem text="contact" id="4" active={active} setActive={setActive} darkModeIsOn={darkModeIsOn} />
          </ul>

          <div className="mt-5 flex w-full flex-wrap items-center justify-center gap-10 md:ml-16  md:mt-0 md:max-w-40 md:flex-row md:flex-nowrap md:gap-8">
            <a
              href="#cv"
              className={`mt-5 md:mt-0 px-3 py-1 rounded-full hover:transition-all hover:duration-200 hover:scale-110 active:scale-100 ${cvBtnStyles}`}
            >
              CV
            </a>

            <button className="mt-5 md:mt-0" onClick={() => setDarkModeIsOn((prev: boolean) => !prev)}>
              <img src={darkModeIsOn ? whiteSun : blackSun} alt="dark-mode-button" className=" w-8" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
