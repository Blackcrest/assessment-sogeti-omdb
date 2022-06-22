import { MovieDetail } from "../models/movieDetail"
import { Heading } from "./Heading"
import { ReadMore } from "./ReadMore"

export interface FeatureFilmProps {
  data: MovieDetail
}

export const FeaturedFilm = (props: FeatureFilmProps) => {
  const { data } = props

  return (
    <div className="featured-film">
      <div className="featured-film__image">
        <img src={data.Poster} alt={data.Title} />
      </div>
      <Heading el="h1" size="xl">
        {data.Title} | {data.Year}
      </Heading>
      <div className="featured-film__awards">{data.Awards}</div>
      <ReadMore text={data.Plot} />
    </div>
  )
}
