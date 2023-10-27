import { motion } from 'framer-motion';

export function SocialNetworks({ children, href }) {
	return (
		<motion.a
			href={href}
			whileHover='whileHover'
			whileTap='whileTap'
			variants={{
				whileHover: {
					scale: 1.2,
				},
				whileTap: {
					scale: 0.8,
				},
			}}>
			{children}
		</motion.a>
	);
}
