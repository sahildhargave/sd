
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
//import {Home, About, Contact , Projects} from './Pages';

export const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar/>
        <Routes>
				<Route path="/" element={  " knokd"}/>
				<Route path="/about" element=  " knokd"/>
				<Route path="/contact" element={ " knokd"}/>
				<Route path="/projects" element={ " knokd"}/>

			</Routes>
      </Router>
    </main>
  );
};