import React from 'react'
import { FormContainer } from '../../components'
import { Box as Bx, FormControl, Text, Box, Input, FormLabel } from '@chakra-ui/react'
import { MdLogin } from 'react-icons/md'
import Link from 'next/link'
import { FormInput, SubmitInput } from '../../components/form'
import { LinkTo } from 'utils/linkTo'
import { useChakraTheme } from 'config/hooks/usetheme'

export default function Login() {
  const { subtext, background, text, primary, accenttext } = useChakraTheme()
  return (
    <FormContainer>
      <FormControl
        className="trcontainer"
        as="form"
        py="40px"
        px="20px"
        borderRadius="15px"
        boxShadow="sm"
        bg={background}
        border="1px solid"
        borderColor={subtext}
        sx={{}}
        onSubmit={() => {}}>
        <FormLabel alignItems="center" color={text} htmlFor="email" w="max-content">
          <Text fontSize="body" fontWeight="extrabold" as="p" borderRadius="15px">
            Email
          </Text>
        </FormLabel>
        <Input id="email" type="email" />
        <FormLabel alignItems="center" color={text} htmlFor="password" w="max-content" mt="10px">
          <Text fontSize="body" fontWeight="extrabold" as="p" borderRadius="15px">
            Password
          </Text>
        </FormLabel>
        <Input id="password" type="password" />
        <Bx d="flex" mt="20px" flexDir="column" gap="20px">
          <SubmitInput title="Log in" />
          <Bx d="flex" alignItems="center" justifyContent="space-between">
            <Text fontWeight="bold" color={text}>
              Dont have an account yet ?
            </Text>
            <Bx color={primary} d="flex" alignItems="center" gap="5px" cursor="pointer" _hover={{ color: accenttext }}>
              <Text fontWeight="bold" bg="transparent">
                <Link href={LinkTo.sigunp}>Sign up</Link>
              </Text>
              <MdLogin />
            </Bx>
          </Bx>
          <Link href={LinkTo.forgetPassword} passHref={true}>
            <Box as="a" w="max-content" cursor="pointer" mx="auto" fontWeight="bold" textAlign="center" color={text} bg="transparent">
              Forgot password ?
            </Box>
          </Link>
        </Bx>
      </FormControl>
    </FormContainer>
  )
}
