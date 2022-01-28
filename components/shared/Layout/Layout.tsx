import { VFC, ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export const Layout: VFC<LayoutProps> = ({ children }) => {
  return <div>{children}</div>
}
