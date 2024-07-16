const data = `
{
  page(id: "cG9zdDoyNDU=") {
    title
    slug
    acf: acfContactUsPage {
      firstSection {
        title
        description
        boxes {
          title
          description
          link
          icon {
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
      socialMedia {
       title
        subtitle
        links {
          icon {
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
          link
        }
      }
      connectToForm {
        title
        subtitle
        button {
          link
          title
        }
      }
      secondSection {
        title
        description
        boxesLayout {
          title
          description
          icon {
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
`;
export default data;
