import { useContext } from "react"

import { MovieDetail } from "../models/movieDetail"
import {
  globalStateActions,
  GlobalStateContext,
  GlobalStateContextProps
} from "../providers/globalState"

export const useGlobalState = () => {
  const { state, dispatch } = useContext(GlobalStateContext)
  const searchResults = state?.movies || []

  const updateSearchResults = (movies: MovieDetail[]) => {
    dispatch(globalStateActions.setSearchedMovies(movies))
  }

  return {
    state,
    searchResults,
    updateSearchResults,
    dispatch,
  }
}
export type { GlobalStateContextProps }
