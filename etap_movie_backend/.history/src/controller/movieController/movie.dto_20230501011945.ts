import { IsString } from 'class-validator';
export class CreateMovieDto {
  @IsString()
  public title: string | undefined;

  public genre: string | undefined;
}
