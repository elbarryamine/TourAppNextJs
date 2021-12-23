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
        objectPosition="center center"
        filter="sepia(100%)"
      />
      <Bx d="flex" px="20px" h="max-content" w="max-content" minW="35%">
        <FormControl borderRadius="2px" borderWidth="1px" py="40px" px="20px" borderColor="gray.100" sx={{}}>
          <Image h="80px" src="/assets/adminsvg.svg" alt="svg" mb="40px" mx="auto" />
          <FormLabel fontWeight="bold" color="primary" htmlFor="username">
            User Name
          </FormLabel>
          <Input boxShadow="0 4px 14px 0 rgb(0 0 0 / 14%)" id="username" type="username" />
          <FormLabel fontWeight="bold" color="primary" pt="10px" htmlFor="email">
            Email address
          </FormLabel>
          <Input boxShadow="0 4px 14px 0 rgb(0 0 0 / 14%)" id="email" type="email" />
          <Bx d="flex" mt="20px" flexDir="column" gap="20px">
            <Button
              boxShadow="0 4px 14px 0 rgb(0 118 255 / 39%)"
              _hover={{
                background: 'primary',
              }}
              fontWeight="bold"
              bg="primary"
              color="white"
            >
              Sign Up
            </Button>

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
