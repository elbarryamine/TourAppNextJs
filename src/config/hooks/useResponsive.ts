import { useMediaQuery } from '@chakra-ui/react'
export function useResponsive() {
  const [xss, xs, sm, md, lg] = useMediaQuery([
    '(max-width: 400px)',
    '(max-width: 600px)',
    '(max-width: 768px)',
    '(max-width: 1024px)',
    '(max-width: 1200px)',
  ])
  return { xss, xs, sm, md, lg }
}
