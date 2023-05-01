import { Controller } from '@nestjs/common';

@Controller('api/etap/movies')
export class MovieController {
  public async createIsland(
    @Body() body: CreateCompanyDto,
    @Req() request: Request & { user: Company },
    @Res() response: Response,
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, validationErrors] = await readValidatePostBody(
      CreateCompanyDto,
      body,
    );
    if (validationErrors.length > 0) {
      throw new HttpException(validationErrors, 400);
    }

    return this.service.createCompany(body, response, request);
  }
}
