import { useRouter } from 'next/dist/client/router'
import {
  TwitterShareButton,
  FacebookShareButton,
  HatenaShareButton,
  LineShareButton,
  TwitterIcon,
  FacebookIcon,
  HatenaIcon,
  LineIcon,
} from 'react-share'

type Props = {
  title?: string
  size?: number
  round?: boolean
  snsType?: 'twitter' | 'facebook' | 'hatena' | 'line'
}

export const ShareButton: React.FC<Props> = ({ title, size = 30, round, snsType = 'twitter' }) => {
  const router = useRouter()
  const rootUrl = process.env.APP_ROOT_URL || ''
  const url = `${rootUrl}${router.asPath}`

  switch (snsType) {
    case 'twitter':
      return (
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={size} round={round} />
        </TwitterShareButton>
      )
    case 'facebook':
      return (
        <FacebookShareButton url={url} quote={title}>
          <FacebookIcon size={size} round={round} />
        </FacebookShareButton>
      )
    case 'hatena':
      return (
        <HatenaShareButton url={url} title={title}>
          <HatenaIcon size={size} round={round} />
        </HatenaShareButton>
      )
    case 'line':
      return (
        <LineShareButton url={url} title={title}>
          <LineIcon size={size} round={round} />
        </LineShareButton>
      )
  }
}
