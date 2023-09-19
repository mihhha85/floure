import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogService } from './catalog.service';
import { CatalogController } from './catalog.controller';
import { Catalog } from './entities/catalog.entity';
import { Parametrs } from './entities/parametrs.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Catalog, Parametrs])],
  controllers: [CatalogController],
  providers: [CatalogService]
})
export class CatalogModule {}