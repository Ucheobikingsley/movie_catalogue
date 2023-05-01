import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateMovieDto } from './movie.dto';
import { Movie } from './movie.entity';
import { Response, Request } from 'express';
import { merge } from 'lodash';

export class MovieService {
  constructor(private dataSource: DataSource) {}
  @InjectRepository(Movie)
  private readonly repository!: Repository<Movie>;
  public async createMovie(body: CreateMovieDto, res: Response, req: Request) {
    const movie: CreateMovieDto = new Movie();
    await this.dataSource.transaction(async (transaction) => {
      const mergeData = merge(movie, body);
      await transaction.getRepository('Movie');
    });
  }
}
