import {
  Body,
  Controller,
  Get,
  HttpException,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { readValidatePostBody } from 'lib/helper';
import { CreateMovieDto } from './movie.dto';
import { Response, Request } from 'express';
import { MovieService } from './movie.service';

@Controller('api/etap/movies')
export class MovieController {
  @Inject()
  private readonly service!: MovieService;
  @Post()
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

    return this.service.createMovie(body, response);
  }

  @Get()
  public async getMovies(
    @Res() res: Response,
    @Query() query: Record<string, unknown>,
  ) {
    return this.service.getMovies(res, query);
  }

  @Get('/:movieId')
  public async getMovie(
    @Param('movieId', ParseIntPipe) movieId: number,
    @Res() res: Response,
  ) {
    return this.service.getMovie(movieId, res);
  }
}
