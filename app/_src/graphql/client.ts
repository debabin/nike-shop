import { GraphQLClient } from 'graphql-request';

import { getSdk } from './__generated__';

const client = new GraphQLClient(
  `${process.env.NEXT_PUBLIC_STRAPI_API_URL ?? ''}/graphql/playground`,
  {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN ?? ''}`
    }
  }
);
export const gql = getSdk(client);
export * from './__generated__';
