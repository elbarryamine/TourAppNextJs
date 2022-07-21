import React from 'react'
import { useResponsive } from '@shared/hooks/useResponsive'
import { NavigationMobile } from './NavigationMobile'
import { NavigationDesktop } from './NavigationDesktop'
import { Flex, FlexProps, Icon, Text, Link } from '@chakra-ui/react'
import { mainLinks } from '@shared/utils/link'
import { AiOutlineSearch, AiOutlineHome, AiOutlineBuild, AiOutlineInfo, AiOutlineLogin, AiOutlineLike } from 'react-icons/ai'
import { useRouter } from 'next/router'

interface LinkWithIconProps {
  item: {
    link: string
    icon: any
    name: string
  }
}
export interface NavigationComponentProps {
  dark?: boolean
  icons: {
    link: string
    icon: any
    name: string
  }[]
}
export default function Navigation(props: Pick<NavigationComponentProps, 'dark'>) {
  const icons = [
    { link: mainLinks.homeRoot, icon: AiOutlineHome, name: 'Home' },
    { link: mainLinks.search, icon: AiOutlineSearch, name: 'Search' },
    { link: mainLinks.borwse, icon: AiOutlineBuild, name: 'Browse' },
    { link: mainLinks.wishlist, icon: AiOutlineLike, name: 'MyWishList' },
    { link: mainLinks.about, icon: AiOutlineInfo, name: 'About' },
    { link: mainLinks.login, icon: AiOutlineLogin, name: 'Sign in' },
  ]
  const { lessthan1000 } = useResponsive()
  return lessthan1000 ? <NavigationMobile {...props} icons={icons} /> : <NavigationDesktop {...props} icons={icons} />
}

export function LinkWithIcon({ item, ...props }: LinkWithIconProps & FlexProps) {
  const { pathname } = useRouter()
  const isSamePge = pathname === item.link
  return (
    <Link href={item.link} _focus={{}}>
      <Flex align="center" gap="5px" fontSize="sm" fontWeight={600} cursor="pointer" color={isSamePge ? 'color_1' : undefined} {...props}>
        <Icon as={item.icon} transform="translateY(-1px)" />
        <Text className="link">{item.name}</Text>
      </Flex>
    </Link>
  )
}
