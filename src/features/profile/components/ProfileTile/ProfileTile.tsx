import { Profile } from '@/features/profile/types/profile'
import Image from 'next/image'
import { Card } from '@/shared/components/Card'
import { Content } from '@/features/post/components/Content'
import { FC } from 'react'

type Props = {
  profile: Profile
}

export const ProfileTile: FC<Props> = ({ profile }) => {
  return (
    <Card className="p-5">
      <div className="flex flex-col items-center gap-4">
        <div className="flex p-2 pt-6 rounded-full w-36 h-36 bg-tia-maria-100">
          <Image
            className="object-cover rounded-full w-36 h-36"
            src={profile.icon.url}
            width={200}
            height={200}
            alt="たまごのプロフィール画像"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-lg font-bold text-gray-800">{profile.title}</div>
          <Content html={profile.body} />
          <a
            target="_blank"
            className="underline text-sky-400"
            href={profile.insta}
            rel="noreferrer"
          >
            Instaglam
          </a>
          <a
            target="_blank"
            className="underline text-sky-400"
            href={profile.youtube}
            rel="noreferrer"
          >
            YouTube
          </a>
        </div>
      </div>
    </Card>
  )
}
