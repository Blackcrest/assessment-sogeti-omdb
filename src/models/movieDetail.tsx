export interface MovieDetail {
  Actors: string
  Awards: string
  BoxOffice: string
  Country: string
  DVD: string
  Director: string
  Genre: string
  Language: string
  Metascore: string
  Plot: string
  Poster: string
  Production: string
  Rated: string
  Ratings: []
  Released: string
  Response: string
  Runtime: string
  Title: string
  Type: string
  Website: string
  Writer: string
  Year: string
  imdbID: string
  imdbRating: string
  imdbVotes: string
}

export interface MovieRating {
  Source: string
  Value: string
}
