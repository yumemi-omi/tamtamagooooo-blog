/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.APP_ROOT_URL || 'https://toritama-diary.vercel.app',
  generateRobotsTxt: true, // (optional)
  // ...other options
}
