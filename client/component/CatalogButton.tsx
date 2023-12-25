"use client";
import {useState, useEffect} from "react";
import { IoIosCheckmarkCircleOutline, IoMdCloseCircleOutline } from "react-icons/io";
import {motion} from "framer-motion";
import {IOrderProduct, addProduct, removeProduct} from "@/store/features/orderSlice";
import {useAppDispatch, useAppSelector} from "@/store/hooks";

function CatalogButton({id, title, price, photo, quantity = 1}:IOrderProduct) {
	const dispatch = useAppDispatch();
	const {products} = useAppSelector(state => state.order);
	const [isAdded, setIsAdded] = useState(true);
	const product:IOrderProduct = {id, title, price, photo, quantity};

	useEffect(() => {
		let product = products.find(product => product.id === id);
		if (product) {
			setIsAdded(false);
		}else{
			setIsAdded(true);
		}
	}, [id, products]);

	const handleAdd = () => {
		dispatch(addProduct(product));
		const order = localStorage.getItem("order");
		if (order) {
			const orderJson = JSON.parse(order);
			const newOrder = [...orderJson, product];
			localStorage.setItem("order", JSON.stringify(newOrder));	
		}else{
			localStorage.setItem("order", JSON.stringify([product]));
		}

		setIsAdded(false);
	}

	const handleRemove = () => {
		dispatch(removeProduct(id));
		const order = localStorage.getItem("order");
		if (order) {
			const orderJson = JSON.parse(order);
			const newOrder = orderJson.filter((product:IOrderProduct) => product.id !== id);
			localStorage.setItem("order", JSON.stringify(newOrder));	
		}
		
		setIsAdded(true);
	}

	return ( 
		<>
			{isAdded 
				?
				<motion.button
					onClick={handleAdd}
					whileTap={{ scale: 0.6 }} 
					className="flex items-center justify-center btn mt-auto w-[180px]"
				>
					<IoIosCheckmarkCircleOutline className="text-xl text-gold-100 mr-2" />
					<span>Добавить</span>
				</motion.button> 
				:
				<motion.button
					onClick={handleRemove}
					whileTap={{ scale: 0.6 }} 
					className="flex items-center justify-center btn mt-auto w-[180px]"
				>
					<IoMdCloseCircleOutline className="text-xl text-gold-100 mr-2" />
					<span>Удалить</span>
				</motion.button> 
			}
		</>
	);
}

export default CatalogButton;