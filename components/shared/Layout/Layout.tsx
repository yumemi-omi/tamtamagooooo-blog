import { VFC, ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export const Layout: VFC<LayoutProps> = ({ children }) => {
  return <div className="flex flex-col h-screen">{children}</div>
}
