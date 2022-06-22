import { NextApiHandler } from "next"

import { MovieDetail } from "../../../models/movieDetail"
import { SearchResult } from "../../../models/searchReponse"

const directSearch: NextApiHandler = async (req, res) => {
  const searchParam = req.query.params[1]

  if (!searchParam) {
    res.status(500).send('Search value was empty. Please fill in the searchbar')
  }

  try {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${searchParam}&apiKey=${process.env.API_KEY}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    const jsonResponse = (await response.json()) as SearchResult

    res.status(200).json(jsonResponse.Search.slice(0, 5))
  } catch (e: any) {
    res.status(500).send(e)
  }
}

const searchByTitle: NextApiHandler = async (req, res) => {
  const title = req.query.params[1]
  const year = req.query.params[2]
  const fullPlot = req.query.params[3] === 'true'

  if (!title || !year) {
    res.status(500).send('Search value for title or year where empty')
  }

  try {
    const response = await fetch(
      `http://www.omdbapi.com/?t=${title}&y=${year}&plot=${
        fullPlot ? 'full' : 'short'
      }&apiKey=${process.env.API_KEY}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    const jsonResponse = (await response.json()) as SearchResult

    res.status(200).json(jsonResponse)
  } catch (e: any) {
    console.log(e)
    res.status(500).send({})
  }
}

const handler: NextApiHandler = async (req, res) => {
  const isManualSearch = Boolean(req.query.params[0] === 'direct')
  const isTitleSearch = Boolean(req.query.params[0] === 'title')

  if (isManualSearch) return directSearch(req, res)
  if (isTitleSearch) return searchByTitle(req, res)

  return res.status(405).send('Method not supported')
}

export default handler
