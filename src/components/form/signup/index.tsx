import React from 'react'
import { Box as Bx, Input, FormControl, FormLabel, Button, Text, Image } from '@chakra-ui/react'
import { MdLogin } from 'react-icons/md'
import Link from 'next/link'

export function SignUpForm() {
  return (
    <FormControl
      className="trcontainer"
      as="form"
      py="40px"
      px="20px"
      borderRadius="2xl"
      boxShadow="sm"
      bg="white"
      sx={{}}
      onSubmit={() => {}}
    >
      <FormLabel fontWeight="bold" htmlFor="firstName">
        First Name
      </FormLabel>
      <Input boxShadow="shadow2" id="firstName" type="firstName" />
      <FormLabel fontWeight="bold" pt="10px" htmlFor="lastName">
        Last Name
      </FormLabel>
      <Input boxShadow="shadow2" id="lastName" type="lastName" />
      <FormLabel fontWeight="bold" pt="10px" htmlFor="email">
        Email address
      </FormLabel>
      <Input boxShadow="shadow2" id="email" type="email" />
      <FormLabel fontWeight="bold" pt="10px" htmlFor="password">
        Password
      </FormLabel>
      <Input boxShadow="shadow2" id="password" type="password" />
      <FormLabel fontWeight="bold" pt="10px" htmlFor="password">
        Password confirm
      </FormLabel>
      <Input boxShadow="shadow2" id="password" type="password" />

      <Bx d="flex" mt="20px" flexDir="column" gap="20px">
        <Input
          boxShadow="shadow"
          type="submit"
          name="Sign up"
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
          value="Sign Up"
        />

        <Bx d="flex" alignItems="center" justifyContent="space-between">
          <Text fontWeight="bold">Already have an account ?</Text>
          <Bx
            color="primary"
            d="flex"
            alignItems="center"
            gap="5px"
            cursor="pointer"
            _hover={{ color: 'rgb(0 118 255 / 39%)' }}
          >
            <Text fontWeight="bold" bg="transparent">
              <Link href="/app/login">Log in</Link>
            </Text>
            <MdLogin />
          </Bx>
        </Bx>
      </Bx>
    </FormControl>
  )
}
