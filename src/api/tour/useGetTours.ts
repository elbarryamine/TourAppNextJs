import { gql, useQuery } from '@apollo/client'
import { DocumentNode } from 'graphql'

export function useGetTours(overrideGqlQuery?: DocumentNode) {
  const QUERY = gql`
    query {
      getTours {
        id
        name
        category
        rating
        location
        duration
        description
        features
        price
        discount
        mainImage
        images
        createdAt
        createdAt
      }
    }
  `
  const query = useQuery(overrideGqlQuery ? overrideGqlQuery : QUERY)
  return { ...query, data: query.data?.getTours }
}
