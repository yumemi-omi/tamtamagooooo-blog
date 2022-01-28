import { VFC } from 'react'

type ContentProps = {
  html: string
}

export const Content: VFC<ContentProps> = ({ html }) => {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </>
  )
}
