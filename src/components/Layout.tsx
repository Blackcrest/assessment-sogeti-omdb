import { PropsWithChildren } from "react"

import { Header } from "./Header"

export const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <Header />
      <div className="container content">{children}</div>
    </>
  )
}
