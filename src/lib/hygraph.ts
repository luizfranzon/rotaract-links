import type { Link } from "../@types/links";

export async function getLinks(): Promise<Link[]> {
  const query = `
    query MyQuery($now: Date!) {
      links(
        where: {
          isVisible: true
          OR: [
            { autoExpireAt_gt: $now }
            { autoExpireAt: null }
          ]
        }
        orderBy: order_ASC
      ) {
        id
        order
        description
        title
        url
        cover {
          url
        }
        autoExpireAt
      }
    }
  `;

  const now = new Date().toISOString().split("T")[0];
  const data = await makeGraphQLRequest<{ links: Link[] }>(query, { now });

  return data.links;
}

export async function makeGraphQLRequest<T = any>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> {
  const endpoint = import.meta.env.HYGRAPH_PROJECT_ENDPOINT;
  const token = import.meta.env.HYGRAPH_TOKEN;

  if (!endpoint) {
    throw new Error("Missing HYGRAPH_PROJECT_ENDPOINT environment variable.");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const { data } = (await response.json()) as { data: T };

  return data;
}
