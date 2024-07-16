const data = `{
    page(id: "cG9zdDoxMA==") {
      id
      title
      slug
      acf : acfHome {
        heroSection {
          bannerImages {
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
          bannerImagesMobile {
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
          title
          subtitle
          button {
            title
            link
          }
        }
        firstSectionWelcome {
          buttion1Text
          button1Link
          button2Link
          button2Text
          description
          title
          right {
            image {
              sourceUrl
            }
            title {
              text
              backgroundColor
            }
          }
        }
        
        secondSectionChurch {
          button1Link
          button1Text
          button2Link
          button2Text
          description
          title
          videoLink
          sectionImage {
            sourceUrl
            mediaDetails {
              width
              height
            }
          }
        }
        thirdSectionWho {
          buttonLink
          buttonText
          description
          title
          sectionImage{
            sourceUrl
            mediaDetails {
              width
              height
            }
          }
        }
        fourthSection {
          fieldGroupName
          sectionDescription
          sectionTitle
          offerings {
            icon {
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
            link
            title
          }
        }
        slider {
          sourceUrl
          mediaDetails{
            height
            width
          }
        }
        sixthSection {
          description
          title
          boxSection {
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
        seventhSectionJoinus {
          description
          title
          backgroundImage {
            sourceUrl
          }
          button {
            link
            title
          }
        }
        eighthSection {
          description
          fieldGroupName
          title
        }
        associated {
          title
          subtitle
          contents {
            title
            icon {
              sourceUrl
            }
          }
        }
      }
    }
}`;
export default data;
