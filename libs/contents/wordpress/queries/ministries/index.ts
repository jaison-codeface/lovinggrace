const data = `query PageBySlug($slug: String!) {
  pages(where: {name: $slug}) {
    nodes {
      title
      slug
      acf: acfMinistryPage {
        bannerSection {
          title
          subtitle
          bannerImage {
            sourceUrl
            mediaDetails {
              width
              height
            }
          }
        }
        firstSection {
          icon {
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
      }
    }
  }
}
`;

export default data;
