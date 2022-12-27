import Link from 'next/link';
import React from 'react'
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from '../sanity';
import { PageInfo } from '../typing';

type Props = {
	pageInfo: PageInfo;
}
function Hero() {
	// console.log(pageInfo);
	const [text, count] = useTypewriter({
		words: [
			`Hi, My Name is Kangqiang Yang`,
			"A Guy who passionate to build the Web Application",
		],
		loop: true,
		delaySpeed: 1500,
	});
	return (
		<div className="flex flex-col items-center justify-center relative  text-center space-y-5 h-screen">
			<div className="w-full absolute top-[25%] bg-[#F7AB0A]/10 h-[200px] -skew-y-12" />

			<img
				src='./me.jpg'
				alt=""
				className="w-32 h-32 rounded-full absolute top-20"
			/>

			<div className="space-y-5 -mt-5">
				<h2 className="uppercase tracking-[12px] text-lg text-gray-500">
					Front End Engineer
				</h2>

				<h1 className="text-white text-2xl">
					<span>{text}</span>
					<Cursor cursorColor="#F7AB0A" />
				</h1>
			</div>

			<div className="space-x-10 absolute bottom-20 pb-20 text-gray-500">
				<Link href="#about">
					<button className="heroBtn">About</button>
				</Link>

				<Link href="#project">
					<button className="heroBtn">Project</button>
				</Link>

				<Link href="#contact">
					<button className="heroBtn">Contact</button>
				</Link>
			</div>
		</div>
	);
}

export default Hero
