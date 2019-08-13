import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

const endpointUrl = 'https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev';

export const client = new ApolloClient({
  link: new HttpLink({
      uri: endpointUrl,
    }),
  cache: new InMemoryCache()
});

