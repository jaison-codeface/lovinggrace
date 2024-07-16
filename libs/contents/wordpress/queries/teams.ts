
const teams = `
{
  teams {
    edges {
      node {
        title
        slug
        acf: acfTeamsPosttype {
          ministering
          teamMemberDetails {
            name
            image {
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
            designation
            details
            buttonsTitle
            buttons {
              link
              title
            }
            socialMedia {
              icon {
                sourceUrl
                mediaDetails {
                  height
                  width
                }
              }
              link
            }
            description
          }
        }
      }
    }
  }
}
`

export default teams