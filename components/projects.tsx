import Link from 'next/link';
import React from 'react'
import {motion} from 'framer-motion'
import { Project } from '../typing';
import { urlFor } from '../sanity';
import ProjectRes from "../ProjectRes.json";


type Props = {
	projects: Project[];
}
function Projects() {

	let image: any;
	const projects = ProjectRes.result;
	console.log(projects[3]);
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

			<div className="flex overflow-x-scroll space-x-5 max-w-5xl w-full min-h-screen px-5 snap-x snap-mandatory  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
				{projects.map((project, i) => (
					<div
						className="w-[500px] h-[800px] md:w-[600px] xl:w-[700px] flex flex-col  flex-shrink-0 px-5 text-left space-y-5 snap-center hover:shadow-md rounded-lg hover:shadow-gray-300 my-10 opacity-80 hover:opacity-100 "
						key={i}>
						<div className='flex flex-col items-center mt-5'>
							<a href={project?.githubLink}>
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
									src={urlFor(project.image).url()}
									alt=""
									className="rounded-sm object-center cursor-pointer h-[200px]"
								/>
							</a>
						</div>
						<div className="p-2 md:p-10 space-y-5">
							<p className="font-bold text-2xl ">
								Project {i + 1} of {projects.length}: {project.title}
							</p>

							<div className="flex items-center space-x-3">
								{project.tech.map((techs, i) => (
									<img
										key={i}
										src={urlFor(techs.image).url()}
										alt=""
										className="w-10 h-10 rounded-full mb-4 border rounded-full p-[2px]"
									/>
								))}
							</div>

							<Link href="https://react-gmail-clone-rho.vercel.app">
								<h3 className="font-semibold text-md cursor-pointer md:whitespace-nowrap text-blue-500">
									https://react-gmail-clone-rho.vercel.app
								</h3>
							</Link>

							<ul className="text-lg list-disc space-y-3 ml-10">
								{project.points.map((point, i) => (
									<li key={i}>{point}</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</motion.div>
	);
}

export default Projects
