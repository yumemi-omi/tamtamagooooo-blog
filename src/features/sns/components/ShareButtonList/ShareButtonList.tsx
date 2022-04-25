import { ShareButton } from '@/features/sns/components/ShareButton'

type Props = {
  title?: string
}

export const ShareButtonList: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-4 md:flex-col lg:flex-col">
      <ShareButton title={title} round snsType="twitter" />
      <ShareButton title={title} round snsType="facebook" />
      <ShareButton title={title} round snsType="hatena" />
      <ShareButton title={title} round snsType="line" />
    </div>
  )
}
