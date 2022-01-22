import React from 'react'
import { FormContainer } from '../../components'
import { Box as Bx, FormControl, Text, Box } from '@chakra-ui/react'
import { MdLogin } from 'react-icons/md'
import Link from 'next/link'
import { FormInput, SubmitInput } from '../../components/form'
import { LinkTo } from 'utils/linkTo'

export default function Login() {
  return (
    <FormContainer>
      <FormControl
        className="trcontainer"
        as="form"
        py="40px"
        px="20px"
        borderRadius="15px"
        boxShadow="sm"
        bg="gray.50"
        border="1px solid"
        borderColor="subtext"
        sx={{}}
        onSubmit={() => {}}>
        <FormInput id="email" title="Email" type="email" />
        <FormInput id="password" title="Password" type="password" />
        <Bx d="flex" mt="20px" flexDir="column" gap="20px">
          <SubmitInput title="Log in" />
          <Bx d="flex" alignItems="center" justifyContent="space-between">
            <Text fontWeight="bold">Dont have an account yet ?</Text>
            <Bx color="primary" d="flex" alignItems="center" gap="5px" cursor="pointer" _hover={{ color: 'rgb(0 118 255 / 39%)' }}>
              <Text fontWeight="bold" bg="transparent">
                <Link href={LinkTo.sigunp}>Sign up</Link>
              </Text>
              <MdLogin />
            </Bx>
          </Bx>
          <Link href={LinkTo.forgetPassword} passHref={true}>
            <Box as="a" w="max-content" cursor="pointer" mx="auto" fontWeight="bold" textAlign="center" color="primary" bg="transparent">
              Forgot password ?
            </Box>
          </Link>
        </Bx>
      </FormControl>
    </FormContainer>
  )
}
