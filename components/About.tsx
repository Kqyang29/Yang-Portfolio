import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typing';
import { urlFor } from '../sanity';


function About() {
	// console.log(pageInfo)
	return (
		<div className="max-w-6xl h-screen mx-auto flex flex-col items-center mb-20 pt-14 md:pt-0">
			<h3 className="text-gray-500 text-xl uppercase tracking-[24px] mt-16">
				About
			</h3>

			<div className="flex flex-col items-center ">
				<div className="my-10">
					<div className="flex items-center flex-row md:ml-0 space-x-8 ">
						<img
							src="./me.jpg"
							alt=""
							className="rounded-full w-24 h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 hover:scale-105 transition transform duration-150"
						/>
						<div className='flex items-center  md:mt-5'>
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
								className="text-left whitespace-nowrap space-y-5 text-xs md:text-lg ">
								<h2>
									Name: <span className="text-[#F7BA0A]">Kangqiang Yang</span>
								</h2>

								<h2>
									Major:{" "}
									<span className="text-[#F7BA0A]">Computer Science</span>
								</h2>

								<h2>
									Degree: <span className="text-[#F7BA0A]">Bachelor</span>
								</h2>

								<h2>
									Post:{" "}
									<span className="text-[#F7BA0A]">Front End Engineer</span>
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
								className="px-10 flex-col justify-between space-y-5 whitespace-nowrap hidden md:inline-flex">
								<div className="space-y-5 border-l border-[#F7BA0A] h-24 p-2 text-center">
									<span className="text-white text-xs rounded-full shadow-sm bg-gray-600 shadow-gray-200 p-2">
										Aug 2018 - Aug 2020
									</span>
									<h3 className="text-xs md:text-base">
										Pasadena City College
									</h3>
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
					</div>
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
					className="px-10 lg:px-0">
					<p className="text-sm md:text-base max-w-lg md:max-w-3xl text-left">
						Hello! My name is Kangqiang Yang and I am currently an undergraduate
						student majoring in Computer Science at California State University,
						Northridge. Strong growth mindset, addicted to learning, love
						problem solving, have a strong interest in front-end development,
						and can use programming languages including HTML+CSS, JS, REACT,
						NEXTJS, TailwindCSS.
					</p>
				</motion.div>
			</div>
		</div>
	);
}

export default About
