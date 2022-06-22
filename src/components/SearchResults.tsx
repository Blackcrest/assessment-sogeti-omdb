import { stringToArray } from "../helpers/stringHelper"
import { useGlobalState } from "../hooks/useGlobalState"
import { MovieDetail } from "../models/movieDetail"
import { Badge } from "./Badge"
import { Button } from "./Button"
import { Heading } from "./Heading"
import { ReadMore } from "./ReadMore"

export interface SearchResultProps {
  results: MovieDetail[]
}

export const SearchResults = (props: SearchResultProps) => {
  const { updateSearchResults } = useGlobalState()

  const { results } = props

  const renderGenres = (genreString: string | undefined) => {
    if (genreString === undefined || genreString.indexOf(',') === -1)
      return <span>{genreString}</span>

    const genreArray = genreString.split(',')

    return genreArray.map((genre, index) => <Badge key={index} name={genre} />)
  }

  if (results.length === 0)
    return (
      <div className="search-result">
        <div className="search-result__no-results">
          <Heading el="h1" size="xxxl">
            We lost some movies...
          </Heading>
          <Heading el="h2" size="xl">
            Sorry, it seems a few gremlins stole your movies. Try another title
            of a movie you wish to find...
          </Heading>
        </div>
      </div>
    )

  return (
    <div className="search-result">
      <Button
        appereance="primary"
        text="Back to Home"
        onClick={() => {
          updateSearchResults([])
        }}
      />
      <div className="search-result__header">
        <Heading el="h1" size="xxxl">
          Search Results
        </Heading>
      </div>
      <div className="search-result__list">
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
                  <span className="search-result__rated">Rated: {r.Rated}</span>
                </div>
                <div className="search-result__genres">
                  {renderGenres(r.Genre)}
                </div>
                <table className="search-result__table">
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
                            <>
                              <span key={`${actor}-${aIndex}`}>{actor}</span>
                              {aIndex !== r.Actors.split(',').length - 1 && (
                                <span className="dot"></span>
                              )}
                            </>
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
    </div>
  )
}
