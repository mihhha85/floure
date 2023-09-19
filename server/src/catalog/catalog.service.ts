import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Catalog } from './entities/catalog.entity';
import { Parametrs } from './entities/parametrs.entity';
import { CreateCatalogDto } from './dto/create-catalog.dto';
import { v4 as uuidv4 } from 'uuid';
import { resolve } from 'path';
import * as fs from 'fs';


@Injectable()
export class CatalogService {
	constructor(
    @InjectRepository(Catalog)
    private catalogRepository: Repository<Catalog>,
		@InjectRepository(Parametrs)
		private parametrsRepository: Repository<Parametrs>,
  ) {}

	findAll(): Promise<Catalog[]> {
    return this.catalogRepository.find();
  }

  findOne(id: number): Promise<Catalog | null> {
    return this.catalogRepository.findOne({
			where:{id:id},
			relations:{
				category:true,
				parametrs:true,
				images:true,
			}
		})
  }

	async findByCategory(id: number): Promise<Catalog[]|[]> {
		try{
			return await this.catalogRepository.find({
				where:{category:{id:id}},
			});
		}catch(err){
			throw err;
		}
	}

	async create(dto:CreateCatalogDto, file:any): Promise<void>{
		let category:Catalog | null = null;

		try{
			if(file !== undefined){
				const ext = file.originalname.split('.').pop();
				const filename = uuidv4() + '.' + ext;
				const dirname  = process.env.STATIC_PATH
				if(!fs.existsSync(dirname)){
					fs.mkdirSync(dirname);
				}
				fs.writeFileSync(resolve(dirname, filename), file.buffer);
				category = this.catalogRepository.create({...dto, photo:filename});
				await this.catalogRepository.save(category);
			}else{
				category = this.catalogRepository.create({...dto});
				await this.catalogRepository.save(category);
			}

			const info = JSON.parse(dto.info);
			if(info.length > 0){
				let params = [];
				info.forEach((element: {title:string, description:string}) => {
					let param = {
						title:element.title,
						description:element.description,
						catalog:category,
					};	

					params.push(param);
				});

				await this.parametrsRepository.insert(params);
			}
		}catch(err){
			throw err;
		}
	}

	async update(id: number, dto:CreateCatalogDto, file:any): Promise<void> {
    try{
			const catalog = await this.catalogRepository.findOneOrFail({where: {id:id}})
			const category = await this.catalogRepository.findOneOrFail({where: {id:dto.categoryId}})
			if(file !== undefined){
				const ext = file.originalname.split('.').pop();
				const filename = uuidv4() + '.' + ext;
				const dirname  = process.env.STATIC_PATH
				if(!fs.existsSync(dirname)){
					fs.mkdirSync(dirname);
				}
				fs.writeFileSync(resolve(dirname, filename), file.buffer);
				await this.catalogRepository.update(id, {...dto, photo:filename});
			}else{
				await this.catalogRepository.update(id, {
					title:dto.title,
					description:dto.description,
					price:dto.price,
				});
			}

			await this.parametrsRepository.delete({catalog:{id:id}});
			const info = JSON.parse(dto.info);
			if(info.length > 0){
				let params = [];
				info.forEach((element: {title:string, description:string}) => {
					let param = {
						title:element.title,
						description:element.description,
						catalog:catalog,
					};	

					params.push(param);
				});

				await this.parametrsRepository.insert(params);
			}
		}catch(err){
			throw err;
		}
  }

	async setStatus(id: number, status: boolean):Promise<void>{
		await this.catalogRepository.update(id, {isActive: !status});
	}
}
