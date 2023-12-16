import { Route, BrowserRouter as Router , Routes} from 'react-router-dom';

export const App = () => {
  return (
	<main className="bg-slate-300/20">
		<Router>
			<Router>
				<Route path="/" element={"Home"}/>
				<Route path="/about" element={"About"}/>
				<Route path="/contact" element={"Contact"}/>
				<Route path="/contact" element={"Projects"}/>

			</Router>
		</Router>
	</main>

  )
}
