import { Box as Bx, FormControl, Text } from '@chakra-ui/react'
import React from 'react'
import { FormContainer, SubmitInput, FormInput } from '../../../components'
import { MdLogin } from 'react-icons/md'
import Link from 'next/link'

export default function SignUp() {
  return (
    <FormContainer>
      <FormControl
        className="trcontainer"
        as="form"
        py="40px"
        px="20px"
        borderRadius="2xl"
        boxShadow="sm"
        bg="gray.50"
        border="1px solid"
        borderColor="subtext"
        sx={{}}
        onSubmit={() => {}}>
        <FormInput id="firstname" type="firstname" title="First Name" />
        <FormInput id="lastname" type="lastname" title="Last Name" />
        <FormInput id="email" type="email" title="Email" />
        <FormInput id="password" type="password" title="Password" />
        <FormInput id="passwordConfirm" type="password" title="Password Confirm" />
        <Bx d="flex" mt="20px" flexDir="column" gap="20px">
          <SubmitInput title="Sign up" />
          <Bx d="flex" alignItems="center" justifyContent="space-between">
            <Text fontWeight="bold">Already have an account ?</Text>
            <Bx color="primary" d="flex" alignItems="center" gap="5px" cursor="pointer" _hover={{ color: 'rgb(0 118 255 / 39%)' }}>
              <Text fontWeight="bold" bg="transparent">
                <Link href="/app/login">Log in</Link>
              </Text>
              <MdLogin />
            </Bx>
          </Bx>
        </Bx>
      </FormControl>
    </FormContainer>
  )
}
