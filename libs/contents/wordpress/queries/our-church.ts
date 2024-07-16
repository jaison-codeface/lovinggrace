const data = `
{
  page(id: "cG9zdDo0MDA=") {
    id
    title
    acf: acfOurChurch {
      heroSection {
        tittle
        description
        bannerimage {
          sourceUrl
        }
      }
      faithAndTransformation {
        title
        description
        contents {
          title
          description
        }
      }
      journey {
        title
        description
        posts {
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
`;

export default data;
