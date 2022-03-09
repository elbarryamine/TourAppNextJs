import { Box, Heading, Stack, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import { useChakraTheme } from 'hooks/usetheme'
import * as React from 'react'

interface Props {
  label: string
  value: string
}
export function Stat(props: Props) {
  const { background, text, subtext } = useChakraTheme()
  const { label, value, ...boxProps } = props
  return (
    <Box px={{ base: '4', md: '6' }} py={{ base: '5', md: '6' }} bg={background} color={text} borderRadius="lg" shadow="lg" {...boxProps}>
      <Stack>
        <Text fontSize="body" fontWeight="extrabold" color={subtext}>
          {label}
        </Text>
        <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })}>{value}</Heading>
      </Stack>
    </Box>
  )
}
