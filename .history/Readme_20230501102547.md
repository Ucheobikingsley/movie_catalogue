
ETAP_MOVIE_BACKEND

ENV
Follow the initial configuration of the .env file on the "etap_movie_backed",
Update the details o to match your database connection credentials

PORT=5000
DB_USERNAME=""
DB_PASSWORD=""
DB_NAME=""
DB_HOST=""


APIS

Create Movies 
    - localhost:5000/api/etap/movies
      method: post
      payload: {
            "title": "pope's exocist",
            "genre": "horror"
        }

Get movies
     - localhost:5000/api/etap/movies
      method: GET
     
     

Search
- localhost:5000/api/etap/movies?search=""
method: GET


Get Single Movie
- localhost:5000/api/etap/movies/1
method: GET
