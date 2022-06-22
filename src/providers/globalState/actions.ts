import { MovieDetail } from "../../models/movieDetail"

export type SetSearchedMoviesAction = {
  type: 'SET_SEARCHED_MOVIES'
  payload: MovieDetail[]
}

export type Action = SetSearchedMoviesAction
