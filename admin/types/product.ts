import { ICategory } from "./category";

export interface IProduct{
	id:number;
	title:string;
	description:string;
	price:number;
	photo?:string;
	isActive:boolean;
	category:ICategory;
	parametrs:InfoType[];
}

export interface ICreateProduct{
	title:string;
	description:string;
	price:number;
	photo?:string;
	categoryId:number;
}

export type InfoType = {
	id?:number;
	title:string;
	description:string;
}
