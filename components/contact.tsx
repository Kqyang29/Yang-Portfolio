import React from 'react'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
	name: string;
	subject: string;
  email: string;
  message:string,
};

function Contact() {
  const {register,handleSubmit}=useForm<FormValues>();
  
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    window.location.href = `mailto:yangkq0417@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}, ${data.message} (${data.email})`;
  };
  
  return (
		<div className="flex flex-col max-w-6xl w-full h-screen mx-auto items-center justify-center">
			<h3 className="text-2xl text-gray-500 uppercase tracking-[12px] mt-16">
				Contact
			</h3>

			<div className="flex flex-col items-center space-y-7 mt-10">
				<div className="flex flex-col items-center space-y-10">
					<h3 className="flex items-center">
						<PhoneIcon className="w-7 h-7 text-[#F7ab0a]/40 animate-pulse" />
						<p>+1 626 438 6612</p>
					</h3>

					<h3 className="flex items-center">
						<EnvelopeIcon className="w-7 h-7 text-[#F7ab0a]/40 animate-pulse" />
						<p>yangkq0417@gmail.com</p>
					</h3>

					<h3 className="flex items-center">
						<MapPinIcon className="w-7 h-7 text-[#F7ab0a]/40 animate-pulse" />
						<p>10633 Reseda Blvd</p>
					</h3>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col space-y-5">
					<div className="space-x-3">
						<input
							className="contactInput"
							type="text"
							placeholder="Name"
							{...register("name")}
						/>
						<input
							className="contactInput"
							type="email"
							placeholder="Email"
							{...register("email")}
						/>
					</div>
					<input
						className="contactInput"
						type="text"
						placeholder="Subject"
						{...register("subject")}
					/>
					<textarea
						className="contactInput"
						placeholder="Message"
						{...register("message")}
					/>

					<button
						type="submit"
						className="bg-[#f7ab0a]/40 p-3 hover:bg-[#f7ab0a] rounded-md text-md font-bold">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default Contact;
