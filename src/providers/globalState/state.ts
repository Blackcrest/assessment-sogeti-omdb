import { MovieDetail } from "../../models/movieDetail"

export type GlobalState = {
  searchQuery: string
  searchFilms: MovieDetail[]
}

export const initialState: GlobalState = {
  searchQuery: '',
  searchFilms: [],
}
