import { Logo } from '../icons/logo';
import { MenuToggle } from './menuToggle';
import {
	motion,
	useCycle,
	AnimatePresence,
} from 'framer-motion';
import { useRef, useState } from 'react';
import { IconCart } from '../icons/iconCart';
import { Navigation } from './navigation';
import { ProductsCart } from './productsCard';
import { ContentCart } from './contentCart';

export function Header({
	products,
	cantProduct,
	setProducts,
	setCantProduct,
}) {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const [isOpenProducts, toggleIsOpenProducts] =
		useState(false);
	const containerRef = useRef(null);
	return (
		<motion.header
			initial={{ opacity: 0, y:-50}}
			animate={{ opacity: 1, y: 0}}
			transition={{ duration: 0.5, type:'just',delay:0.3, ease: 'easeOut' }}
			className='flex p-4 [y-animation:-50%]  md:py-6 md:justify-between lg:justify-normal items-center max-w-6xl mx-auto border-b  border-gray-300 '>
			<motion.div
				initial={false}
				animate={isOpen ? 'open' : 'closed'}
				ref={containerRef}
				className='mt-3 z-50 md:hidden'>
				<MenuToggle toggle={() => toggleOpen()} />
			</motion.div>
			<div className='mr-auto md:mr-0 ml-2'>
				<Logo />
			</div>

			<div className='lg:mr-auto lg:ml-4 z-40 '>
				<Navigation isOpen={isOpen} />
			</div>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						key='overlay'
						onClick={() => toggleOpen()}
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.5 }}
						exit={{ opacity: 0 }}
						className='fixed inset-0 bg-black z-30'
					/>
				)}
			</AnimatePresence>
			<div className='flex gap-2 sm:relative md:gap-6 items-center'>
				<div className='flex justify-center items-center'>
					<button
						className='relative'
						onClick={() =>
							toggleIsOpenProducts(
								!isOpenProducts,
							)
						}>
						{!cantProduct <= 0 && (
							<div className='absolute -top-2 -right-1 text-sm flex justify-center items-center bg-primary-orange text-white rounded-full w-4 h-4 font-semibold '>
								<span className='text-[10px]'>
									{cantProduct}
								</span>
							</div>
						)}
						<IconCart className='fill-neutral-darkGrayishBlue' />
					</button>
					<ContentCart
						isOpenProducts={isOpenProducts}
						toggleIsOpenProducts={
							toggleIsOpenProducts
						}>
						<ProductsCart
							setCantProduct={setCantProduct}
							setProducts={setProducts}
							products={products}
							cantProduct={cantProduct}
						/>
					</ContentCart>
				</div>

				<img
					className='md:w-12 md:h-12 w-10 h-10 object-contain rounded-full overflow-hidden border-2'
					src='images/image-avatar.png'
				/>
			</div>
		</motion.header>
	);
}
