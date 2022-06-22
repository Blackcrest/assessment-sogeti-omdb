import { createContext, Dispatch, PropsWithChildren, useReducer } from "react"

import { Action } from "./actions"
import { reducer } from "./reducer"
import { GlobalState, initialState } from "./state"

export type GlobalStateContextProps = {
  state: any
  dispatch: (action: Action) => Promise<any>
}

export const GlobalStateContext = createContext<GlobalStateContextProps>({
  state: undefined,
  dispatch: (...props: any) => new Error(`Provider not initialized`) as any,
})

export const GlobalStateProvider = ({ children }: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const dispatchWithMiddleware = async (action: Action) => {
    // update state in local storage
    // dispatch the action
    if (action.type === 'SET_SEARCHED_MOVIES') {
    }

    const prevState = state
    const nextState = reducer(prevState, action)

    dispatch(action)

    if (JSON.stringify(prevState) !== JSON.stringify(nextState)) {
      try {
        //await patchState(nextState)
      } catch (e) {
        // If the patch fails, reset the state
        console.error(e)
        //dispatch(.setState(prevState))
      }
    }

    return true
  }

  return (
    <GlobalStateContext.Provider
      value={{ state, dispatch: dispatchWithMiddleware }}
    >
      {children}
    </GlobalStateContext.Provider>
  )
}
