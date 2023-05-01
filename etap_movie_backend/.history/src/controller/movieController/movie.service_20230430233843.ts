import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Movie } from './movie.entity';

export class MovieService {
  constructor(private dataSource: DataSource) {}
  @InjectRepository(Movie)
  private readonly repository!: Repository<Movie>;
  public async createMovie(body: Body, res: Response, req: Request) {}
}
