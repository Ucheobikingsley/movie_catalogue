export class CreateMovieDto {
    @isString();
  public movie_name: string | undefined;
}
