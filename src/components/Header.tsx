import { useState } from "react"

import { useGlobalState } from "../hooks/useGlobalState"
import { SearchResult, SearchResultMovie } from "../models/searchReponse"

export const Header = () => {
  const { updateSearchResults } = useGlobalState()
  const [searchValue, setSearchValue] = useState('')
  const [searchWithFullPlot, setSearchWithFullPlot] = useState(false)

  const searchMovie = async (e: any) => {
    e.preventDefault()
    console.log('searching', searchValue)
    await fetch(`/api/search/direct/${searchValue}`, {
      method: 'GET',
    })
      .then((reponse) => reponse.json())
      .then((data: SearchResultMovie[]) => {
        console.log(data)
        const promises: any[] = []
        data.map((d: SearchResultMovie) =>
          promises.push(
            fetch(
              `/api/search/title/${d.Title}/${
                d.Year
              }/${searchWithFullPlot.toString()}`,
              {
                method: 'GET',
              },
            ),
          ),
        )
        console.log('promises', promises)

        Promise.all(promises)
          .then((results) => Promise.all(results.map((r) => r.json())))
          .then((test) => {
            console.log('prmise all result', test)
            updateSearchResults(test)
          })
      })
  }

  return (
    <div className="header">
      <div className="container">
        <form onSubmit={(e) => searchMovie(e)}>
          <div className="header__search-bar">
            <input
              type="text"
              placeholder="Search for a movie or show..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.currentTarget.value)}
            />
            <button
              className="header__search-button"
              disabled={searchValue === ''}
            >
              Search
            </button>
          </div>
        </form>
        <div className="header__plot-toggle">
          <input
            id="search-with-full-plot"
            type="checkbox"
            checked={searchWithFullPlot}
            onChange={() => setSearchWithFullPlot(!searchWithFullPlot)}
          />
          <label htmlFor="search-with-full-plot">Show full plot</label>
        </div>
      </div>
    </div>
  )
}
