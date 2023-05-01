import {
  Body,
  Controller,
  HttpException,
  Inject,
  Req,
  Res,
} from '@nestjs/common';
import { readValidatePostBody } from 'lib/helper';
import { CreateMovieDto } from './movie.dto';
import { MovieService } from './movie.service';

@Controller('api/etap/movies')
export class MovieController {
  @Inject()
  private readonly service!: MovieService;
  public async createMovie(
    @Body() body: CreateMovieDto,
    @Req() request: Request,
    @Res() response: Response,
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, validationErrors] = await readValidatePostBody(
      CreateMovieDto,
      body,
    );
    if (validationErrors.length > 0) {
      throw new HttpException(validationErrors, 400);
    }

    return this.service.createMovie(body, response, request);
  }
}
