import { stringToArray } from "../helpers/stringHelper"
import { MovieDetail } from "../models/movieDetail"
import { Badge } from "./Badge"
import { Heading } from "./Heading"
import { ReadMore } from "./ReadMore"

export interface SearchResultProps {
  results: MovieDetail[]
}

export const SearchResults = (props: SearchResultProps) => {
  const { results } = props

  const renderGenres = (genreString: string | undefined) => {
    if (genreString === undefined || genreString.indexOf(',') === -1)
      return <span>{genreString}</span>

    const genreArray = genreString.split(',')

    return genreArray.map((genre, index) => <Badge name={genre} />)
  }

  return (
    <div className="search-result">
      <Heading el="h1" size="xxxl">
        Search Results
      </Heading>
      {results.map((r: MovieDetail, index) => {
        if (r.Response === 'False') {
          return
        }

        return (
          <div className="search-result__item" key={`${r.imdbID}-${index}`}>
            <div className="search-result__image">
              <img src={r.Poster} alt={r.Title} />
            </div>
            <div className="search-result__details">
              <div className="search-result__heading">
                <Heading el="h2" size="xxl">
                  {r.Title} ({r.Year})
                </Heading>
              </div>
              <div>Rated: {r.Rated}</div>
              <div className="search-result__genres">
                {renderGenres(r.Genre)}
              </div>
              <table>
                <tbody>
                  <tr>
                    <td>Director</td>
                    <td>{r.Director}</td>
                  </tr>
                  <tr>
                    <td>Actors</td>
                    <td>
                      {r.Actors.indexOf(',') >= 0 &&
                        r.Actors.split(',').map((actor, aIndex) => (
                          <span key={`${actor}-${aIndex}`}>{actor}</span>
                        ))}
                    </td>
                  </tr>
                  <tr>
                    <td>Awards</td>
                    <td>{r.Awards}</td>
                  </tr>
                </tbody>
              </table>
              <div>
                <Heading el="h6">Plot description</Heading>
                <ReadMore text={r.Plot} borderless={true} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
