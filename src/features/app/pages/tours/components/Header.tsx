import React, { useState } from 'react'
import { Text, Flex, Button, MenuList, MenuItem, MenuButton, Menu } from '@chakra-ui/react'
import { useChakraTheme } from 'common/hooks/usetheme'
import { FaChevronDown } from 'react-icons/fa'
import { dashboardLinks } from 'common/utils/link'
import { Link } from 'react-router-dom'

export function ToursPageHeader() {
  const numberOfTours = 10
  const { primary, subtext, text, overPrimary, background } = useChakraTheme()
  const [selected, setSelected] = useState<string>('Newest')
  const sortBy = ['Length', 'Price', 'Popular', 'Latest']
  return (
    <Flex justify="space-between">
      <Flex align="center" gap="10px" h="50px">
        <Text fontSize="display" fontWeight="extrabold" color={text}>
          Manage your tours
        </Text>
        <Text fontSize="body" color={subtext} fontWeight="bold">
          {numberOfTours} tours in total
        </Text>
      </Flex>
      <Flex align="center" gap="10px">
        <Flex align="center" gap="5px">
          <Text fontSize="body" color={text} fontWeight="bold" w="100%">
            Sort By &nbsp;&nbsp;:
          </Text>
          <Menu>
            <MenuButton as={'a'}>
              <Button
                justifyContent="space-between"
                bg=""
                gap="10px"
                w="100px"
                h="max-content"
                px="5px"
                py="7px"
                _focus={{ bg: background, color: text }}
                _hover={{ bg: primary, color: overPrimary }}
                fontSize="body"
                fontWeight="bold">
                {selected}
                <FaChevronDown />
              </Button>
            </MenuButton>
            <MenuList bg={background}>
              {sortBy.map((type: string, i: number) => {
                if (type === selected) return
                return (
                  <MenuItem key={i} onClick={() => setSelected(type)} fontSize="body" fontWeight="bold">
                    {type}
                  </MenuItem>
                )
              })}
            </MenuList>
          </Menu>
        </Flex>

        <Link to={dashboardLinks.toursCreate}>
          <Button bg={primary} fontSize="headline" textTransform="uppercase" fontWeight="bold" color={overPrimary}>
            Create new tour
          </Button>
        </Link>
      </Flex>
    </Flex>
  )
}
