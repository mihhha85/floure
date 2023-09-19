import CatalogItem from '@/components/catalogItem/CatalogItem';
import styles from "./CatalogBox.module.scss";
import { ICatalogItem } from "@/types/CatalogTypes";

const fetchData = async ():Promise<ICatalogItem[] | undefined> => {
	try{
		const response = await fetch(`${process.env.serverUri}/catalog`, {
			next: {revalidate:0}
		});

		if(response.ok){
			const data = await response.json();
			return data;
		}

		return undefined;

	}catch(err){
		console.log(err);
	}
}

async function CataLogBox() {

	const data = await fetchData();
	
	if(data && data.length > 0){

		return ( 
			<div className={styles.catalog}>
				<div className='container'>
					<div className={styles.catalogContainer}>
							{data.map((item:ICatalogItem) => 
								<CatalogItem 
									key={item.id}
									id={item.id} 
									title={item.title}
									price={item.price}
									description={item.description}
									photo={item.photo}
								/>
							)}
					</div>
				</div>	
			</div>
		);
	}else{
		return (
			<h3>Ошибка!!! Не удалось получить список продуктов</h3>
		)
	}	
}

export default CataLogBox;