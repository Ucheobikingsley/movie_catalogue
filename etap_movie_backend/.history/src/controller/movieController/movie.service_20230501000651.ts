import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateMovieDto } from './movie.dto';
import { Movie } from './movie.entity';
import { Response, Request } from 'express';
import { merge } from 'lodash';
import { HttpException } from '@nestjs/common';

export class MovieService {
  constructor(private dataSource: DataSource) {}
  @InjectRepository(Movie)
  private readonly repository!: Repository<Movie>;
  public async createMovie(body: CreateMovieDto, res: Response, req: Request) {
    const movie: CreateMovieDto = new Movie();
    try {
      await this.dataSource.transaction(async (transaction) => {
        const mergeData = merge(movie, body);
        await transaction.getRepository('Movie').save(mergeData);
      });
    } catch (error) {
      throw new HttpException(`${error}`, 400);
    }

    return res.status(204).send();
  }
}
