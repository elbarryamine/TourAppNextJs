import React from 'react'
import { Box as Bx, FormControl, Text } from '@chakra-ui/react'
import { MdLogin } from 'react-icons/md'
import Link from 'next/link'
import { FormInput, SubmitInput } from '../input'

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
            <FormInput type="firstname" title="First Name" />
            <FormInput type="lastname" title="Last Name" />
            <FormInput type="email" title="Email" />
            <FormInput type="password" title="Password" />
            <FormInput type="password" title="Password Confirm" />
            <Bx d="flex" mt="20px" flexDir="column" gap="20px">
                <SubmitInput title="Sign up" />
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
