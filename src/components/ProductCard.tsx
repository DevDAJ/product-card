export default function NFTCard() {
	return (
		<div className='bg-card w-[clamp(330px,_60vw,_1300px)] h-[600px] md:h-[400px] flex flex-wrap box-border rounded-xl text-[14px] overflow-clip'>
			<img
				srcSet='./image-product-mobile.jpg 480w, ./image-product-desktop.jpg 768w'
				sizes='(max-width: 600px) 480px, 768px'
				src='./image-product-desktop.jpg'
				alt='product'
				className='w-full h-[40%] md:w-[45%] md:h-full object-cover'
			/>
			<div className='w-full h-[60%] md:w-[55%] md:h-full p-3 md:p-10 flex flex-col justify-between'>
				<span>P E R F U M E</span>
				<h1>Gabrielle Essence Eau De Parfum</h1>
				<article>
					<p>
						A floral, solar and voluptuous interpretation composed by Olivier
						Polge, Perfumer-Creator for the House of CHANEL.
					</p>
				</article>
				<div className='flex items-center gap-5'>
					<h2 className='text-ascent'>$149.99</h2>
					<span className='line-through'>$169.99</span>
				</div>
				<button className='flex items-center justify-center gap-3 p-3 bg-ascent w-full rounded-md text-white'>
					<img src='./icon-cart.svg' alt='cart' />
					Add to Cart
				</button>
			</div>
		</div>
	);
}
