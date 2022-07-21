import { gql, useLazyQuery } from '@apollo/client'
import { DocumentNode } from 'graphql'

export function useGetTour(overrideGqlQuery?: DocumentNode) {
  const QUERY = gql`
    query getTourQuery($id: String!) {
      getTour(id: $id) {
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
        createdBy
        createdAt
        numberOfbooked
      }
    }
  `
  return useLazyQuery(overrideGqlQuery ? overrideGqlQuery : QUERY)
}
