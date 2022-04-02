import { forwardRef } from 'react'

type Props = React.ComponentPropsWithRef<'a'>

export const AnchorWrapper = forwardRef<HTMLAnchorElement, Props>(function AnchorWithRef(
  { children, ...rest },
  ref,
) {
  return (
    <a {...rest} ref={ref}>
      {children}
    </a>
  )
})
