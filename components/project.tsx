import Link from 'next/link';
import React from 'react'
import {motion} from 'framer-motion'

function project() {
  const projects = [1, 2, 3];
  return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1.5,
			}}
			className="max-w-5xl min-h-screen mx-auto text-center flex flex-col justify-center p-10  ">
			<h3 className="text-gray-500 uppercase text-2xl tracking-[12px] mt-10">
				Project
			</h3>

			<div className="flex overflow-x-scroll space-x-5 max-w-5xl w-full min-h-screen px-5 snap-x snap-mandatory mt-10 ">
				{projects.map((project, i) => (
					<div
						className="w-[500px] h-[700px] md:w-[600px] xl:w-[700px] flex flex-col  flex-shrink-0 p-10 text-left space-y-5 snap-center hover:shadow-md rounded-lg hover:shadow-gray-300 m-3 items-center opacity-80 hover:opacity-100"
						key={i}>
						<Link href="https://github.com/Kqyang29/React-Gmail-clone">
							<motion.img
								initial={{
									y: -100,
									opacity: 0,
								}}
								whileInView={{
									opacity: 1,
									y: 0,
								}}
								viewport={{ once: true }}
								transition={{
									duration: 1.2,
								}}
								src="./Airbnb Clone.png"
								alt=""
								className="rounded-sm h-[100px] w-[200px] object-center cursor-pointer"
							/>
						</Link>
						<div className="p-2 md:p-10 space-y-5">
							<p className="font-bold text-2xl ">
								Project {i + 1} of {projects.length}: Airbnb Clone
							</p>

							<div className="flex items-center space-x-3">
								<img
									src="./Airbnb Clone.png"
									alt=""
									className="w-10 h-10 rounded-full mb-4"
								/>
							</div>

							<Link href="https://react-gmail-clone-rho.vercel.app">
								<h3 className="font-semibold text-lg cursor-pointer text-blue-500">
									https://react-gmail-clone-rho.vercel.app
								</h3>
							</Link>

							<ul className="text-lg list-disc space-y-5 ml-10">
								<li>Porject Points</li>
								<li>Porject Points</li>
								<li>Porject Points</li>
								<li>Porject Points</li>
								<li>Porject Points</li>
							</ul>
						</div>
					</div>
				))}
			</div>
		</motion.div>
	);
}

export default project
