import { Entity, Column, PrimaryGeneratedColumn,ManyToOne } from 'typeorm';
import { Catalog } from './catalog.entity';

@Entity()
export class Parametrs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

	@Column()
	description: string;

	@ManyToOne(() => Catalog, (catalog) => catalog.parametrs, {onDelete: 'CASCADE'})
  catalog: Catalog
}