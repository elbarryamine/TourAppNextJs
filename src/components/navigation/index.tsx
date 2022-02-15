import {
  Box,
  Flex,
  Text,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  IconButton,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react'
import { useChakraTheme } from 'hooks/usetheme'
import { FaChevronDown, FaChevronRight, FaHamburger, FaTimes } from 'react-icons/fa'
interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Tours',
  },
  {
    label: 'Privacy',
    href: '#',
  },
  {
    label: 'Calloborate',
    children: [
      {
        label: 'How to join tourlex dev team ?',
        href: '#',
      },
      {
        label: 'how to host your own tourlex tours ?',
        href: '#',
      },
    ],
  },
  {
    label: 'About',
    href: '#',
  },
]

export function Navigation() {
  const { isOpen, onToggle } = useDisclosure()
  const { background, overPrimary, primary, text, accenttext } = useChakraTheme()
  return (
    <Flex bg={background}>
      <Flex
        flex="1"
        color={text}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={accenttext}
        align={'center'}>
        <Text
          w="max-content"
          mx="auto"
          textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
          fontFamily={'heading'}
          color="white"
          fontWeight="extrabold">
          TourLex
        </Text>
        <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
          <IconButton onClick={onToggle} icon={isOpen ? <FaTimes /> : <FaHamburger />} variant={'ghost'} aria-label={'Toggle Navigation'} />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Flex display={{ base: 'none', md: 'flex' }} mx="auto">
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
          <Button as={'a'} _focus={{}} fontSize={'sm'} fontWeight="extrabold" variant={'link'} href={'#'} color={text}>
            Sign In
          </Button>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight="bold"
            color={overPrimary}
            bg={primary}
            href={'#'}
            _focus={{}}
            _hover={{
              bg: text,
              color: accenttext,
            }}>
            Sign Up
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Flex>
  )
}
export function DesktopNav() {
  const { background, text } = useChakraTheme()

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize="sm"
                fontWeight="bold"
                color={text}
                _hover={{
                  textDecoration: 'none',
                }}
                _focus={{}}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent border={0} boxShadow={'xl'} bg={background} p={4} rounded={'xl'} minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

export function DesktopSubNav({ label, href, subLabel }: NavItem) {
  const { primary, accenttext } = useChakraTheme()

  return (
    <Link href={href} role={'group'} display={'block'} p={2} rounded={'md'} _hover={{ color: accenttext }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text transition={'all .3s ease'} _groupHover={{ color: primary }} fontWeight="extrabold">
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={primary} w={2} h={2} as={FaChevronRight} />
        </Flex>
      </Stack>
    </Link>
  )
}

export function MobileNav() {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

export function MobileNavItem({ label, children, href }: NavItem) {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
        _focus={{ outline: 0, border: 0 }}
        _active={{}}>
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && <Icon transition={'all .25s ease-in-out'} transform={isOpen ? 'rotate(180deg)' : ''} w={5} h={2} as={FaChevronDown} />}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack mt={2} pl={4} borderLeft={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.700')} align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}
