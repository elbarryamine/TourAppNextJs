import { Box, Grid } from '@chakra-ui/react'
import { useChakraTheme } from 'hooks/usetheme'
import { ui } from '../..'

export function TableHead() {
  const { background } = useChakraTheme()

  return (
    <Grid
      bg={background}
      templateColumns={ui.tmpColumns}
      placeItems="center"
      p="15px"
      sx={{ '.tableHeader': { fontWeight: 'bold', fontSize: 'headline' } }}>
      <Box />
      <Box className="tableHeader">Overview</Box>
      <Box className="tableHeader">Trip Length</Box>
      <Box className="tableHeader">Price</Box>
      <Box className="tableHeader">Actions</Box>
    </Grid>
  )
}
