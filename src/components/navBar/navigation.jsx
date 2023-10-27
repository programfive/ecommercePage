import { motion } from 'framer-motion';
import { Links } from './Links';

// eslint-disable-next-line react/prop-types
export function Navigation({ isOpen }) {
	return (
		<motion.nav
			variants={{
				open: {
					x: 'var(--x-open)',

					transition: {
						type: 'Tween',
						stiffness: 80,
						restDelta: 0.01,
					},
				},
				closed: {
					x: 'var(--x-closed)',

					transition: {
						delay: 0.5,
						type: 'Tween',
						stiffness: 400,
						damping: 40,
					},
				},
			}}
			initial='closed'
			animate={isOpen ? 'open' : 'closed'}
			className='fixed inset-0 bg-white w-80 max-w-[calc(100%-3rem)] md:w-auto  md:static 
      [--opacity-closed:0%] md:[--opacity-closed:100%] [--opacity-open:100%] 
      [--x-open:0%] [--x-closed:-100%] md:[--x-closed:0%]'>
			<Links />
		</motion.nav>
	);
}
