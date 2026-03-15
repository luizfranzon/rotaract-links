import type { Link } from "../@types/links";

export async function getLinks(): Promise<Link[]> {
  const endpoint = import.meta.env.HYGRAPH_PROJECT_ENDPOINT;
  const token = import.meta.env.HYGRAPH_TOKEN;

  if (!endpoint) {
    throw new Error("Missing HYGRAPH_PROJECT_ENDPOINT environment variable.");
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: `
      query {
        links {
          id
          title
          description
          url
          cover {
            url
          }
        }
      }
      `,
    }),
  });

  const { data } = await res.json();

  return await data.links;
}
