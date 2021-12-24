import React from 'react'
import { Box as Bx, Input, FormControl, FormLabel, Button, Text, Image } from '@chakra-ui/react'
import { MdLogin } from 'react-icons/md'

export default function AppAdmin() {
  return (
    <Bx h="100vh" w="100vw" d="flex" justifyContent="center" alignItems="center">
      <Image
        h="100vh"
        flex="1"
        src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="svg"
        objectFit="cover"
        objectPosition="20% center"
      />
      <Bx d="flex" px="20px" h="max-content" w="max-content" minW="35%">
        <FormControl
          as="form"
          borderWidth="1px"
          py="40px"
          px="20px"
          borderColor="gray.300"
          borderRadius="2xl"
          sx={{}}
          onSubmit={() => {}}
        >
          <FormLabel fontWeight="bold" color="primary" htmlFor="username">
            Username
          </FormLabel>
          <Input boxShadow="shadow2" id="username" type="username" />
          <FormLabel fontWeight="bold" color="primary" pt="10px" htmlFor="email">
            Email address
          </FormLabel>
          <Input boxShadow="shadow2" id="email" type="email" />
          <FormLabel fontWeight="bold" color="primary" pt="10px" htmlFor="password">
            Password
          </FormLabel>
          <Input boxShadow="shadow2" id="password" type="password" />
          <FormLabel fontWeight="bold" color="primary" pt="10px" htmlFor="password">
            Password confirm
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
                  Log in
                </Text>
                <MdLogin />
              </Bx>
            </Bx>
          </Bx>
        </FormControl>
      </Bx>
    </Bx>
  )
}
