import _ from "lodash"

export const getCurrSlugSection = (location, sections) => {
  const subSlugs = sections.map(s => s.slug)
  const pathnameParts = location.pathname.replace(/^\/+/, "").split("/")
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
