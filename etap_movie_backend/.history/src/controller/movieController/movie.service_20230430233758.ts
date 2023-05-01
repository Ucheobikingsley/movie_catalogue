import { DataSource } from 'typeorm';

export class MovieService {
  constructor(private dataSource: DataSource) {}

  public async createMovie(body: Body, res: Response, req: Request) {}
}
