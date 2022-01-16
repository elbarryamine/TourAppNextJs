import React from 'react'
import { Box, FormControl, Text, Input, Textarea } from '@chakra-ui/react'
import { FormInput } from '../../../../../../components/form/input'

export function ToursWorkSpaceCreate() {
  function handleSubmit() {}
  return (
    <Box d="flex" alignItems="flex-start" ml="200px">
      <Box w="400px" h="80vh" py="20px">
        <Text px="10px" textAlign="center" fontWeight="extrabold" color="dark" fontSize="xl">
          Add Main Details
        </Text>
        <Box w="100%" h="1px" my="20px" bg="gray.100" />
        <FormControl w="100%" px="10px" onSubmit={handleSubmit}>
          <FormInput type="name" title="Title" />
          <FormInput type="number" title="Categories" />
          <FormInput type="text" title="locations" />
          <FormInput type="text" title="features" />
          <FormInput type="text" title="Category" />
          <FormInput type="number" title="Price" />
          <Textarea placeholder="Description" />
        </FormControl>
      </Box>
    </Box>
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
