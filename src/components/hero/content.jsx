import { useState,useRef } from 'react';
import { Product } from './product';
import { ProductDescription } from './productDescription';
import { AnimatePresence, motion } from 'framer-motion';
import { useOnClickOutside } from '../../hooks/useOnClickOutside ';
import product from "../../tools/products.json";
export function Content({
	setCantProduct,
	setProducts,
	cantProduct,
}) {
	const [openPreview, setOpenPreview] = useState(false);
	const contentRef = useRef(null);
	useOnClickOutside(contentRef, setOpenPreview);
	return (
		<main className='flex sm:px-4  lg:mb-10 justify-center flex-col md:flex-row gap-x-10 gap-y-4 lg:gap-x-20 items-center max-w-6xl mx-auto sm:mt-10 md:mt-20'>
			<motion.div
				variants={{
					hidden: { x: -100, opacity: 0 },
					visible: { x: 0, opacity: 1 ,	transition: { 
						delay: 0.5,
						type:'spring'
					},},
				}}
				initial='hidden'
				animate='visible'>
				<AnimatePresence>
					{openPreview ? (
						<motion.div
							className='fixed hidden md:flex w-screen inset-0 h-screen bg-black bg-opacity-80 z-50  justify-center items-center '
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}>
							<div
								ref={contentRef}
								className='w-full max-w-lg m-auto'>
								<Product
									openPreview={
										openPreview
									}
									product={product}
									setOpenPreview={
										setOpenPreview
									}
								/>
							</div>
						</motion.div>
					) : null}
				</AnimatePresence>
				<div className=' max-w-sm  '>
					<Product
						product={product}
						setOpenPreview={setOpenPreview}
					/>
				</div>
			</motion.div>
			<motion.div
				variants={{
					hidden: {
						x: 100,
						opacity: 0,
					},
					visible: {
						x: 0,
						opacity: 1,
						transition: {
							delay: 0.7,
							type: 'spring',
						},
					},
				}}
				initial='hidden'
				animate='visible'
				className=' max-w-lg'>
				<ProductDescription
					cantProduct={cantProduct}
					setCantProduct={setCantProduct}
					setProducts={setProducts}
					product={product}
				/>
			</motion.div>
		</main>
	);
}
