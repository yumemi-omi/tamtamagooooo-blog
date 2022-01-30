import { VFC } from 'react'
import 'zenn-content-css'

type ContentProps = {
  html: string
}

export const Content: VFC<ContentProps> = ({ html }) => {
  return (
    <>
      <div
        className="znc w-full"
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </>
  )
}
