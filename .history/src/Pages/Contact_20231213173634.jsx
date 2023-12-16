import React,{ useState } from 'react'

const Contact = () => {
	const [form, setForm] = useState({ name:'', email:'', message:''})
 
	const handleChange = () =>  {

	}
	const handleFocus =()=>{}

	const handleBlur =() =>{}

	return (
	<section className='relative flex lg:flex-row flex-col max-container'>
		<div className="flex-1 min-w-[50% flex flex-col">
<h1 className="head-text"> Get in Touch</h1>
<form className='w-full flex flex-col gap-7 mt-14'>
	<label className='text-black-500 font-semibold'>
		Name
		<input
		type="text"
		name="name"
		className='input'
		placeholder='Sam'
		required
		value={form.name}
		onChange={handleChange}
		onFocus={handleFocus}
		onBlur={handleBlur}
		/>
	</label>

	<label className='text-black-500 font-semibold'>
		Email
		<input
		type="text"
		name="email"
		className='input'
		placeholder='Sam@gmail.com'
		required
		value={form.name}
		onChange={handleChange}
		onFocus={handleFocus}
		onBlur={handleBlur}
		/>
</label>
		<label className='text-black-500 font-semibold'>
		Your Message
		<textarea
		
		name="message"
		className='textarea'
		rows='4'
		placeholder='Write your message here...'
	
		value={form.message}
		onChange={handleChange}
		onFocus={handleFocus}
		onBlur={handleBlur}
		/>


	</label>
	<button
	type='submit'
	disabled={loading}
	className='btn'
	onFocus={handleFocus}
	onBlur={handleFocus}
	>
{loading? "Sending...": "Submit"}

	</button>
</form>
		</div>

	</section>
  )
}

export default Contact
