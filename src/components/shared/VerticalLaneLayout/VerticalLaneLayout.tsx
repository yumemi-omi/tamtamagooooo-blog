import { VFC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const VerticalLaneLayout = ({ children }: Props) => {
  return <div className="flex gap-10">{children}</div>
}

const LeftSide: VFC<Props> = ({ children }) => {
  return <aside>{children}</aside>
}

const Body: VFC<Props> = ({ children }) => {
  return <div className="flex-grow">{children}</div>
}

const RightSide: VFC<Props> = ({ children }) => {
  return <aside>{children}</aside>
}

VerticalLaneLayout.LeftSide = LeftSide
VerticalLaneLayout.Body = Body
VerticalLaneLayout.RightSide = RightSide
