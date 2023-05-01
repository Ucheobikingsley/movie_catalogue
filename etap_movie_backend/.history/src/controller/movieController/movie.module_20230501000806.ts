import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyController } from './company.controller';
import { Company } from './company.entity';
import { CompanyService } from './company.service';
import { MovieController } from './movie.controller';
import { Movie } from './movie.entity';
import { MovieService } from './movie.service';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
