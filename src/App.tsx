import { useState } from 'react';
import Navbar from './sections/Navbar';

function App() {
  const [darkModeIsOn, setDarkModeIsOn] = useState(false);

  return (
    <div>
      <Navbar darkModeIsOn={darkModeIsOn} setDarkModeIsOn={setDarkModeIsOn} />
    </div>
  );
}

export default App;
