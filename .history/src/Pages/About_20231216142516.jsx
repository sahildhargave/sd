import React from 'react'

const About = () => {
  return (
	<section className="max-container">
	<div className="head-text">
		Hello, I' m{" "}
		<span className='blue-gradient_text font-semibold drop-shadow'>
			{" "}
			Sahil
			
		</span>{" "}
		👋
	</div>

	<div className='mt-5 flex flex-col gap-3 text-slate-500'>
		<p>
			Software Developer , Specializing in Web developing
			<span className='pink font-semibold drop-shadow'>
				{" "}
				Familiar with Microservices
			</span>
			{" "}
			 and 
			Flutter APP with AI and new Technology enthusiastic
		</p>
	</div>
	</section>
  )
}

export default About
