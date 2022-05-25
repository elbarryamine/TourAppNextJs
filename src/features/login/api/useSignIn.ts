import { gql, useLazyQuery } from '@apollo/client'

export function useSignIn() {
  const QUERY = gql`
    query SignIn($email: String!, $password: String!) {
      signIn(email: $email, password: $password) {
        id
        firstName
        lastName
        email
        phone
        role
        createdAt
        image
      }
    }
  `
  return useLazyQuery(QUERY, { errorPolicy: 'none' })
}
