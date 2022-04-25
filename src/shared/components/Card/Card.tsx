type Props = {
  children: React.ReactNode
  className?: string
  ref?: React.ForwardedRef<HTMLDivElement>
}

export const Card: React.FC<Props> = ({ children, className, ref }) => {
  return (
    <div ref={ref} className={`z-10 rounded-lg shadow-xl bg-base ${className}`}>
      {children}
    </div>
  )
}
