import { SocialNetworks } from './socialNetworks';
import { IconGitHup } from '../icons/iconGitHup';
import { IconYouTube } from '../icons/iconYouTube';
import { IconFaceBook } from '../icons/iconFaceBook';
import { motion } from 'framer-motion';
export function Footer() {
	return (
		<motion.footer
			variants={{
				hidden: {
					x: -100,
					opacity: 0,
				},
				visible: {
					x: 0,
					opacity: 1,
					transition: {
						delay: 0.6,
						type: 'spring',
					},
				},
			}}
			initial='hidden'
			animate='visible'
			className='p-4 grid max-w-7xl place-content-center md:place-content-end '>
			<div className='w-full text-neutral-darkGrayishBlue  flex gap-4 text-onSurface md:w-auto mb-4 md:mb-0'>
				<h3 className='text-lg '>
					{' '}
					Follow me in:{' '}
				</h3>

				<div className='flex gap-2 text-gray-600'>
					<SocialNetworks href='https://github.com/programfive'>
						<IconGitHup className='w-6 h-6' />
					</SocialNetworks>
					<SocialNetworks href='https://www.youtube.com/channel/UC57Ih2DlIPan9iWqd2VQSRg'>
						<IconYouTube className='w-6 h-6 ' />
					</SocialNetworks>
					<SocialNetworks href='https://www.facebook.com/profile.php?id=100078065295761&mibextid=LQQJ4d'>
						<IconFaceBook className='w-6 h-6 ' />
					</SocialNetworks>
				</div>
			</div>
		</motion.footer>
	);
}
