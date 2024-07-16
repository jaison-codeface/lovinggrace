

const blogsBySlug = `query gg($slug: String!) {
  users(where: {nicename: $slug}) {
    edges {
      node {
        avatar {
          url
        }
        name
        slug
        blogs {
          edges {
            node {
              title
              slug
              acf: acfBolgPost {
                title
                content
                bannerImage {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  }
}`

export default blogsBySlug