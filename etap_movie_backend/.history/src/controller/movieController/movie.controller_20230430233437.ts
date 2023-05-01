import { Body, Controller, HttpException, Req, Res } from '@nestjs/common';
import { readValidatePostBody } from 'lib/helper';
import { CreateMovieDto } from './movie.dto';

@Controller('api/etap/movies')
export class MovieController {
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

    return this.service.createCompany(body, response, request);
  }
}
