import { FC, ReactNode } from 'react'

type NarrowViewProps = {
  children: ReactNode
  className?: string
}

export const NarrowView: FC<NarrowViewProps> = ({ children, className }) => {
  return <div className={`my-0 mx-auto md:max-w-3xl ${className}`}>{children}</div>
}
