const title = 'Vue3 Mobile Vant'

export default function getPageTitle(pageTitle: string) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
