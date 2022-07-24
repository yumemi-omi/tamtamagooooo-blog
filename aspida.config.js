module.exports = [
  {
    input: 'src/aspida/microcms/v1',
    baseURL: `https://${process.env.SERVICE_ID_VER_1}.microcms.io/api/v1`,
  },
  {
    input: 'src/aspida/microcms/v2',
    baseURL: `https://${process.env.SERVICE_ID_VER_2}.microcms.io/api/v1`,
  },
  { input: 'src/aspida/next', baseURL: `${process.env.APP_ROOT_URL}/api` },
]
