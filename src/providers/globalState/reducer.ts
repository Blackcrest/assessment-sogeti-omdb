import { Reducer } from "react"

import { Action } from "./actions"
import { GlobalState } from "./state"

export const reducer: Reducer<GlobalState, Action> = (state, action) => {
  switch (action.type) {
    case 'SET_SEARCHED_MOVIES':
      return {
        ...state,
        movies: action.payload,
      }
  }
}
