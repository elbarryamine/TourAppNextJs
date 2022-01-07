import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import {
  AiFillHome,
  AiFillFileText,
  AiFillLike,
  AiOutlineDollarCircle,
  AiOutlineLogout,
  AiFillContacts,
  AiTwotoneHeart,
  AiTwotoneAppstore,
} from 'react-icons/ai'
import { Popover } from '../../../../../components'
import { Link } from 'react-router-dom'
export function SideNavigation() {
  return (
    <Box
      h="100%"
      p="10px"
      w="100%"
      pos="fixed"
      sx={{ '.icon': { cursor: 'pointer', transition: 'all 0.2s' }, '.icon:hover': { transform: 'scale(1.5)' } }}>
      <Flex h="100%" alignItems="center">
        <Flex
          h="max-content"
          borderRadius="10px"
          w="80px"
          bg="light"
          alignItems="center"
          mb="20px"
          flexDir="column"
          border="2px solid"
          borderColor="gray">
          <Flex alignItems="center" flexDir="column" w="100%" gap="30px" borderBottom="2px dashed" borderBottomColor="gray" py="20px">
            <Box color="dark" borderRadius="50%" d="flex" alignItems="center" className="icon">
              <AiFillHome size="17px" />
            </Box>
            <Link to="/tours-workspace">
              <Box color="dark" className="icon" cursor="pointer">
                <AiTwotoneAppstore size="17px" />
              </Box>
            </Link>
            <Box color="dark" className="icon">
              <AiFillFileText size="17px" />
            </Box>
            <Box color="dark" className="icon">
              <AiFillLike size="17px" />
            </Box>
          </Flex>
          <Flex alignItems="center" flexDir="column" w="100%" gap="30px" py="20px">
            <Box color="dark" className="icon">
              <AiOutlineDollarCircle size="17px" />
            </Box>

            <Box color="dark" className="icon">
              <AiFillContacts size="17px" />
            </Box>
            <Box color="dark" className="icon">
              <AiTwotoneHeart size="17px" />
            </Box>
            <Box color="dark" className="icon">
              <AiOutlineLogout size="17px" />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
