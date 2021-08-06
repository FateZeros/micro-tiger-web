const title = '微前端'

export function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}

export function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val
}
