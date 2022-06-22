import { MovieDetail } from "../../models/movieDetail"

export type GlobalState = {
  searchedMovies: MovieDetail[]
}

export const initialState: GlobalState = {
  searchedMovies: [],
}
