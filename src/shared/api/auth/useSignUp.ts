import { gql, useMutation } from '@apollo/client'

export function useSignUp() {
  const Mutation = gql`
    mutation ($firstName: String!, $lastName: String!, $email: String!, $phone: String, $password: String!, $passwordConfirm: String!) {
      signUp(
        firstName: $firstName
        lastName: $lastName
        email: $email
        phone: $phone
        password: $password
        passwordConfirm: $passwordConfirm
      ) {
        id
      }
    }
  `
  return useMutation(Mutation, { errorPolicy: 'all' })
}
