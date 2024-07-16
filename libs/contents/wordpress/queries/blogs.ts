const blogs = `
{
  blogs {
    edges {
      node {
        title
        slug
        date
        author {
          node {
            name
            slug
          }
        }
        acf: acfBolgPost {
          title
          bannerImage {
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
          content
        }
      }
    }
  }
}
`;

export default blogs;
