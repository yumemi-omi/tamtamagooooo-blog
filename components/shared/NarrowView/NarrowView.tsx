import { VFC, ReactNode } from 'react'

type NarrowViewProps = {
  children: ReactNode
  className: string
}

export const NarrowView: VFC<NarrowViewProps> = ({ children, className }) => {
  return <div className={`my-0 mx-auto md:max-w-3xl ${className}`}>{children}</div>
}
