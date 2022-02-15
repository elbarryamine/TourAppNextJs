import React from 'react'
import { FormContainer } from '../../components'
import { FormControl, Text, Input, FormLabel, Box, Stack, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { SubmitInput } from '../../components/form'
import { LinkTo } from 'utils/link'
import { useChakraTheme } from 'hooks/usetheme'

export default function ForgotPassword() {
  const { background, subBackground, subtext, text } = useChakraTheme()
  return (
    <FormContainer>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} bg={subBackground} borderRadius="10px" color={text} w="100%">
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign="center">
            Tell us your email
          </Heading>
          <Text fontSize={'lg'} color={subtext}>
            and we will send you a reset password link
          </Text>
        </Stack>
        <Box rounded={'lg'} bg={background} boxShadow={'base'} p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel fontWeight="extrabold">Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <SubmitInput title="Reset" />
            <Box color={text} textAlign="center">
              <Link passHref={true} href={LinkTo.login}>
                <Text fontWeight="extrabold" fontSize="body" cursor="pointer">
                  Go Back
                </Text>
              </Link>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </FormContainer>
  )
}
