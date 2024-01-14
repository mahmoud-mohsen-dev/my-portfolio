import { useState } from 'react';
import logo from '../assets/Logo Primary.svg';
import whiteSun from '../assets/sun-white.svg';
import blackSun from '../assets/sun-black.svg';
import { Fade as Hamburger } from 'hamburger-react';
import NavItem from '../components/NavItem';
function Navbar() {
  const [darkModeIsOn, setDarkModeIsOn] = useState(false);

  const [isOpen, setOpen] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  return (
    <header className={`  ${darkModeIsOn ? 'bg-secondary' : 'bg-primary'}`}>
      <div className="container mx-auto duration-300 md:duration-0 h-20 flex items-center justify-between md:h-16 ">
        <div className="flex items-center justify-between w-full px-3 md:w-fit">
          <img src={logo} alt="portfolio-logo" className=" inline-block md:h-14" />
          {/* hamburger Menu */}
          <div className="md:hidden">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
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
          className={`text-4xl font-poppins fixed top-0 py-32 px-36 flex flex-col items-center justify-around h-screen -z-10 w-full max-w-lg transition-all duration-300 md:duration-0 md:flex-row md:static md:h-full md:px-2 md:z-0 md:text-2xl md:font-semibold md:p-0 md:max-w-none  ${darkModeIsOn ? ' bg-secondary  text-black' : 'bg-black  text-white md:bg-primary'}  ${openNav ? ' left-0' : '-left-full'}`}
        >
          <ul className=" basis-2/3 flex flex-col justify-between text-center md:flex-row md:gap-10 md:absolute md:left-1/2 -translate-x-1/2">
            <NavItem text="home" />
            <NavItem text="about" />
            <NavItem text="projects" />
            <NavItem text="contact" />
          </ul>

          <div className=" flex items-center justify-center w-full flex-wrap gap-10 sm:justify-between md:flex-row md:gap-10 md:flex-nowrap md:max-w-40 md:ml-16 md:w-fit">
            <a href="#cv" className="mt-5 md:mt-0">
              CV
            </a>

            <button className="mt-5 md:mt-0" onClick={() => setDarkModeIsOn((prev) => !prev)}>
              <img src={darkModeIsOn ? blackSun : whiteSun} alt="dark-mode-button" className=" w-12 max-w-none" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
