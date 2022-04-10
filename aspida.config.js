module.exports = [
  { input: 'src/api/microcms/v1', baseURL: `https://${process.env.SERVICE_ID_VER_1}.microcms.io/api/v1` },
  { input: 'src/api/microcms/v2', baseURL: `https://${process.env.SERVICE_ID_VER_2}.microcms.io/api/v1` },
  { input: 'src/api/next', baseURL: `${process.env.APP_ROOT_URL}/api` },
]
