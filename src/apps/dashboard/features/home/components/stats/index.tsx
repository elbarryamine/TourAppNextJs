import React from 'react'
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { useChakraTheme } from 'hooks/usetheme'
import { Stat } from 'components'

export function Stats() {
  const { text } = useChakraTheme()
  const stats = [
    { label: 'Reviews Count', value: '74' },
    { label: 'Views Count', value: '8,182' },
    { label: 'Booking Count', value: '214' },
  ]
  return (
    <Box p="20px">
      <Flex flexDir="column">
        <Flex align="center" gap="10px" h="50px">
          <Text fontSize="display" fontWeight="extrabold" color={text}>
            Status
          </Text>
        </Flex>
        <Box pt="20px">
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: '5', md: '6' }}>
            {stats.map(({ label, value }) => (
              <Stat key={label} label={label} value={value} />
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  )
}
