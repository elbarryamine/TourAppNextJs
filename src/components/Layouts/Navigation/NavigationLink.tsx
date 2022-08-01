import { Flex, FlexProps, Icon, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavigationLinkProps } from './types'

export default function NavigationLink({ item, isImageIntersecting, ...props }: NavigationLinkProps & FlexProps) {
  const { pathname } = useRouter()
  const isSamePage = pathname === item.link
  // check if page has a header with an image which navigation contrast low
  const defaultColor = isImageIntersecting ? 'white' : 'color_dark_blue'

  return (
    <Link href={item.link}>
      <Flex
        color={isSamePage ? 'color_1' : defaultColor}
        _hover={{ textDecoration: 'none', color: 'color_1' }}
        align="center"
        gap="5px"
        fontSize="sm"
        fontWeight={600}
        cursor="pointer"
        {...props}>
        {item.icon && <Icon as={item.icon} w={6} h={6} />}
        <Text className="link">{item.name}</Text>
      </Flex>
    </Link>
  )
}
