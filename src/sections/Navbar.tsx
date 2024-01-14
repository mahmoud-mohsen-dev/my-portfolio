import { useState } from 'react';
import logoPrimary from '../assets/Logo-Primary.svg';
import logoDanger from '../assets/Logo-red.svg';
import whiteSun from '../assets/sun-white.svg';
import blackSun from '../assets/sun-black.svg';
import { Fade as Hamburger } from 'hamburger-react';
import NavItem from '../components/NavItem';
import { NavbarProps } from '../dist/types';
function Navbar({ darkModeIsOn, setDarkModeIsOn }: NavbarProps<boolean>) {
  const [isOpen, setOpen] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const color = darkModeIsOn ? ' bg-secondary  text-black' : 'bg-black  text-white';

  return (
    <header className={`${color}`}>
      <div className="container mx-auto flex h-20 items-center justify-between duration-300 md:h-16 md:duration-0 ">
        <div className="flex w-full items-center justify-between px-3 ">
          <img src={darkModeIsOn ? logoPrimary : logoDanger} alt="portfolio-logo" className=" inline-block md:h-14" />
          {/* hamburger Menu */}
          <div className=" md:hidden !*:transition-transform">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              duration={0.3}
              color={darkModeIsOn ? '#0E2431' : 'white'}
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
          className={`fixed top-0 -z-10 flex h-screen w-full max-w-lg flex-col items-center justify-around px-36 py-32 font-poppins text-4xl tracking-wide transition-transform duration-300 md:static md:z-0 md:h-full md:max-w-none md:flex-row md:justify-end md:p-0 md:px-2 md:text-xl md:font-semibold md:duration-0 lg:text-3xl  ${color}  ${openNav ? ' left-0' : '-left-full'}`}
        >
          <ul className=" flex basis-2/3 flex-col justify-between text-center md:absolute md:left-1/2 md:-translate-x-1/2 md:flex-row md:gap-10">
            <NavItem text="home" />
            <NavItem text="about" />
            <NavItem text="projects" />
            <NavItem text="contact" />
          </ul>

          <div className="mt-5 flex w-full flex-wrap items-center justify-center gap-10 md:ml-16  md:mt-0 md:max-w-40 md:flex-row md:flex-nowrap md:gap-8">
            <a href="#cv" className="mt-5 md:mt-0">
              CV
            </a>

            <button className="mt-5 md:mt-0" onClick={() => setDarkModeIsOn((prev) => !prev)}>
              <img src={darkModeIsOn ? blackSun : whiteSun} alt="dark-mode-button" className=" w-8" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
