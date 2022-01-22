import React from 'react'
import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import Card from 'components/card'
import { XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, MarkSeries, Highlight } from 'react-vis'
export function Home() {
  return (
    <Box color="black" h="100%" w="100%">
      <FinancialCards />
    </Box>
  )
}

function FinancialCards() {
  const dataScore = [
    { x: 0, y: 3 },
    { x: 1, y: 4 },
    { x: 2, y: 6 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 5 },
    { x: 6, y: 8 },
    { x: 7, y: 8 },
    { x: 8, y: 7 },
    { x: 9, y: 9 },
  ]
  const dataRating = [
    { x: 0, y: 3 },
    { x: 1, y: 4 },
    { x: 2, y: 6 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 5 },
    { x: 6, y: 3 },
    { x: 7, y: 2 },
    { x: 8, y: 3 },
    { x: 9, y: 1 },
  ]
  const dataOverall = [
    { x: 0, y: 3 },
    { x: 1, y: 4 },
    { x: 2, y: 6 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 5 },
    { x: 6, y: 8 },
    { x: 7, y: 8 },
    { x: 8, y: 7 },
    { x: 9, y: 9 },
  ]
  return (
    <Grid
      templateColumns="1fr 1fr 1fr"
      templateRows="200px"
      gap="10px"
      w="100%"
      color="light"
      sx={{ '.title': { fontWeight: 'extrabold', fontSize: 'md', textTransform: 'uppercase' } }}>
      <Card w="100%" sx={{ '.chart-line': { stroke: 'lime !important' } }}>
        <Flex flexDir="column" align="center" h="100%" gap="20px" justify="space-between">
          <Text className="title">score</Text>
          <Box alignSelf="stretch" flex="1" borderRadius="15px">
            <Box w="max-content" mx="auto" pt="20px">
              <XYPlot margin={0} width={180} height={90}>
                <LineSeries className="chart-line" data={dataScore} />
              </XYPlot>
            </Box>
          </Box>
        </Flex>
      </Card>
      <Card w="100%" sx={{ '.chart-line': { stroke: 'hsl(353, 86%, 54%) !important' } }}>
        <Flex flexDir="column" align="center" h="100%" gap="20px" justify="space-between">
          <Text className="title">sales</Text>
          <Box alignSelf="stretch" flex="1" borderRadius="15px">
            <Box w="max-content" mx="auto" pt="0px">
              <XYPlot width={200} height={150}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <MarkSeries className="mark-series-example" strokeWidth={2} sizeRange={[5, 15]} colorType="literal" data={dataOverall} />
                <Highlight drag enableX={false} />
              </XYPlot>
            </Box>
          </Box>
        </Flex>
      </Card>
      <Card w="100%" sx={{ '.chart-line': { stroke: 'hsl(353, 86%, 54%) !important' } }}>
        <Flex flexDir="column" align="center" h="100%" gap="20px" justify="space-between">
          <Text className="title">rating</Text>
          <Box alignSelf="stretch" flex="1" borderRadius="15px">
            <Box w="max-content" mx="auto" pt="20px">
              <XYPlot margin={0} width={180} height={90}>
                <LineSeries className="chart-line" data={dataRating} />
              </XYPlot>
            </Box>
          </Box>
        </Flex>
      </Card>
    </Grid>
  )
}
