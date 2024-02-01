import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import PageNotFound from './pages/PageNotFound';
import HomePage from './pages/HomePage';
import HomeMain from './routes/HomeMain';
import ProjectsMain from './routes/ProjectsMain';
import ChallengesMain from './routes/ChallengesMain';
import Contact from './sections/Contact';
import ScrollToTop from './components/smallRusable/ScrollToTop';
import { AnimatePresence } from 'framer-motion';
function App() {
  const [darkModeIsOn, setDarkModeIsOn] = useState(false);
  const cvUrl = 'https://drive.google.com/file/d/1JreMNPBM8B2Qyeb3PuJpA2hTVE9N_K3f/view?usp=drive_link';
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatePresence initial={false}>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route
            path="/"
            element={<HomePage darkModeIsOn={darkModeIsOn} setDarkModeIsOn={setDarkModeIsOn} cvUrl={cvUrl} />}
          >
            <Route path="/" element={<HomeMain darkModeIsOn={darkModeIsOn} cvUrl={cvUrl} />} />
            <Route path="projects" element={<ProjectsMain darkModeIsOn={darkModeIsOn} />} />
            <Route path="challenges" element={<ChallengesMain darkModeIsOn={darkModeIsOn} />} />
            <Route path="contact" element={<Contact darkModeIsOn={darkModeIsOn} />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
