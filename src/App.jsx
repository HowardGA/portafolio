import { useState } from 'react'
import './App.css'
import './index.css'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/sections/Home'
import {motion} from 'framer-motion'
import { ThemeProvider, useTheme } from './context/ThemeContext' 
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import { Timeline } from './components/sections/Timeline'
import Clients from './components/sections/Clients'
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext'
import { Demos } from './components/sections/Demos'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <ThemeProvider>
        <LanguageProvider>
          <AppContent isLoaded={isLoaded} setIsLoaded={setIsLoaded} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}

function AppContent({ isLoaded, setIsLoaded, menuOpen, setMenuOpen }) {
  
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
      <motion.section 
        className='relative min-h-screen overflow-hidden'
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

        <div className={`transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          <Demos />
          <Projects />
          <Timeline />
          <Clients />
          <Contact />
          <Footer />
        </div>
      </motion.section>
    </>
  );
}

export default App;