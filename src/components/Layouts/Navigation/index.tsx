import React from 'react'
import { useResponsive } from '@shared/hooks/useResponsive'
import { NavigationMobile } from './NavigationMobile'
import { NavigationDesktop } from './NavigationDesktop'
import { Flex, FlexProps, Icon, Text, Link } from '@chakra-ui/react'
import { mainLinks } from '@shared/utils/link'
import { MdFavoriteBorder, MdOutlineShoppingCart } from 'react-icons/md'
import { useRouter } from 'next/router'

interface LinkWithIconProps {
  item: {
    link: string
    icon?: any
    name: string
  }
}
export interface NavigationComponentProps {
  dark?: boolean
  icons: {
    link: string
    icon?: any
    name: string
  }[]
}
export default function Navigation(props: Pick<NavigationComponentProps, 'dark'>) {
  const icons = [
    { link: mainLinks.search, name: 'Search' },
    { link: mainLinks.borwse, name: 'Browse' },
    { link: mainLinks.wishlist, icon: MdFavoriteBorder, name: 'WishList' },
    { link: mainLinks.cart, icon: MdOutlineShoppingCart, name: 'Cart' },
  ]
  const { lessthan1000 } = useResponsive()
  return lessthan1000 ? <NavigationMobile {...props} icons={icons} /> : <NavigationDesktop {...props} icons={icons} />
}

export function LinkWithIcon({ item, ...props }: LinkWithIconProps & FlexProps) {
  const { pathname } = useRouter()
  const isSamePge = pathname === item.link

  return (
    <Link
      href={item.link}
      _focus={{}}
      color={isSamePge ? 'color_1' : 'color_dark_blue'}
      _hover={{ textDecoration: 'none', color: 'color_1' }}>
      <Flex align="center" gap="5px" fontSize="sm" fontWeight={600} cursor="pointer" {...props}>
        {item.icon && <Icon as={item.icon} w={6} h={6} />}
        <Text className="link">{item.name}</Text>
      </Flex>
    </Link>
  )
}
