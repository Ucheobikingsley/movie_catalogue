import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateMovieDto } from './movie.dto';
import { Movie } from './movie.entity';
import { Response } from 'express';
import { isObject, merge } from 'lodash';
import { HttpException } from '@nestjs/common';

export class MovieService {
  constructor(private dataSource: DataSource) {}
  @InjectRepository(Movie)
  private readonly repository!: Repository<Movie>;
  public async createMovie(body: CreateMovieDto, res: Response) {
    const movie: CreateMovieDto = new Movie();
    try {
      await this.repository.manager.transaction(async (manager) => {
        const mergeData = merge(movie, body);
        console.log('here');
        await manager.save(mergeData);
      });
    } catch (error) {
      throw new HttpException(`${error}`, 400);
    }

    return res.status(204).send();
  }

  public async getMovies(res: Response, query: Record<string, unknown>) {
    let movies;
    try {
      if (isObject(query) && 'search' in query) {
        console.log('here');
        movies = await this.repository
          .createQueryBuilder('movie')
          .where('movie.title like %:search%', { name: query.search })
          .getMany();
        awa;
      } else {
        movies = await this.repository.find();
      }
    } catch (error) {
      throw new HttpException(`${error}`, 400);
    }
    return res.status(200).send({
      movies: movies,
    });
  }

  public async getMovie(id: number, res: Response) {
    let movie;
    try {
      movie = await this.repository.findOne({
        where: {
          id: Number(id),
        },
      });
    } catch (error) {
      throw new HttpException(`${error}`, 400);
    }

    return res.status(200).send({
      movie: movie,
    });
  }
}
