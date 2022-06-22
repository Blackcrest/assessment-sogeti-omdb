import { MovieDetail } from "../models/movieDetail"
import { Badge } from "./Badge"
import { Heading } from "./Heading"
import { ReadMore } from "./ReadMore"

export type MovieProps = {
  detail: MovieDetail
}

export const Movie = (props: MovieProps) => {
  const { detail } = props

  const renderGenres = (genreString: string | undefined) => {
    if (genreString === undefined || genreString.indexOf(',') === -1)
      return <span>{genreString}</span>

    const genreArray = genreString.split(',')

    return genreArray.map((genre, index) => <Badge key={index} name={genre} />)
  }

  return (
    <div className="movie">
      <div className="movie__image">
        <img src={detail.Poster} alt={detail.Title} />
      </div>
      <div className="movie__details">
        <div className="movie__heading">
          <Heading el="h2" size="xxl">
            {detail.Title} ({detail.Year})
          </Heading>
          <span className="movie__rated">Rated: {detail.Rated}</span>
        </div>
        <div className="movie__genres">{renderGenres(detail.Genre)}</div>
        <table className="movie__table">
          <tbody>
            <tr>
              <td>Director</td>
              <td>{detail.Director}</td>
            </tr>
            <tr>
              <td>Actors</td>
              <td>
                {detail.Actors.indexOf(',') >= 0 &&
                  detail.Actors.split(',').map((actor, aIndex) => (
                    <>
                      <span key={`${actor}-${aIndex}`}>{actor}</span>
                      {aIndex !== detail.Actors.split(',').length - 1 && (
                        <span className="dot"></span>
                      )}
                    </>
                  ))}
              </td>
            </tr>
            <tr>
              <td>Type</td>
              <td>{detail.Type}</td>
            </tr>
            <tr>
              <td>Awards</td>
              <td>{detail.Awards}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <Heading el="h6">Plot description</Heading>
          <ReadMore text={detail.Plot} borderless={true} />
        </div>
      </div>
    </div>
  )
}
