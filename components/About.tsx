import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typing';
import { urlFor } from '../sanity';

type Props = {
	pageInfo: PageInfo;
}

function About({ pageInfo }: Props) {
	// console.log(pageInfo)
	return (
		<div className="max-w-6xl h-screen mx-auto flex flex-col items-center space-y-5">
			<h3 className="text-gray-500 text-xl uppercase tracking-[24px] mt-16">
				About
			</h3>

			<div className="flex flex-col md:flex-row items-center space-x-5">
				<img
					src={urlFor(pageInfo?.profilePic).url()}
					alt={pageInfo?.name}
					className="rounded-full md:rounded-lg -mt-2 mr-2 w-32 h-32 md:w-56 md:h-56 hover:scale-105 transition transform duration-150"
				/>

				<div className="-mt-5">
					<div className="flex items-center ml-12 md:ml-0">
						{/* left */}
						<motion.div
							initial={{
								y: 200,
								opacity: 0,
							}}
							whileInView={{
								y: 0,
								opacity: 1,
							}}
							viewport={{ once: true }}
							transition={{
								duration: 1.2,
							}}
							className="text-left whitespace-nowrap space-y-5 px-6 md:px-10 text-sm md:text-lg">
							<h2>
								Name: <span className="text-[#F7BA0A]">{pageInfo?.name}</span>
							</h2>

							<h2>
								Major: <span className="text-[#F7BA0A]">Computer Science</span>
							</h2>

							<h2>
								Degree: <span className="text-[#F7BA0A]">Bachelor</span>
							</h2>

							<h2>
								Post: <span className="text-[#F7BA0A]">{pageInfo?.role}</span>
							</h2>
						</motion.div>

						{/* right */}
						<motion.div
							initial={{
								y: -200,
								opacity: 0,
							}}
							whileInView={{
								y: 0,
								opacity: 1,
							}}
							viewport={{ once: true }}
							transition={{
								duration: 1.2,
							}}
							className="p-10 flex flex-col justify-between space-y-5 whitespace-nowrap">
							<div className="space-y-5 border-l border-[#F7BA0A] h-24 p-2 text-center">
								<span className="text-white text-xs rounded-full shadow-sm bg-gray-600 shadow-gray-200 p-2">
									Aug 2018 - Aug 2020
								</span>
								<h3 className="text-xs md:text-base">Pasadena City College</h3>
							</div>

							<div className="space-y-5 border-l border-[#F7BA0A] h-24 px-5 text-center">
								<span className="text-white text-xs rounded-full shadow-sm bg-gray-600 shadow-gray-200 p-2">
									Aug 2020 - Now
								</span>
								<h3 className="text-xs md:text-base">
									California State University Northridge
								</h3>
							</div>
						</motion.div>
					</div>

					<motion.div
						initial={{
							opacity: 0,
						}}
						whileInView={{
							opacity: 1,
						}}
						viewport={{ once: true }}
						transition={{
							duration: 1.2,
						}}
						className="-mt-5 md:-mt-0 px-0 md:px-5">
						<p className="text-sm md:text-base max-w-2xl text-left">
							{pageInfo?.bgInfomation}
						</p>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

export default About
