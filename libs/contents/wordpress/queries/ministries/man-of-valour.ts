const data = `
{
  page(id: "cG9zdDo5MQ==") {
    title
    slug
    acf: acfManOfValourPage {
      bannerImage {
        sourceUrl
        mediaDetails {
          width
          height
        }
      }
      firstSection {
        title
        description
        content
      }
      secondSection {
        logo {
          sourceUrl
          mediaDetails {
            width
            height
          }
        }
        content
        buttonText
        buttonLink
      }
      thirdSection {
        boxes {
          title
          icon {
            sourceUrl
            mediaDetails {
              width
              height
            }
          }
          description
        }
      }
    }
  }
}
`
export default data;
