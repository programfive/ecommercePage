import { useRef } from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickOutside ';
import { AnimatePresence, motion } from 'framer-motion';
export function ContentCart({
	children,
	isOpenProducts,
	toggleIsOpenProducts,
}) {
	const contentRef = useRef(null);
	useOnClickOutside(contentRef, toggleIsOpenProducts);
	return (
		<AnimatePresence>
			{isOpenProducts && (
				<motion.div
					ref={contentRef}
					variants={{
						open: {
							y: 0,
							opacity: 1,
						},
						closed: {
							y: '20%',
							opacity: 0,
						},
					}}
					initial='closed'
					animate='open'
					exit={{
						y: '20%',
						opacity: 0,
						transition: {
							duration: 0.3,
						},
					}}
					className='absolute top-0 mt-20 sm:w-80 w-screen right-0 z-20'>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	);
}
