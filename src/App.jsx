import { useState } from 'react'
import './App.css'
import './index.css'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/sections/Home'
import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import {motion} from 'framer-motion'
import { ThemeProvider, useTheme } from './context/ThemeContext' 
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import { Timeline } from './components/sections/Timeline'
import Clients from './components/sections/Clients'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <ThemeProvider>
        <AppContent isLoaded={isLoaded} setIsLoaded={setIsLoaded} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </ThemeProvider>
    </>
  );
}

function AppContent({ isLoaded, setIsLoaded, menuOpen, setMenuOpen }) {
  const { backgroundImage } = useTheme(); 
  
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
      <motion.section 
        style={{backgroundImage}}
        className='relative min-h-screen overflow-hidden bg-gray-950 text-gray-200'
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

        <div className={`transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} text-gray-100`}>
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          <Projects />
          <Timeline />
          <Clients />
          <Contact />
        </div>
        <div className='absolute inset-0 z-0'>
          <Canvas>
            <Stars radius={70} count={3500} factor={6} fade speed={2}/>
          </Canvas>
        </div>
      </motion.section>
    </>
  );
}

export default App;