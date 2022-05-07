import { Flex } from '@chakra-ui/react'
import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

export function Rating({ rating, size }: { rating: number; size: string | number }) {
  const _size = size ? size : '20px'
  return (
    <Flex color="orange" mt="5px">
      {rating % 1 != 0 ? (
        <Flex>
          {Array.from({ length: Math.floor(rating) }).map((_, index: number) => (
            <FaStar size={_size} key={index} />
          ))}
          <FaStarHalfAlt />
          {Array.from({ length: 4 - Math.floor(rating) }).map((_, index: number) => (
            <FaRegStar size={_size} key={index} />
          ))}
        </Flex>
      ) : (
        <Flex>
          {Array.from({ length: Math.floor(rating) }).map((_, index: number) => (
            <FaStar size={_size} key={index} />
          ))}
          {Array.from({ length: 5 - Math.floor(rating) }).map((_, index: number) => (
            <FaRegStar size={_size} key={index} />
          ))}
        </Flex>
      )}
    </Flex>
  )
}
