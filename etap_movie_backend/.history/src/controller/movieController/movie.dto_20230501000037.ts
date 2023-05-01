import { IsString } from 'class-validator';
export class CreateMovieDto {
  @IsString()
  public movie_name: string | undefined;
}
