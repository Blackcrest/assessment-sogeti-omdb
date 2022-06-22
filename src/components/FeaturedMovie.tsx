import { MovieDetail } from "../models/movieDetail"
import { Heading } from "./Heading"
import { ReadMore } from "./ReadMore"

export interface FeaturedMovieProps {
  data: MovieDetail
}

export const FeaturedMovie = (props: FeaturedMovieProps) => {
  const { data } = props

  return (
    <div className="featured-movie">
      <div className="featured-movie__image">
        <img src={data.Poster} alt={data.Title} />
      </div>
      <Heading el="h1" size="xl">
        {data.Title} ({data.Year})
      </Heading>
      <div className="featured-movie__awards">{data.Awards}</div>
      <ReadMore text={data.Plot} />
    </div>
  )
}
