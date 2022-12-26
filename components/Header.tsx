import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion';
function Header() {
  return (
		<header className="sticky top-0 w-full">
			<div className="max-w-6xl mx-auto py-4 px-5  flex items-center justify-between z-20 ">
				{/* left */}
				<motion.div
					initial={{
						x: -500,
						opacity: 0,
						scale: 0.5,
					}}
					animate={{
						x: 0,
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 1.5,
					}}
					className="space-x-5 ">
					<SocialIcon
						url="https://github.com/Kqyang29?tab=repositories"
						fgColor="lightgray"
						bgColor="transparent"
					/>
					<SocialIcon
						url="https://github.com/Kqyang29?tab=repositories"
						fgColor="lightgray"
						bgColor="transparent"
					/>
					<SocialIcon
						url="https://github.com/Kqyang29?tab=repositories"
						fgColor="lightgray"
						bgColor="transparent"
					/>
				</motion.div>

				{/* right */}
				<motion.div
					initial={{
						x: 500,
						opacity: 0,
						scale: 0.5,
					}}
					animate={{
						x: 0,
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 1.5,
					}}
					className="mr-5">
					<a
						href="Kangqiang Yang Resume.pdf"
						download="Kangqiang Yang Resume.pdf">
						<button className="uppercase rounded-full shadow-sm shadow-gray-400 p-2 text-sm text-gray-300 hover:bg-slate-500 ">
							Download the Resume
						</button>
					</a>
				</motion.div>
			</div>
		</header>
	);
}

export default Header
