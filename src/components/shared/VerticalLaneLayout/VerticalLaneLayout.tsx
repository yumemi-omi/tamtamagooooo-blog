import { VFC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const VerticalLaneLayout = ({ children }: Props) => {
  return <div className="flex flex-col gap-10 md:flex-row lg:flex-row">{children}</div>
}

const LeftSide: VFC<Props> = ({ children }) => {
  return <aside className="flex-grow">{children}</aside>
}

const Body: VFC<Props> = ({ children }) => {
  return <div className="flex-grow">{children}</div>
}

const RightSide: VFC<Props> = ({ children }) => {
  return <aside className="flex-grow">{children}</aside>
}

VerticalLaneLayout.LeftSide = LeftSide
VerticalLaneLayout.Body = Body
VerticalLaneLayout.RightSide = RightSide
