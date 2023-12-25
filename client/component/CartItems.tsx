"use client";
import Image from "next/image";
import {BsTrash} from 'react-icons/bs';
import {IOrderProduct, changeQuantity, removeProduct} from "@/store/features/orderSlice";
import {useAppDispatch} from "@/store/hooks";
import {motion} from "framer-motion";

function CartItems({item}: {item: IOrderProduct}) {
	const dispatch = useAppDispatch();

	return ( 
		<div className="w-full grid grid-cols-12 items-center rounded border border-gold-200/60 p-2 gap-5 mb-5">
			<Image 
				className="col-span-4 md:col-span-2" 
				src={process.env.API_URL + '/' + item.photo} 
				width={100} 
				height={100} 
				alt={'photo'} 
			/>
			<div className="col-span-8 w-full h-full flex flex-col">
				<h4 className="text-lg text-gold-200">{item.title}</h4>
				<h5 className="font-bold text-lg text-gold-100">Цена: {item.price} ₽</h5>
			</div>
			<input
				onChange={(e) => dispatch(changeQuantity({id: item.id, quantity: Number(e.target.value)}))} 
				type="number" 
				defaultValue={item.quantity} 
				className="col-span-6 md:col-span-1 w-10 h-10 bg-gold-100 text-2xl rounded p-2 ml-5 md:ml-0" 
			/>
			<motion.button 
				whileTap={{ scale: 0.8 }} 
				onClick={() => dispatch(removeProduct(item.id))}
				className="col-span-6 md:col-span-1 flex items-center justify-end md:justify-center mr-5 md:mr-0">
				<BsTrash className="text-2xl text-gold-200" />
			</motion.button>
		</div>
	 );
}

export default CartItems;