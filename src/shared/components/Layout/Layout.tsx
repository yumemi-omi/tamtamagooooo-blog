import { FC, ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className="flex flex-col h-screen">{children}</div>
}
