import _ from "lodash"

export const getCurrSlugSection = (location, sections) => {
  const subSlugs = sections.map(s => s.slug)

  // remove leading slash, trailing slash, convert to array
  const pathnameParts = location.pathname
    .replace(/\/$/, "")
    .replace(/^\/+/, "")
    .split("/")

  const currSlug =
    pathnameParts.length === 1
      ? subSlugs[0]
      : subSlugs[subSlugs.indexOf(pathnameParts[1])]
  const currSection = _.find(sections, { slug: currSlug })
  return {
    currSlug,
    currSection,
  }
}

export const getValidSection = (sections, section) => {
  let valid = _.find(sections, { title: section })

  if (!valid) {
    valid = null
  }

  return valid
}
