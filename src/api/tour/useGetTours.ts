import { gql, useQuery } from '@apollo/client'
import { DocumentNode } from 'graphql'

export function useGetTours(overrideGqlQuery?: DocumentNode) {
  const QUERY = overrideGqlQuery
    ? overrideGqlQuery
    : gql`
        query {
          getTours {
            id
            name
            mainImage
            description
            rating
            category
            duration
            price
            location
            createdAt
            createdBy
          }
        }
      `
  const query = useQuery(QUERY)
  return { ...query, data: query.data?.getTours }
}
