import { useGlobalState } from "../hooks/useGlobalState"
import { MovieDetail } from "../models/movieDetail"
import { Badge } from "./Badge"
import { Button } from "./Button"
import { Heading } from "./Heading"
import { Movie } from "./Movie"
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
        {results.map((r: MovieDetail) => {
          if (r.Response === 'False') {
            return
          }

          return <Movie detail={r} key={r.imdbID} />
        })}
      </div>
    </div>
  )
}
