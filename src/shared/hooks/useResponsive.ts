import { useMediaQuery } from '@chakra-ui/react'
export function useResponsive() {
  const [lessthan400, lessthan600, lessthan768, lessthan900, lessthan1000, lessthan1200, lessthan1400] = useMediaQuery([
    '(max-width: 400px)',
    '(max-width: 600px)',
    '(max-width: 768px)',
    '(max-width: 900px)',
    '(max-width: 1000px)',
    '(max-width: 1200px)',
    '(max-width: 1400px)',
  ])
  return { lessthan400, lessthan600, lessthan768, lessthan900, lessthan1000, lessthan1200, lessthan1400 }
}
