import React from 'react'
import { FormContainer } from '../../../components'
import { Box as Bx, Input, FormControl, FormLabel, Button, Text, Image } from '@chakra-ui/react'
import { MdLogin } from 'react-icons/md'
import Link from 'next/link'
import { FormInput, SubmitInput } from '../../../components/form'

export default function Login() {
  return (
    <FormContainer>
      <FormControl
        className="trcontainer"
        as="form"
        py="40px"
        px="20px"
        borderRadius="2xl"
        boxShadow="sm"
        bg="white"
        sx={{}}
        onSubmit={() => {}}>
        <FormInput title="Email" type="email" />
        <FormInput title="Password" type="password" />
        <Bx d="flex" mt="20px" flexDir="column" gap="20px">
          <SubmitInput title="Log in" />
          <Bx d="flex" alignItems="center" justifyContent="space-between">
            <Text fontWeight="bold">Dont have an account yet ?</Text>
            <Bx color="primary" d="flex" alignItems="center" gap="5px" cursor="pointer" _hover={{ color: 'rgb(0 118 255 / 39%)' }}>
              <Text fontWeight="bold" bg="transparent">
                <Link href="/app/signup">Sign up</Link>
              </Text>
              <MdLogin />
            </Bx>
          </Bx>
          <Link href="/app/forget-password">
            <Button
              w="max-content"
              mx="auto"
              fontWeight="bold"
              _hover={{ border: '2px solid', borderColor: 'primary' }}
              _focus={{}}
              textAlign="center"
              color="primary">
              Forgot password ?
            </Button>
          </Link>
        </Bx>
      </FormControl>
    </FormContainer>
  )
}
