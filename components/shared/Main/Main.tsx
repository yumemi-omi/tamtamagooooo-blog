import { VFC, ReactNode } from 'react'

type MainProps = {
  children: ReactNode
}

export const Main: VFC<MainProps> = ({ children }) => {
  return <main className="p-10">{children}</main>
}
