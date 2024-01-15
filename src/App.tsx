import { useState } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';

function App() {
  const [darkModeIsOn, setDarkModeIsOn] = useState(true);

  return (
    <>
      <Navbar darkModeIsOn={darkModeIsOn} setDarkModeIsOn={setDarkModeIsOn} />
      <Hero darkModeIsOn={darkModeIsOn} />
    </>
  );
}

export default App;
