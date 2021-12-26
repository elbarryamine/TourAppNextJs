import React from 'react'
import { Box as Bx, Input, FormControl, FormLabel, Button, Text, Image } from '@chakra-ui/react'
import { MdLogin } from 'react-icons/md'
import Link from 'next/link'

export function SignInForm() {
  return (
    <FormControl
      as="form"
      borderWidth="1px"
      py="40px"
      px="20px"
      borderColor="primary2"
      borderRadius="2xl"
      sx={{}}
      onSubmit={() => {}}
    >
      <FormLabel fontWeight="bold" htmlFor="username">
        Username or email
      </FormLabel>
      <Input boxShadow="shadow2" id="username" type="username" />

      <FormLabel fontWeight="bold" pt="10px" htmlFor="password">
        Password
      </FormLabel>
      <Input boxShadow="shadow2" id="password" type="password" />

      <Bx d="flex" mt="20px" flexDir="column" gap="20px">
        <Input
          boxShadow="shadow"
          type="submit"
          name="Sign Up"
          _hover={{
            background: 'primary2',
          }}
          _focus={{}}
          _active={{
            color: 'primary',
            bg: 'transparent',
            border: '1px',
            borderColor: 'primary',
          }}
          fontWeight="bold"
          bg="primary"
          color="white"
          value="Log in"
        />

        <Bx d="flex" alignItems="center" justifyContent="space-between">
          <Text fontWeight="bold">Dont have an account yet ?</Text>
          <Bx
            color="primary"
            d="flex"
            alignItems="center"
            gap="5px"
            cursor="pointer"
            _hover={{ color: 'rgb(0 118 255 / 39%)' }}
          >
            <Link href="/app/signup">
              <Text fontWeight="bold" bg="transparent">
                Sign Up
              </Text>
            </Link>
            <MdLogin />
          </Bx>
        </Bx>
        <Text fontWeight="bold" textAlign="center" color="primary">
          Forgot Password ?
        </Text>
      </Bx>
    </FormControl>
  )
}
