import type { NextPage } from 'next'

import { FeaturePage } from "../components/FeaturePage"
import { SearchResults } from "../components/SearchResults"
import { useGlobalState } from "../hooks/useGlobalState"

const Home: NextPage = () => {
  const { searchResults } = useGlobalState()

  return (
    <>
      {searchResults.length > 0 ? (
        <SearchResults results={searchResults} />
      ) : (
        <FeaturePage />
      )}
    </>
  )
}

export default Home
