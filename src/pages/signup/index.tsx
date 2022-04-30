import React, { Fragment } from 'react'
import {
  FormControl,
  Text,
  Input,
  FormLabel,
  Box,
  Stack,
  Heading,
  Button,
  chakra,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import Link from 'next/link'
import { SubmitInput } from '../../components/form'
import { LinkTo } from 'utils/link'
import { gql, useMutation } from '@apollo/client'
import _ from 'lodash'
import { FaTimes } from 'react-icons/fa'
import { ModalMessage } from 'components'
import router from 'next/router'

const QUERY = gql`
  mutation ($firstName: String!, $lastName: String!, $email: String!, $phone: String, $password: String!, $passwordConfirm: String!) {
    signUp(firstName: $firstName, lastName: $lastName, email: $email, phone: $phone, password: $password, passwordConfirm: $passwordConfirm)
  }
`
export default function SignUp() {
  const [isError, setIsError] = React.useState<string>('')
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
  const [runMutation, { data, loading, error }] = useMutation(QUERY)
  async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      const {
        first_name: { value: firstName },
        last_name: { value: lastName },
        phone: { value: phone },
        email: { value: email },
        password: { value: password },
        password_confirm: { value: passwordConfirm },
      } = e.target
      await runMutation({
        variables: { firstName, lastName, email, phone, password, passwordConfirm },
      })
      e.target.reset()
    } catch {}
  }
  React.useEffect(() => {
    if (error) setIsError(error.message)
    if (!error) setIsError('')
    const errorInterval = setInterval(() => {
      if (error) {
        setIsError('')
      }
    }, 5000)
    return () => {
      clearInterval(errorInterval)
    }
  }, [error])
  React.useEffect(() => {
    if (loading || _.isEmpty(data)) return
    if (data.signUp) {
      setIsModalOpen(true)
    }
  }, [loading, data])
  React.useEffect(() => {
    if (!_.isEmpty(data) && !isModalOpen) {
      router.push(LinkTo.login)
    }
    if (isModalOpen) {
      const modalTimeOut = setInterval(() => {
        setIsModalOpen(false)
      }, 5000)
      return () => {
        clearInterval(modalTimeOut)
      }
    }
  }, [isModalOpen])

  return (
    <Fragment>
      <ModalMessage
        bodyContent="Signup is successfull"
        headerContent="Yey !"
        variant="success"
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} bg="white" borderRadius="10px" color="black" w="100%" pos="relative">
        <Heading fontSize={'4xl'} textAlign="center">
          {isError && (
            <Alert status="error" pos="absolute" top="0px" right="0px">
              <AlertIcon />
              <AlertTitle mr={2}>Error</AlertTitle>
              <AlertDescription>{isError}</AlertDescription>
              <Box onClick={() => setIsError('')} cursor="pointer" pos="absolute" right="20px" color="red">
                <FaTimes size="20px" />
              </Box>
            </Alert>
          )}
          Sign up to join us
        </Heading>

        <chakra.form rounded={'lg'} bg="white" boxShadow={'base'} p={8} onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="first_name">
              <FormLabel fontWeight="extrabold">First Name</FormLabel>
              <Input required type="first_name" />
            </FormControl>
            <FormControl id="last_name">
              <FormLabel fontWeight="extrabold">Last Name</FormLabel>
              <Input required type="last_name" />
            </FormControl>
            <FormControl id="phone">
              <FormLabel fontWeight="extrabold">Phone</FormLabel>
              <Input required type="tel" />
            </FormControl>
            <FormControl id="email">
              <FormLabel fontWeight="extrabold">Email address</FormLabel>
              <Input required type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel fontWeight="extrabold">Password</FormLabel>
              <Input required type="password" />
            </FormControl>
            <FormControl id="password_confirm">
              <FormLabel fontWeight="extrabold">Confirm Password</FormLabel>
              <Input required type="password" />
            </FormControl>
            <Stack spacing={10}>
              {loading ? <Button isLoading bg="purple" color="white" variant="solid" /> : <SubmitInput title="Sign Up" />}
              <Box color="black" textAlign="center">
                <Link passHref={true} href={LinkTo.login}>
                  <Text fontWeight="extrabold" fontSize="body" cursor="pointer">
                    I already have an account
                  </Text>
                </Link>
              </Box>
            </Stack>
          </Stack>
        </chakra.form>
      </Stack>
    </Fragment>
  )
}
