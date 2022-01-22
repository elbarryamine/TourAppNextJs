import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { AiFillHome, AiFillFileText, AiFillLike, AiOutlineDollarCircle, AiOutlineLogout, AiTwotoneAppstore } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'
import { LinkTo } from '../../../../utils/linkTo'
export function SideNavigation() {
  const { pathname } = useLocation()
  function specialLink(path: string): string {
    if (path === 'home') {
      return pathname.startsWith(`/${path}`) || pathname === '/' ? 'primary' : 'light'
    }
    return pathname.startsWith(`/${path}`) ? 'primary' : 'light'
  }
  return (
    <Box h="100%" pr="10px" sx={{ '.icon': { cursor: 'pointer', transition: 'all 0.2s' }, '.icon:hover': { transform: 'scale(1.5)' } }}>
      <Flex pos="relative" bg="darker" shadow="md" h="100%" borderRadius="15px" w="80px" alignItems="center" mb="20px" flexDir="column">
        <Flex alignItems="center" flexDir="column" w="100%" gap="30px" py="20px">
          <Link to={LinkTo.home}>
            <Box color={specialLink('home')} className="icon" cursor="pointer">
              <AiFillHome size="17px" />
            </Box>
          </Link>
          <Link to={LinkTo.tours}>
            <Box color={specialLink('tours-workspace')} className="icon" cursor="pointer">
              <AiTwotoneAppstore size="17px" />
            </Box>
          </Link>
          <Link to={LinkTo.toursCreate}>
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
        <Flex pos="absolute" bottom="0" alignItems="center" flexDir="column" w="100%" gap="30px" py="20px">
          <Link to="/logout">
            <Box color="red.600" className="icon" cursor="pointer">
              <AiOutlineLogout size="17px" />
            </Box>
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}
