import { gql, useLazyQuery } from '@apollo/client'
import { DocumentNode } from 'graphql'

export function useGetTours(overrideGqlQuery?: DocumentNode) {
  const QUERY = gql`
    query getToursQuery($page: Int, $pageCount: Int) {
      getTours(page: $page, pageCount: $pageCount) {
        itemsCount
        currentPage
        itemsOnPage
        results {
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
        }
      }
    }
  `
  return useLazyQuery(overrideGqlQuery ? overrideGqlQuery : QUERY)
}
