import { gql } from "@apollo/client";

export const GET_HOUSES_BUY = gql`
  query GetHouses {
    houses(
      filters: { categories: { Category: { contains: "Buy" } } }
      pagination: { limit: 6 }
    ) {
      Neighbourhood
      Street
      Rooms
      Bathrooms
      Bedrooms
      location {
        Location
      }
      Price
    }
  }
`;
