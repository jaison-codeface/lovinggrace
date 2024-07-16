import { API_URL, WORDPRESS_AUTH_REFRESH_TOKEN } from "./clinet";
import {
  blogsBySlugQuery,
  blogsQuery,
  buyNowQuery,
  contactUsQuery,
  homeQuery,
  kidsOfExcellenceQuery,
  manOfValourQuery,
  ministriesQuery,
  ourChurchQuery,
  teamPageQuery,
  teamsQuery,
  usersQuery,
  utilitiesQuery,
} from "./queries";

async function fetchApi(query = "", { variables }: Record<string, any> = {}) {
  const headers: any = { "Content-Type": "application/json" };

  if (WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers["Authorization"] = `Bearer ${WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
    cache: "no-store",
  });
  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

type Ids =
  | "home"
  | "kids-of-excellence"
  | "man-of-valour"
  | "contact-us"
  | "teams"
  | "team-page"
  | "blogs"
  | "blogs-by-slug"
  | "ministries-by-slug"
  | "users"
  | "our-church"
  | "utilities"
  | "buy-now";

export async function getPageContent(id: Ids, slug?: string) {
  const query: Record<Ids, any> = {
    home: homeQuery,
    "kids-of-excellence": kidsOfExcellenceQuery,
    "man-of-valour": manOfValourQuery,
    "contact-us": contactUsQuery,
    teams: teamsQuery,
    "team-page": teamPageQuery,
    blogs: blogsQuery,
    "blogs-by-slug": blogsBySlugQuery,
    "ministries-by-slug": ministriesQuery,
    users: usersQuery,
    "our-church": ourChurchQuery,
    utilities: utilitiesQuery,
    "buy-now": buyNowQuery,
  };

  const data = await fetchApi(query[id], { variables: { slug } });
  return data;
}
