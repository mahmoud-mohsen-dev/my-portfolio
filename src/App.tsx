import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import PageNotFound from './pages/PageNotFound';
import HomePage from './pages/HomePage';
import HomeMain from './routes/HomeMain';
import ProjectsMain from './routes/ProjectsMain';
import ChallengesMain from './routes/ChallengesMain';
import Contact from './sections/Contact';
function App() {
  const [darkModeIsOn, setDarkModeIsOn] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<HomePage darkModeIsOn={darkModeIsOn} setDarkModeIsOn={setDarkModeIsOn} />}>
          <Route path="/" element={<HomeMain darkModeIsOn={darkModeIsOn} />} />
          <Route path="projects" element={<ProjectsMain darkModeIsOn={darkModeIsOn} />} />
          <Route path="challenges" element={<ChallengesMain darkModeIsOn={darkModeIsOn} />} />
          <Route path="contact" element={<Contact darkModeIsOn={darkModeIsOn} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
