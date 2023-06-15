import { GraphQLClient } from 'graphql-request';

import { getSdk } from './__generated__';

const client = new GraphQLClient('http://localhost:1337/graphql/playground', {
  headers: {
    Authorization:
      'Bearer e595ba9f4d5847fbb71e4a6078b71b3734ba1378147231d14f98d63fb4ba8fd2db4ff9bdd6e4cfe87980b6abd9f3cd550fadbe882eb8ce9e389ee3a9e558b96d67e4603efa6fbaf9ed80f861c8e429e1f4593dc29bed0ef0888aacba802f79a6e965c0632992c8c207db295b8526f3aaec9863aba3079582578cf2911e948e84'
  }
});
export const gql = getSdk(client);
export * from './__generated__';
