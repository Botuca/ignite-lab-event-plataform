import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oumz5i16bm01z40gnbaz69/master',
  cache: new InMemoryCache()
})