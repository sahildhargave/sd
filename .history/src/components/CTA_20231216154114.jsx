
import { Links } from 'react-router-dom';

const CTA =()=> {
	return(
		<section className='cta'>
			<p 
			className='cta-text'>
				Have a project's idea in mind? <br className='sm:block hidden'/>
				Let's build something together!
			</p>
			<Links to='/contact' className='btn'>
            Contact
			</Links>
		</section>
	);
};

export default CTA;