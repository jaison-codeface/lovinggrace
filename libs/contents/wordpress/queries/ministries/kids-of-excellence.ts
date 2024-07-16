const data = `
{
  page(id: "cG9zdDoxMTg=") {
    title
    slug
    acf: acfKidsOfExcellence {
      bannerImage {
        sourceUrl
        mediaDetails {
          height
          width
        }
      }
      firstSection {
        title
        description
        gallery {
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
      secondSection {
        programmes {
          title
          description
          image {
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
    }
  }
}
`
export default data;
