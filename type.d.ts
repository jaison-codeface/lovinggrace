interface HomePageType {
  page: {
    id: string;
    title: string;
    slug: string;
    acf: {
      heroSection: {
        bannerImages: Array<{
          sourceUrl: string;
          mediaDetails: {
            height: number;
            width: number;
          };
        }>;
        bannerImagesMobile: {
          sourceUrl: string;
          mediaDetails: {
            height: number;
            width: number;
          };
        }[];
        title: string;
        subtitle: string;
        button: {
          title: string;
          link: string;
        };
      };
      firstSectionWelcome: {
        buttion1Text?: string;
        button1Link?: string;
        button2Link?: string;
        button2Text?: string;
        description?: string;
        title?: string;
        right: {
          image: {
            sourceUrl: string;
          };
          title: {
            text: string;
            backgroundColor: string;
          };
        };
      };
      slider: {
        sourceUrl: string;
        mediaDetails: {
          height: number;
          width: number;
        };
      }[];
      secondSectionChurch: {
        button1Link?: string;
        button1Text?: string;
        button2Link?: string;
        button2Text?: string;
        description?: string;
        videoLink?: string;
        title?: string;
        sectionImage: {
          sourceUrl: string;
          mediaDetails: {
            width: number;
            height: number;
          };
        };
      };
      thirdSectionWho: {
        buttonLink?: string;
        buttonText?: string;
        description?: string;
        title?: string;
        sectionImage: {
          sourceUrl: string;
          mediaDetails: {
            width: number;
            height: number;
          };
        };
      };
      fourthSection: {
        fieldGroupName: string;
        sectionDescription: any;
        sectionTitle: any;
        offerings: {
          icon: {
            sourceUrl: string;
            mediaDetails: {
              width: number;
              height: number;
            };
          };
          link: string;
          title: string;
        }[];
      };
      sixthSection: {
        description: any;
        title: any;
        boxSection: {
          title: string;
          description: string;
          image: {
            sourceUrl: string;
            mediaDetails: {
              height: number;
              width: number;
            };
          };
        }[];
      };
      seventhSectionJoinus: {
        description: any;
        title: any;
        backgroundImage: {
          sourceUrl: string;
        };
        button: {
          link?: string;
          title?: string;
        };
      };
      eighthSection: {
        description: any;
        fieldGroupName: string;
        title: any;
      };
      associated: {
        title: string;
        subtitle: string;
        contents: Array<{
          title: string;
          icon: {
            sourceUrl: string;
          };
        }>;
      };
    };
  };
}

interface KidsOfExcellenceType {
  page: {
    title: string;
    slug: string;
    acf: {
      bannerImage: {
        sourceUrl: string;
        mediaDetails: {
          height: number;
          width: number;
        };
      };
      firstSection: {
        title: string;
        description: string;
        gallery: Array<{
          sourceUrl: string;
          mediaDetails: {
            height: number;
            width: number;
          };
        }>;
      };
      secondSection: {
        programmes: Array<{
          title: string;
          description: string;
          image: {
            sourceUrl: string;
            mediaDetails: {
              height: number;
              width: number;
            };
          };
        }>;
      };
    };
  };
}

interface ManOfValourType {
  page: {
    title: string;
    slug: string;
    acf: {
      bannerImage: {
        sourceUrl: string;
        mediaDetails: {
          width: number;
          height: number;
        };
      };
      firstSection: {
        title: string;
        description: string;
        content: string;
      };
      secondSection: {
        logo: {
          sourceUrl: string;
          mediaDetails: {
            width: number;
            height: number;
          };
        };
        content: string;
        buttonText: string;
        buttonLink: string;
      };
      thirdSection: {
        boxes: {
          title: string;
          icon: {
            sourceUrl: string;
            mediaDetails: {
              width: number;
              height: number;
            };
          };
          description: string;
        }[];
      };
    };
  };
}

interface MinistriesType {
  pages: {
    nodes: Array<{
      title: string;
      slug: string;
      acf: {
        bannerSection: {
          title: string;
          subtitle: any;
          bannerImage: {
            sourceUrl: string;
            mediaDetails: {
              width: number;
              height: number;
            };
          };
        };
        firstSection: {
          icon: {
            sourceUrl: string;
            mediaDetails: {
              width: number;
              height: number;
            };
          };
          content: string;
          buttonText: string;
          buttonLink: string;
        };
      };
    }>;
  };
}

interface ContactUsPageType {
  page: {
    title: string;
    slug: string;
    acf: {
      firstSection: {
        title: string;
        description: string;
        boxes: Array<{
          title: string;
          description: string;
          link: any;
          icon: {
            sourceUrl: string;
            mediaDetails: {
              height: number;
              width: number;
            };
          };
        }>;
      };
      socialMedia: {
        title: string;
        subtitle: string;
        links: {
          icon: {
            sourceUrl: string;
            mediaDetails: {
              height: number;
              width: number;
            };
          };
          link: string;
        }[];
      };
      connectToForm: {
        title?: string;
        subtitle?: string;
        button: {
          link?: string;
          title?: string;
        };
      };
      secondSection: {
        title: string;
        description: string;
        boxesLayout: Array<{
          title: string;
          description: string;
          icon: {
            sourceUrl: string;
            mediaDetails: {
              height: number;
              width: number;
            };
          };
        }>;
      };
    };
  };
}

interface TeamsType {
  teams: {
    edges: Array<{
      node: {
        title: string;
        slug: string;
        acf: {
          ministering: boolean;
          teamMemberDetails: {
            name: string;
            image: {
              sourceUrl: string;
              mediaDetails: {
                height: number;
                width: number;
              };
            };
            designation: string;
            details: string;
            buttonsTitle?: string;
            buttons?: Array<{
              link: any;
              title: string;
            }>;
            socialMedia: Array<{
              icon: {
                sourceUrl: string;
                mediaDetails: {
                  height: number;
                  width: number;
                };
              };
              link: any;
            }>;
            description: string;
          };
        };
      };
    }>;
  };
}

interface TeamPageType {
  page: {
    title: string;
    acf: {
      title: string;
      description: string;
    };
  };
}

interface BlogsType {
  blogs: {
    edges: Array<{
      node: {
        title: string;
        slug: string;
        date: string;
        author: {
          node: {
            name: string;
            slug: string;
          };
        };
        acf: {
          title: string;
          bannerImage: {
            sourceUrl: string;
            mediaDetails: {
              height: number;
              width: number;
            };
          };
          content: string;
        };
      };
    }>;
  };
}

interface BlogsBySlugType {
  users: {
    edges: Array<{
      node: {
        avatar: {
          url: string;
        };
        name: string;
        slug: string;
        blogs: {
          edges: Array<{
            node: {
              title: string;
              slug: string;
              acf: {
                title: string;
                content: string;
                bannerImage: {
                  sourceUrl: string;
                };
              };
            };
          }>;
        };
      };
    }>;
  };
}

interface UsersType {
  users: {
    nodes: Array<{
      name: string;
      slug: string;
    }>;
  };
}
interface OurChurchType {
  page: {
    id: string;
    title: string;
    acf: {
      heroSection: {
        tittle: string;
        description: string;
        bannerimage: {
          sourceUrl: string;
        };
      };
      faithAndTransformation: {
        title: string;
        description: string;
        contents: Array<{
          title: string;
          description: string;
        }>;
      };
      journey: {
        title: string;
        description: string;
        posts: Array<{
          title: string;
          description: string;
          image: {
            sourceUrl: string;
            mediaDetails: {
              height: number;
              width: number;
            };
          };
        }>;
      };
    };
  };
}
interface BuyNowPageType {
  page: {
    acf: {
      products: Array<{
        title: string;
        subtitle: string;
        link: any;
        image: {
          sourceUrl: string;
        };
      }>;
      productButtonName: string;
    };
  };
}

interface UtilitiesType {
  utility: {
    title: string;
    acf: {
      logo: {
        sourceUrl: string;
      };
      liveLink: {
        name: string;
        link: string;
      };
      ministriesMenuLinks: Array<{
        link: string;
        title: string;
      }>;
      forwardToAmazon: {
        name: string;
        link: string;
      };
      footerLinks: Array<{
        link: string;
        title: string;
      }>;
    };
  };
}
