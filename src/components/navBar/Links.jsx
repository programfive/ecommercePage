import { motion } from 'framer-motion';
import { LINKS } from '../../tools/links';
export function Links() {
	return (
		<motion.ul
			variants={{
				open: {
					transition: {
						staggerChildren: 0.16,
						delayChildren: 0.2,
					},
				},
				closed: {
					transition: {
						staggerChildren: 0.1,
						staggerDirection: -1,
					},
				},
			}}
			className='mt-28 px-4 link md:mt-0 flex flex-col md:flex-row  gap-6'>
			{LINKS.map((link, index) => (
				<motion.li
					variants={{
						open: {
							y: 0,
							opacity: 1,
							transition: {
								y: {
									stiffness: 1000,
									velocity: -100,
								},
							},
						},
						closed: {
							y: 'var(--y-closed)',
							opacity:
								'var(--opacity-closed)',
							transition: {
								y: { stiffness: 3000 },
							},
						},
					}}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
					className='hover:text-primary-orange  [--y-closed:50%] [--opacity-closed:0%] md:[--opacity-closed:100%] md:[--y-closed:0%] md:text-neutral-darkGrayishBlue font-bold md:font-normal text-neutral-veryDarkBlue '
					key={index}>
					<a
						className='capitalize outline-none bg-white after:bg-primary-orange  after:absolute 
							pb-9  relative after:bottom-0 
							after:left-0 after:right-0 after:rounded-lg after:w-full after:h-[.1875rem] 
							after:origin-right'
						href={link.to}>
						{link.name}
					</a>
				</motion.li>
			))}
		</motion.ul>
	);
}
