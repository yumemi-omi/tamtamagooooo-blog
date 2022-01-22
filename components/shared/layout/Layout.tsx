import { VFC, ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

const Layout: VFC<LayoutProps> = ({ children }) => {
  return <div className="p-10">{children}</div>
}

export default Layout
