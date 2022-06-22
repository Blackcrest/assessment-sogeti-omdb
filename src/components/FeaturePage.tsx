import { useEffect, useState } from "react"

import { MovieDetail } from "../models/movieDetail"
import { FeaturedMovie } from "./FeaturedMovie"
import { Heading } from "./Heading"

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

  return (
    <div className="featured">
      <div className="featured__title">
        <Heading el="h1" size="xxl">
          Featured Movies
        </Heading>
      </div>
      <div className="featured__content">
        {features.map((feature: MovieDetail) => {
          return <FeaturedMovie key={feature.imdbID} data={feature} />
        })}
      </div>
    </div>
  )
}
