export const getdDefaultThumbnailByCategory = (categoryName: string) => {
  switch (categoryName) {
    case '旅行':
      return '/traveling.jpg'
    case '日常':
      return '/life.jpg'
    case '料理':
      return '/cooking.jpg'
    default:
      return ''
  }
}
