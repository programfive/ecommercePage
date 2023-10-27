import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconNext } from '../icons/iconNext';
import { IconClosed } from '../icons/iconClosed';

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
	return Math.abs(offset) * velocity;
};
export const Product = ({
	product,
	setOpenPreview,
	openPreview,
}) => {
	const [[page, direction], setPage] = useState([0, 0]);
	const images = [...product.images];

	const imageIndex =
		((page % images.length) + images.length) %
		images.length;
	const path = images[imageIndex].src;

	const paginate = newDirection => {
		setPage([page + newDirection, newDirection]);
	};

	return (
		<section className='relative flex flex-col gap-4 '>
			{openPreview && (
				<div className='  flex justify-end '>
					<button
						onClick={() =>
							setOpenPreview(false)
						}>
						<IconClosed className='w-12 h-12 text-white' />
					</button>
				</div>
			)}
			<div className=' relative  flex  justify-center  overflow-hidden    '>
				<AnimatePresence
					initial={false}
					custom={direction}>
					<div className=' md:static '>
						<div
							className={`absolute ${
								openPreview
									? 'flex'
									: 'sm:hidden'
							} left-0 top-1/2 transform -translate-y-1/2 ml-4 z-10`}>
							<button
								className='bg-white 
                 shadow-lg stroke-neutral-veryDarkBlue  
             focus:bg-primary-orange focus:stroke-white  rounded-full w-10 h-10 flex rotate-180 justify-center items-center   '
								onClick={() =>
									paginate(-1)
								}>
								<IconNext />
							</button>
						</div>
						<motion.img
							onClick={() =>
								setOpenPreview(true)
							}
							key={page}
							src={path}
							custom={direction}
							variants={{
								enter: direction => {
									return {
										x:
											direction > 0
												? 1000
												: -1000,
										opacity: 0,
									};
								},
								center: {
									zIndex: 1,
									x: 0,
									opacity: 1,
								},
								exit: direction => {
									return {
										zIndex: 0,
										x:
											direction < 0
												? 1000
												: -1000,
										opacity: 0,
									};
								},
							}}
							initial='enter'
							animate='center'
							exit='exit'
							transition={{
								x: {
									type: 'spring',
									stiffness: 300,
									damping: 30,
								},
								opacity: { duration: 0.2 },
							}}
							className={`${
								!openPreview
									? 'md:cursor-pointer'
									: 'pointer-events-none'
							}  w-full h-full sm:rounded-xl   z-10`}
							drag='x'
							dragConstraints={{
								left: 0,
								right: 0,
							}}
							dragElastic={1}
							onDragEnd={(
								e,
								{ offset, velocity },
							) => {
								const swipe = swipePower(
									offset.x,
									velocity.x,
								);

								if (
									swipe <
									-swipeConfidenceThreshold
								) {
									paginate(1);
								} else if (
									swipe >
									swipeConfidenceThreshold
								) {
									paginate(-1);
								}
							}}
						/>
						<div
							className={`absolute right-0  ${
								openPreview
									? 'flex'
									: 'sm:hidden'
							} top-1/2 transform -translate-y-1/2 mr-4  z-10`}>
							<button
								className='shadow-lg  
            bg-white stroke-neutral-veryDarkBlue  
             focus:bg-primary-orange focus:stroke-white 
             rounded-full w-10 h-10 flex justify-center items-center   '
								onClick={() =>
									paginate(-1)
								}>
								<IconNext />
							</button>
						</div>
					</div>
				</AnimatePresence>
			</div>
			<div className='   hidden sm:flex w-full justify-between '>
				{images.map((img, index) => (
					<motion.img
						src={img.src}
						key={index}
						alt={img.src.concat(index)}
						className={`w-20 outline-none rounded-xl ${
							index === imageIndex
								? 'opacity-50 border-4 border-primary-orange'
								: 'opacity-100  '
						}`}
						onClick={() =>
							setPage([
								index,
								index > imageIndex ? 1 : -1,
							])
						}
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.8 }}
						transition={{ duration: 0.2 }}
					/>
				))}
			</div>
		</section>
	);
};
