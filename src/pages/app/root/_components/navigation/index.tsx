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
import { Link, useLocation } from 'react-router-dom'
export function SideNavigation() {
  const { pathname } = useLocation()
  function specialLink(path: string): string {
    return pathname.startsWith(`/${path}`) ? 'primary' : 'secondary'
  }
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
          border="1px solid"
          borderColor="subtext">
          <Flex alignItems="center" flexDir="column" w="100%" gap="30px" borderBottom="2px dashed" borderBottomColor="subtext" py="20px">
            <Link to="/home">
              <Box color={specialLink('home')} className="icon" cursor="pointer">
                <AiFillHome size="17px" />
              </Box>
            </Link>
            <Link to="/tours-workspace">
              <Box color={specialLink('tours-workspace')} className="icon" cursor="pointer">
                <AiTwotoneAppstore size="17px" />
              </Box>
            </Link>
            <Link to="/records">
              <Box color={specialLink('records')} className="icon" cursor="pointer">
                <AiFillFileText size="17px" />
              </Box>
            </Link>
            <Link to="/reviews">
              <Box color={specialLink('reviews')} className="icon" cursor="pointer">
                <AiFillLike size="17px" />
              </Box>
            </Link>
            <Link to="/revenue">
              <Box color={specialLink('revenue')} className="icon" cursor="pointer">
                <AiOutlineDollarCircle size="17px" />
              </Box>
            </Link>
          </Flex>
          <Flex alignItems="center" flexDir="column" w="100%" gap="30px" py="20px">
            <Link to="/logout">
              <Box color="red.600" className="icon" cursor="pointer">
                <AiOutlineLogout size="17px" />
              </Box>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
