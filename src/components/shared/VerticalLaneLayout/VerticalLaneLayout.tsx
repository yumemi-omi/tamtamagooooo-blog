import { VFC, ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

export const VerticalLaneLayout = ({ children, className }: Props) => {
  return (
    <div className={`flex flex-col gap-10 md:flex-row lg:flex-row ${className || ''}`}>
      {children}
    </div>
  )
}

const LeftSide: VFC<Props> = ({ children, className }) => {
  return (
    <aside className={`flex-grow ${className || ''} ${!children && 'hidden'}`}>{children}</aside>
  )
}

const Body: VFC<Props> = ({ children, className }) => {
  return <div className={`flex-grow ${className || ''} ${!children && 'hidden'}`}>{children}</div>
}

const RightSide: VFC<Props> = ({ children, className }) => {
  return (
    <aside className={`flex-grow ${className || ''} ${!children && 'hidden'}`}>{children}</aside>
  )
}

VerticalLaneLayout.LeftSide = LeftSide
VerticalLaneLayout.Body = Body
VerticalLaneLayout.RightSide = RightSide
