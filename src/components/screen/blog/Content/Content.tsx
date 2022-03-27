import { VFC } from 'react'
import 'zenn-content-css'

type ContentProps = {
  html: string
}

export const Content: VFC<ContentProps> = ({ html }) => {
  return (
    <>
      <div
        className="w-full overflow-x-hidden znc"
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </>
  )
}
