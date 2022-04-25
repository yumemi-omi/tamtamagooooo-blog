import { Seo } from '@/shared/components/Seo'

export default function Custom404() {
  return (
    <>
      <Seo path="/404" noindex title="エラー" />
      {/* TODO: 404コンポーネント化 */}
      <p>ページがありません。</p>
    </>
  )
}
