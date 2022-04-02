import { forwardRef } from 'react'

type Props = React.ComponentProps<'a'>

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
