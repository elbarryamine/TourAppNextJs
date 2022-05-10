import { gql, useLazyQuery } from '@apollo/client'

const QUERY = gql`
  query sign($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      id
      firstName
      lastName
      email
      phone
      role
      createdAt
      avatar
    }
  }
`
export function useSignIn() {
  return useLazyQuery(QUERY)
}
