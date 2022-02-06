type Props = {
  children: React.ReactNode
  className?: string
  ref: React.ForwardedRef<HTMLDivElement>
}

export const Card: React.VFC<Props> = ({ children, className, ref }) => {
  return (
    <div ref={ref} className={`rounded-lg shadow-xl bg-base ${className}`}>
      {children}
    </div>
  )
}