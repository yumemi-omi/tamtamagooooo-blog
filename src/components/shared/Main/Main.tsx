import { FC, ReactNode } from 'react'

type MainProps = {
  children: ReactNode
  classNames?: string
}

export const Main: FC<MainProps> = ({ children, classNames }) => {
  return <main className={`mt-24 p-12 flex-grow ${classNames}`}>{children}</main>
}
