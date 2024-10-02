import { gql } from "@apollo/client";

export const GET_HOUSES = gql`
  query GetHouses {
    houses(pagination: { limit: 6 }) {
      Neighbourhood
      Street
      Rooms
      Bathrooms
      Bedrooms
      location {
        Location
      }
      categories {
        Category
      }
      Img {
        url
      }
      Price
      documentId
    }
  }
`;

export const GET_HOUSES_BUY = gql`
  query GetHouses {
    houses(filters: { categories: { Category: { contains: "Buy" } } }) {
      Neighbourhood
      Street
      Rooms
      Bathrooms
      Bedrooms
      location {
        Location
      }
      Img {
        url
      }
      Price
      documentId
    }
  }
`;

export const GET_HOUSES_RENT = gql`
  query GetHouses {
    houses(filters: { categories: { Category: { contains: "Rent" } } }) {
      Neighbourhood
      Street
      Rooms
      Bathrooms
      Bedrooms
      location {
        Location
      }
      Img {
        url
      }
      Price
      documentId
    }
  }
`;

export const GET_HOUSE = gql`
  query GetHouse($documentId: ID!) {
    house(documentId: $documentId) {
      Neighbourhood
      Street
      Rooms
      Bathrooms
      Bedrooms
      location {
        Location
      }
      categories {
        Category
      }
      Img {
        url
      }
      Price
      documentId
    }
  }
`;
