import { IsString } from 'class-validator';
export class CreateMovieDto {
  @IsString()
  public title: string | undefined;

  @IsString()
  public genre: string | undefined;
}
