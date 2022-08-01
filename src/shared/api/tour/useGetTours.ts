import { gql, useLazyQuery } from '@apollo/client'
import { DocumentNode } from 'graphql'

export function useGetTours(overrideGqlQuery?: DocumentNode) {
  const QUERY = gql`
    query QueryGetAllTours($page: Int, $pageCount: Int) {
      GetAllTours(page: $page, pageSize: $pageCount) {
        itemsCount
        currentPage
        itemsOnPage
        results {
          id
          name
          description
          price
          discount
          categories
          duration
          features
          startLocation
          locations
          image
          images
          isActive
          rating
          numberOfbooked
          createdBy
          createdAt
        }
      }
    }
  `
  return useLazyQuery(overrideGqlQuery ? overrideGqlQuery : QUERY)
}
