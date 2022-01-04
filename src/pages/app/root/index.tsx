import React from 'react'
import { Box, Container, Flex } from '@chakra-ui/react'
import {
    AiFillHome,
    AiFillFileText,
    AiFillLike,
    AiOutlineDollarCircle,
    AiOutlineLogout,
    AiFillContacts,
    AiTwotoneHeart,
} from 'react-icons/ai'
export default function Root() {
    return (
        <Box bg="gray.900" h="100vh" w="100vw" pos="absolute">
            <Box h="100%" p="20px" w="100%">
                <Flex h="100%" alignItems="center">
                    <Flex
                        h="max-content"
                        borderRadius="10px"
                        w="80px"
                        bg="gray.800"
                        boxShadow="2xl"
                        alignItems="center"
                        mb="20px"
                        flexDir="column"
                    >
                        <Flex
                            color="white"
                            alignItems="center"
                            flexDir="column"
                            w="100%"
                            gap="30px"
                            borderBottom="1px dashed"
                            borderBottomColor="gray.500"
                            py="20px"
                        >
                            <Box color="primary" borderRadius="50%" d="flex" alignItems="center">
                                <AiFillHome size="17px" />
                            </Box>
                            <Box color="white">
                                <AiFillFileText size="17px" />
                            </Box>
                            <Box color="white">
                                <AiFillLike size="17px" />
                            </Box>
                        </Flex>
                        <Flex color="white" alignItems="center" flexDir="column" w="100%" gap="30px" py="20px">
                            <Box color="white">
                                <AiOutlineDollarCircle size="17px" />
                            </Box>

                            <Box color="white">
                                <AiFillContacts size="17px" />
                            </Box>
                            <Box color="white">
                                <AiTwotoneHeart size="17px" />
                            </Box>
                            <Box color="white">
                                <AiOutlineLogout size="17px" />
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    )
}
