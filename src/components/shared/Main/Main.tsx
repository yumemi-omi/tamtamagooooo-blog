import { VFC, ReactNode } from 'react'

type MainProps = {
  children: ReactNode
  classNames?: string
}

export const Main: VFC<MainProps> = ({ children, classNames }) => {
  return <main className={`p-10 mt-24 flex-grow ${classNames}`}>{children}</main>
}
