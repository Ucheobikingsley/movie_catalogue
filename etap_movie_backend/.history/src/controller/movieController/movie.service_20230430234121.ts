import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateMovieDto } from './movie.dto';
import { Movie } from './movie.entity';

export class MovieService {
  constructor(private dataSource: DataSource) {}
  @InjectRepository(Movie)
  private readonly repository!: Repository<Movie>;
  public async createMovie(body: CreateMovieDto, res: Response, req: Request) {}
}
