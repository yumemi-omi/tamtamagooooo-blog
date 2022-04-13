import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const Adsense: React.VFC = () => {
  const { asPath } = useRouter()
  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.log(err)
    }
  }, [asPath])
  console.log(asPath)

  if (asPath === '/policy') {
    return null
  }

  return (
    <div className="w-full" key={asPath}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-adtest={process.env.NODE_ENV === 'production' ? 'on' : 'on'}
        data-ad-client="ca-pub-9104412012929052"
        data-ad-slot="2566562789"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
