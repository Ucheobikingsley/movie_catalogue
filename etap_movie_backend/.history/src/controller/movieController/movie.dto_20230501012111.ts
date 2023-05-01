import { IsString } from 'class-validator';
export class CreateMovieDto {
  @IsString()
  public title: string | undefined;

  @IsString()
  @IsNotEmpty()
  public genre: string | undefined;
}
