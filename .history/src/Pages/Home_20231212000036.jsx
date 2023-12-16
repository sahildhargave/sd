import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';

const Home = () => {
	const adjustIslandForScreenSize = () => {
		let screenScale = null; 
		let  screenPosition = [0, -6.5, -43];

		if(window.innerWidth < 768){
			screenScale = [0.9, 0.9, 0.9];
		}else{
			screenScale = [1, 1, 1];
		}
		return [screenScale, screenPosition]
	}

	const [islandScale, islandPosition] = adjustIslandForScreenSize();


  return (
	<section className="relative w-full h-screen ">
		<Canvas className='w-full h-screen bg-transparent'
		camera={{ near: 0.1, far: 1000}}
		>
			<Suspense fallback={<Loader/>}>
            <directionalLight/>
			<ambientLight/>
			<pointLight/>
			<spotLight/>
			<hemisphereLight/>
            <Island
			position = {islandPosition}
			scale={islandScale}
			/>
			</Suspense>

         
		</Canvas>
	</section>
  )
}

export default Home
