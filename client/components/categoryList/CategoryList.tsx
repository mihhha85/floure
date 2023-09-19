"use client"
import React, { useState, useEffect } from 'react';
import { ICategory } from '@/types/CategoryTypes';
import styles from "./CategoryList.module.scss";
import cn from 'classnames';


function CategoryList() {
	const [category, setCategory] = useState<ICategory[]|[]>([]);
	const [activeCategory, setActiveCategory] = useState<number>(0);

	useEffect(() => {
		(async () => {
			const response = await fetch(process.env.serverUri + '/category');
			if(response.ok){
				const data = await response.json();
				setCategory(data);
			}
		})();
	}, []);

	if(category.length > 0){
		return ( 
			<div className={styles.catagoryListContainer}>

				<div className={styles.categoryListBox}>

					<div 
						data-id="0"
						onClick={(e) => setActiveCategory(+e.currentTarget.dataset.id!)}
						className={cn(styles.categoryListItem, 
							{[styles.active]: activeCategory === 0 ? true : false}
						)}>
						<span>Все товары</span>
					</div>

					{category.map((item: ICategory) => (
						<div 
							key={item.id}
							data-id={item.id.toString()} 
							onClick={(e) => setActiveCategory(+e.currentTarget.dataset.id!)}
							className={cn(styles.categoryListItem, 
								{[styles.active]: activeCategory === item.id ? true : false}
							)}>
							<span>{item.name}</span>
						</div>
					))}
				</div>

			</div>
		);
	}
}

export default CategoryList;