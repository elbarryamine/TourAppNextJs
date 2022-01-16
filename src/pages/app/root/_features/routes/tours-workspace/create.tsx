import React from 'react'
import { Box, FormControl, Text, Input, Textarea, Flex, Button } from '@chakra-ui/react'
import { FormInput, SubmitInput } from '../../../../../../components'

export function ToursWorkSpaceCreate() {
  function handleSubmit() {}
  return (
    <Flex align="center" justify="center" w="100%" h="100%">
      <Box p="20px" bg="white" border="1px solid" borderColor="subtext" borderRadius="5px" minW="500px">
        <Text px="10px" color="primary" textAlign="center" fontWeight="extrabold" fontSize="xl" pb="20px">
          Create a tour
        </Text>
        <FormInput id="name" type="name" title="Name of your tour ?" />
        <Flex justify="space-between" align="center">
          <Text color="subtextdarker">This can be changed later</Text>
          <Button
            color="primary"
            _active={{ bg: 'primary', color: 'light', outline: '0' }}
            _focus={{}}
            _hover={{ outline: '1px solid', outlineColor: 'primary' }}
            bg="transparent">
            Next
          </Button>
        </Flex>
      </Box>
    </Flex>
  )
}
/**
 * name: {
		type: new Graphql.GraphQLNonNull(Graphql.GraphQLString),
	},
	category: {
		type: new Graphql.GraphQLNonNull(
			new Graphql.GraphQLList(Graphql.GraphQLString)
		),
	},
	rating: {
		type: new Graphql.GraphQLNonNull(Graphql.GraphQLInt),
	},
	location: {
		type: new Graphql.GraphQLNonNull(
			new Graphql.GraphQLList(Graphql.GraphQLString)
		),
	},
	duration: {
		type: new Graphql.GraphQLNonNull(Graphql.GraphQLString),
	},
	description: {
		type: new Graphql.GraphQLNonNull(Graphql.GraphQLString),
	},
	features: {
		type: new Graphql.GraphQLNonNull(
			new Graphql.GraphQLList(Graphql.GraphQLString)
		),
	},
	price: {
		type: new Graphql.GraphQLNonNull(Graphql.GraphQLString),
	},
	discount: {
		type: new Graphql.GraphQLNonNull(Graphql.GraphQLString),
	},
 */
