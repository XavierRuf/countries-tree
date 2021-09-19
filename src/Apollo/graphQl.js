import {
    ApolloClient,
    InMemoryCache,
    gql,
  } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://countries.trevorblades.com/",
    cache: new InMemoryCache(),
  });
  
  const CountriesQueryDocument = gql`
    query {
      continents {
        code
        name
        countries {
          name
        }
      }
    }
  `;
  export const graphQl = {
      client,CountriesQueryDocument
  }