import { forwardRef } from 'react'

type Props = {
  children: React.ReactNode
  href?: string
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

// export const ForwardRefWrapper = forwardRef<HTMLDivElement, Props>(function WrapperWithRef(
//   { children },
//   ref,
// ) {
//   return <div ref={ref}>{children}</div>
// })

export const AnchorWrapper = forwardRef<HTMLAnchorElement, Props>(function AnchorWithRef(
  { onClick, href, children },
  ref,
) {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      {children}
    </a>
  )
})
