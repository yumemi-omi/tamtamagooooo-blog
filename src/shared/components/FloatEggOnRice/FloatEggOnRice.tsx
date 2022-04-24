import Link from 'next/link'
import Image from 'next/image'

export const FloatEggOnRice: React.FC = () => {
  return (
    <div className="fixed egg-on-rice-image">
      <Link href="/" passHref>
        <a>
          <Image
            src="/tamagoonrice.png"
            alt=""
            width={80}
            height={80}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
        </a>
      </Link>
    </div>
  )
}
