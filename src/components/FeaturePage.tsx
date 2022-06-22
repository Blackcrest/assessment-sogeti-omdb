import { useEffect, useState } from "react"

import { MovieDetail } from "../models/movieDetail"
import { FeaturedFilm } from "./FeaturedFilm"

export const FeaturePage = () => {
  const [features, setFeatured] = useState<MovieDetail[]>([])

  useEffect(() => {
    // get two predefined movies
    // movies to first get are: godzilla 1954 and beast from 20000 fathoms 1953

    const fetchFeatures = async () => {
      const firstFeature = await fetch(`/api/search/title/godzilla/1954/true`, {
        method: 'GET',
      })
      const secondFeature = await fetch(
        `/api/search/title/beast+from+20000+fathoms/1953/true`,
        {
          method: 'GET',
        },
      )

      Promise.all([firstFeature, secondFeature])
        .then((results) => Promise.all(results.map((r) => r.json())))
        .then((values: MovieDetail[]) => {
          setFeatured(values)
        })
    }

    fetchFeatures()
  }, [])

  if (features.length === 0) {
    return <div>Loading!</div>
  }

  return (
    <div className="featured">
      {features.map((feature: MovieDetail) => {
        return <FeaturedFilm key={feature.imdbID} data={feature} />
      })}
    </div>
  )
}
