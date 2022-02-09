import { Flex } from '@chakra-ui/react'
import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

export function Rating({ rating }: { rating: number }) {
  return (
    <Flex color="orange">
      {rating % 1 != 0 ? (
        <Flex>
          {Array.from({ length: Math.floor(rating) }).map((_, index: number) => (
            <FaStar key={index} />
          ))}
          <FaStarHalfAlt />
          {Array.from({ length: 4 - Math.floor(rating) }).map((_, index: number) => (
            <FaRegStar key={index} />
          ))}
        </Flex>
      ) : (
        <Flex>
          {Array.from({ length: Math.floor(rating) }).map((_, index: number) => (
            <FaStar key={index} />
          ))}
          {Array.from({ length: 5 - Math.floor(rating) }).map((_, index: number) => (
            <FaRegStar key={index} />
          ))}
        </Flex>
      )}
    </Flex>
  )
}
