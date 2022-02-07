import { NextApiRequest, NextApiResponse } from 'next'
import { fetchPostDetail } from '@/features/post/api/fetchPostDetail'
import cheerio from 'cheerio'
import hljs from 'highlight.js'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id as string
  const draftKey = req.query.draftKey as string

  if (!id || !draftKey) {
    res.status(400).json({ error: `missing queryparamaeter` })
  }

  const data = await fetchPostDetail(id, { draftKey })
  if (data.body) {
    const $ = cheerio.load(data.body)

    $('pre code').each((_, elm) => {
      const result = hljs.highlightAuto($(elm).text())
      $(elm).html(result.value)
      $(elm).addClass('hljs')
    })
    $('iframe').each((_, elm) => {
      const wrapDiv = $(
        '<div class="iframe-wrapper" style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;"></div>',
      )
      $(elm).wrap(wrapDiv)
      $(elm)
        .attr('width', null)
        .attr('height', null)
        .attr('style', 'border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;')
    })

    res.status(200).json({
      post: data,
      highlightedBody: $.html(),
    })
  } else {
    res.status(200).json({
      post: data,
      highlightedBody: '',
    })
  }
}
