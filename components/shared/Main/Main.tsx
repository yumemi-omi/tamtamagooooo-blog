import { VFC, ReactNode } from 'react'

type MainProps = {
  children: ReactNode
}

export const Main: VFC<MainProps> = ({ children }) => {
  return <div className="p-10">{children}</div>
}
