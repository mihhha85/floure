"use client"
import { useState } from "react";
import {motion, AnimatePresence} from "framer-motion";
import Image from "next/image";
import img from "@/public/rose_btn.png";
import img2 from "@/public/carnation_btn.png";

const variants = {
	hidden: { 
		opacity: 0,
		scale:0.8 
	},
	visible: { 
		opacity: 1,
		scale:1, 
	},
}

type materialType = 'rose' | 'carnation';

function Material() {
	const [material, setMaterial] = useState<materialType>('rose');

	return ( 
		<div className="grid grid-cols-1 lg:grid-cols-2 w-full px-5 xl:px-20 gap-x-10">
			<div className="p-5 rounded-xl border-2 border-base">
				<AnimatePresence mode="wait">
					{material === 'rose' && 
						<motion.div
							key={material}
							variants={variants}
							initial="hidden"
							animate="visible"
							exit="hidden"
							transition={{duration: 0.5}}
						>
						<h4 className="text-2xl font-semibold text-gold-200">Розы</h4>
						<p className="text-xl text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente minus iste in. 
						Maxime quos quaerat dignissimos quae ut corrupti. Voluptates dolore possimus ducimus 
						doloremque et natus amet corporis illo voluptatum.</p>
						</motion.div>
					}
					{material === 'carnation' && 
						<motion.div
							key={material}
							variants={variants}
							initial="hidden"
							animate="visible"
							exit="hidden"
							transition={{duration: 0.5}}
						>
						<h4 className="text-2xl font-semibold text-gold-200">Гвоздики</h4>
						<p className="text-xl text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente minus iste in. 
						Maxime quos quaerat dignissimos quae ut corrupti. Voluptates dolore possimus ducimus 
						doloremque et natus amet corporis illo voluptatum.</p>
						</motion.div>
					}
				</AnimatePresence>
			</div>
			<div className="py-10">
				<Image
					onClick={() => setMaterial('rose')} 
					className="inline ml-5 cursor-pointer"
					src={img} alt="rose" width={100} height={100} 
				/>
				<Image
					onClick={() => setMaterial('carnation')} 
					className="inline ml-5 cursor-pointer"
					src={img2} alt="rose" width={100} height={100} 
				/>
			</div>
		</div>
	);	
}

export default Material;