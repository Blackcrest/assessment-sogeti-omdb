import { MovieDetail } from "../../models/movieDetail"
import { SetSearchedMoviesAction } from "./actions"

export const setSearchedMovies = (
  movies: MovieDetail[],
): SetSearchedMoviesAction => ({
  type: 'SET_SEARCHED_MOVIES',
  payload: movies,
})
