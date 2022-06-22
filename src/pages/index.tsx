import type { NextPage } from 'next'

import { FeaturePage } from "../components/FeaturePage"
import { SearchResults } from "../components/SearchResults"
import { useGlobalState } from "../hooks/useGlobalState"
import { MovieDetail } from "../models/movieDetail"

const Home: NextPage = () => {
  const { searchResults } = useGlobalState()

  return (
    <>
      {searchResults.length > 0 ? (
        <SearchResults
          results={searchResults.filter(
            (s: MovieDetail) => s.Response === 'True',
          )}
        />
      ) : (
        <FeaturePage />
      )}
    </>
  )
}

export default Home
