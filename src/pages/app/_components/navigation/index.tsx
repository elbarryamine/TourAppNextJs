import React from 'react'
import { Box, Text, Flex, useMediaQuery } from '@chakra-ui/react'
import { AiFillHome, AiFillFileText, AiFillLike, AiOutlineDollarCircle, AiOutlineLogout, AiTwotoneAppstore } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'
import { LinkTo } from '../../../../utils/linkTo'
export function SideNavigation() {
  const [
    // xss,
    // xs,
    // sm,
    // md,
    lg,
  ] = useMediaQuery([
    // '(max-width: 400px)',
    // '(max-width: 600px)',
    // '(max-width: 768px)',
    // '(max-width: 1024px)',
    '(max-width: 1200px)',
  ])
  const { pathname } = useLocation()
  function specialLink(path: string): string {
    if (path === 'home') {
      return pathname.startsWith(`/${path}`) || pathname === '/' ? 'primary' : 'secondary'
    }
    return pathname.startsWith(`/${path}`) ? 'primary' : 'secondary'
  }
  return (
    <Box h="100%" sx={{ '.icon': { cursor: 'pointer', transition: 'all 0.2s' }, '.icon:hover': { transform: 'translateY(-2px)' } }}>
      <Flex
        pos="relative"
        bg="light"
        shadow="md"
        h="100%"
        w={lg ? '80px' : '120px'}
        pt="50px"
        alignItems="center"
        mb="20px"
        flexDir="column">
        <Flex alignItems="stretch" flexDir="column" w="100%">
          <Link to={LinkTo.home}>
            <Flex
              py="20px"
              w="100%"
              gap="5px"
              h="17px"
              align="center"
              pl="10px"
              color={specialLink('home')}
              className="icon"
              cursor="pointer">
              <AiFillHome size="17px" />
              <Text lineHeight="17px" h="15px" fontSize="sm" fontWeight="extrabold">
                Home
              </Text>
            </Flex>
          </Link>
          <Link to={LinkTo.tours}>
            <Flex
              py="20px"
              w="100%"
              gap="5px"
              h="17px"
              align="center"
              pl="10px"
              color={specialLink('tours-workspace')}
              className="icon"
              cursor="pointer">
              <AiTwotoneAppstore size="17px" />
              <Text lineHeight="17px" h="15px" fontSize="sm" fontWeight="extrabold">
                Tours
              </Text>
            </Flex>
          </Link>
          <Link to={LinkTo.toursCreate}>
            <Flex
              py="20px"
              w="100%"
              gap="5px"
              h="17px"
              align="center"
              pl="10px"
              color={specialLink('tours-workspace')}
              className="icon"
              cursor="pointer">
              <AiFillFileText size="17px" />
              <Text lineHeight="17px" h="15px" fontSize="sm" fontWeight="extrabold">
                Records
              </Text>
            </Flex>
          </Link>
          <Link to="/reviews">
            <Flex
              py="20px"
              w="100%"
              gap="5px"
              h="17px"
              align="center"
              pl="10px"
              color={specialLink('tours-workspace')}
              className="icon"
              cursor="pointer">
              <AiFillLike size="17px" />

              <Text lineHeight="17px" h="15px" fontSize="sm" fontWeight="extrabold">
                Reviews
              </Text>
            </Flex>
          </Link>
          <Link to="/revenue">
            <Flex
              py="20px"
              w="100%"
              gap="5px"
              h="17px"
              align="center"
              pl="10px"
              color={specialLink('tours-workspace')}
              className="icon"
              cursor="pointer">
              <AiOutlineDollarCircle size="17px" />
              <Text lineHeight="17px" h="15px" fontSize="sm" fontWeight="extrabold">
                Revenue
              </Text>
            </Flex>
          </Link>
        </Flex>
        <Flex pos="absolute" bottom="0" flexDir="column" w="100%" gap="30px" py="20px">
          <Link to="/logout">
            <Flex
              py="20px"
              w="100%"
              gap="5px"
              h="17px"
              align="center"
              pl="10px"
              color={specialLink('tours-workspace')}
              className="icon"
              cursor="pointer">
              <AiOutlineLogout size="17px" />
              <Text lineHeight="17px" h="15px" fontSize="sm" fontWeight="extrabold">
                Logout
              </Text>
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}
