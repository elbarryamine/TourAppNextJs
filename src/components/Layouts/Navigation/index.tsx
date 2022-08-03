import React from 'react'
import { useResponsive } from '@shared/hooks/useResponsive'
import { NavigationMobile } from './NavigationMobile'
import { NavigationDesktop } from './NavigationDesktop'
import { mainLinks } from '@shared/utils/link'
import { MdFavoriteBorder, MdOutlineShoppingCart } from 'react-icons/md'

const links = [
  { link: mainLinks.search, name: 'Search', hasImageIntersecting: true },
  { link: mainLinks.browse, name: 'Browse', hasImageIntersecting: true },
  { link: mainLinks.wishlist, icon: MdFavoriteBorder, name: 'WishList' },
  { link: mainLinks.cart, icon: MdOutlineShoppingCart, name: 'Cart' },
]
export default function Navigation() {
  const { lessthan1000 } = useResponsive()
  return lessthan1000 ? <NavigationMobile links={links} /> : <NavigationDesktop links={links} />
}
