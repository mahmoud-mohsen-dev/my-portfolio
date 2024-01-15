import { useState } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';

function App() {
  const [darkModeIsOn, setDarkModeIsOn] = useState(false);

  return (
    <>
      <Navbar darkModeIsOn={darkModeIsOn} setDarkModeIsOn={setDarkModeIsOn} />
      <main>
        <Hero darkModeIsOn={darkModeIsOn} />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
