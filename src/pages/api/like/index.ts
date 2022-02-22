async function sha256(text: string) {
  const uint8 = new TextEncoder().encode(text)
  const digest = await crypto.subtle.digest('SHA-256', uint8)
  return Array.from(new Uint8Array(digest))
    .map((v) => v.toString(16).padStart(2, '0'))
    .join('')
}

export default async function likeHandler(req, res) {
  const {
    query: { id, name },
    method,
  } = req
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null
  console.log({ ip: await sha256(ip) })

  switch (method) {
    case 'GET':
      res.status(200).json({ id, name: `User ${ip}` })
      break
    case 'PUT':
      // Update or create data in your database
      res.status(200).json({ id, name: name || `User ${ip}` })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
