import React, { ChangeEvent, useEffect, useState } from 'react'
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
  AlertDescription,
} from '@chakra-ui/react'
import Link from 'next/link'
import { SubmitInput, ModalMessage } from 'components'
import { mainLinks } from 'common/utils/link'
import _ from 'lodash'
import { FaTimes } from 'react-icons/fa'
import router from 'next/router'
import { useSignUp } from './api/useSignUp'

export default function SignUp() {
  const [errorMsg, setErrorMsg] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [runMutation, { data, loading, error }] = useSignUp()

  async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
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

  useEffect(() => {
    if (error) setErrorMsg(error.message)
    if (!error) setErrorMsg('')
    const errorInterval = setInterval(() => {
      if (error) {
        setErrorMsg(error.message)
      }
    }, 5000)
    return () => {
      clearInterval(errorInterval)
    }
  }, [error])
  useEffect(() => {
    if (loading || _.isEmpty(data)) return
    if (data.signUp) {
      setIsModalOpen(true)
    }
  }, [loading, data])
  useEffect(() => {
    if (!_.isEmpty(data) && !isModalOpen) {
      router.push(mainLinks.login)
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
    <Box h="100vh" pos="relative" bg="white">
      {errorMsg && (
        <Alert status="error" pos="sticky" top="0px" right="0px" fontFamily="rale">
          <AlertIcon />
          <AlertDescription fontWeight={300} fontSize="sm">
            {errorMsg}
          </AlertDescription>
          <Box onClick={() => setErrorMsg('')} cursor="pointer" pos="absolute" right="20px" color="red">
            <FaTimes size="20px" />
          </Box>
        </Alert>
      )}
      <ModalMessage
        bodyContent="Signup is successfull"
        headerContent="Yey !"
        variant="success"
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
      <Stack spacing={8} mx="auto" maxW="lg" py={12} borderRadius="10px" color="black" w="100%" pos="relative">
        <Heading fontSize="4xl" textAlign="center" color="color_1">
          Sign up to join us
        </Heading>

        <chakra.form rounded="lg" bg="white" border="1px solid" borderColor="whitesmoke" p={8} onSubmit={handleSubmit}>
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
                <Link passHref={true} href={mainLinks.login}>
                  <Text fontWeight="extrabold" fontSize="body" cursor="pointer">
                    I already have an account
                  </Text>
                </Link>
              </Box>
            </Stack>
          </Stack>
        </chakra.form>
      </Stack>
    </Box>
  )
}
