import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import {Home, About, Contact , Projects} from './Pages';

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Router>
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <Routes>
				<Route path="/" element={"Home"}/>
				<Route path="/about" element={<About/>}/>
				<Route path="/contact" element={<Contact/>}/>
				<Route path="/projects" element={<Projects/>}/>

			</Routes>
      </Router>
    </main>
  );
};