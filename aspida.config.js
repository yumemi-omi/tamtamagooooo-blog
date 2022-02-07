module.exports = [
  { input: 'src/api/microcms', baseURL: `https://${process.env.SERVICE_ID}.microcms.io/api/v1` },
  { input: 'src/api/next', baseURL: `${process.env.APP_ROOT_URL}/api` },
]
