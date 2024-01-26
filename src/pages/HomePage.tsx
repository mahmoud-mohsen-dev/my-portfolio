import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import { Outlet } from 'react-router-dom';
import { NavbarProps } from '../types/myTypes';
function HomePage({ darkModeIsOn, setDarkModeIsOn }: NavbarProps<boolean>) {
  return (
    <>
      <Navbar darkModeIsOn={darkModeIsOn} setDarkModeIsOn={setDarkModeIsOn} />
      <Outlet />
      <Footer />
    </>
  );
}

export default HomePage;
