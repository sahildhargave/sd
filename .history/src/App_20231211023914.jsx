import { Route, BrowserRouter as Router, Router } from 'react-router-dom';
import Navbar from './components/Navbar';

export const App = () => {
  return (
	<main className="bg-slate-300/20">
		<Router>
			<Navbar/>
			<Router>
				<Route path="/" element={"Home"}/>
				<Route path="/about" element={"About"}/>
				<Route path="/contact" element={"Contact"}/>
				<Route path="/projects" element={"Projects"}/>

			</Router>
		</Router>
	</main>

  )
}
