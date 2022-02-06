import { VFC, ReactNode } from 'react'

type MainProps = {
  children: ReactNode
  classNames?: string
}

export const Main: VFC<MainProps> = ({ children, classNames }) => {
  return <main className={`mt-24 p-12 flex-grow ${classNames}`}>{children}</main>
}
