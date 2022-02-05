import zennMarkdown2Html from 'zenn-markdown-html'

export default function markdownToHtml(markdown: string) {
  const result = zennMarkdown2Html(markdown)
  return result.toString()
}
