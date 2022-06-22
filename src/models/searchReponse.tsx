export interface SearchResult {
  Reponse: string
  Search: SearchResultMovie[]
  totalResults: string
}

export interface SearchResultMovie {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbId: string
}
