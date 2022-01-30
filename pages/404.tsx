import { Seo } from 'components/shared/Seo'

export default function Custom404(props) {
  console.log({ props })
  return (
    <>
      <Seo path="/404" noindex title="エラー" />
      {/* TODO: 404コンポーネント化 */}
      <p>ページがありません。</p>
    </>
  )
}
