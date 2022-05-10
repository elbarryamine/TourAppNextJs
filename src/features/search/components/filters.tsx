import React from 'react'
import { Flex, Button, Icon } from '@chakra-ui/react'
import { IoGridOutline } from 'react-icons/io5'
import { AiOutlineSortAscending } from 'react-icons/ai'

export default function Filters() {
  const categoriesArr = ['All', 'Quad', 'Biking', 'Beach']
  const [activeCategory, setActiveCategory] = React.useState<string>('All')

  return (
    <Flex px="20px" justify="space-between">
      <Flex
        sx={{
          '& button': { h: 'max-content', fontSize: 'body', bg: 'transparent', fontWeight: 'normal' },
          '.active': { color: 'primary.10', fontWeight: '100' },
        }}
        w="max-content"
        align="center">
        {categoriesArr.map((categ: string, i: number) => (
          <Button
            key={i}
            onClick={() => setActiveCategory(categ)}
            className={categ === activeCategory ? 'active' : ''}
            _hover={{ textDecoration: 'underline' }}
            _focus={{}}
            _active={{}}>
            {categ}
          </Button>
        ))}
      </Flex>
      <Flex align="center" gap="20px">
        <Icon as={IoGridOutline} _hover={{ color: 'primary.10' }} />
        <Icon as={AiOutlineSortAscending} _hover={{ color: 'primary.10' }} />
      </Flex>
    </Flex>
  )
}
