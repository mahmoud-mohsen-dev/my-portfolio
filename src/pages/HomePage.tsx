import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import { Outlet } from 'react-router-dom';
import { NavbarProps } from '../types/myTypes';
function HomePage({ darkModeIsOn, cvUrl, setDarkModeIsOn }: NavbarProps<boolean>) {
  return (
    <div className="grid min-h-screen grid-rows-[1fr_auto]">
      <Navbar darkModeIsOn={darkModeIsOn} setDarkModeIsOn={setDarkModeIsOn} cvUrl={cvUrl} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default HomePage;
