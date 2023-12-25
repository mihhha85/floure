import Image from 'next/image';
import logo from '@/public/logo.png';

function Footer() {
	return ( 
		<footer 
			className="relative flex items-end justify-between w-full h-[200px] md:h-[400px] p-5 bg-[url('/footer.png')] bg-contain bg-no-repeat bg-bottom mix-blend-lighten"
		>
			<Image className="relative z-20" src={logo} alt="logo" width={40} height={60} />
			<div className='relative inline-flex flex-col mx-auto text-center z-20'>
				<p className='text-gradient-link'>Публичная оферта</p>
				<p className='text-gradient-link'>Политика конфиденциальности</p>
				<p className='text-gradient-link'>&copy; 2011-2024 recuerda la muerte</p>  
			</div>  
			<Image className="relative z-20" src={logo} alt="logo" width={40} height={60} />
			<div className='absolute w-full h-full bottom-0 left-0 shadow-gradient'></div>
			<div className='absolute w-full h-1/4 bottom-0 left-0 bg-[#0f0e10] bg-opacity-20'></div>
    </footer>
	);
}

export default Footer;