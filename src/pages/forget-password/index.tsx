import React from 'react'
import { Button, FormControl, Text } from '@chakra-ui/react'
import { FormContainer, FormInput, SubmitInput } from '../../components'
import Link from 'next/link'
import { FaChevronLeft } from 'react-icons/fa'
import { LinkTo } from 'utils/linkTo'
export default function ForgetPassword() {
  // const [loaded, setLoaded] = React.useState<boolean>(false)
  // React.useEffect(() => {
  //   setLoaded(true)
  // }, [])
  // if (!loaded) return <LoadingPage />
  return (
    <FormContainer>
      <FormControl
        className="trcontainer"
        as="form"
        py="40px"
        px="20px"
        borderRadius="15px"
        boxShadow="sm"
        bg="gray.50"
        border="1px solid"
        borderColor="subtext"
        sx={{}}
        onSubmit={() => {}}>
        <Text as="h4" fontSize="lg" pb="20px" fontWeight="bold" userSelect="none">
          Enter your email to recieve a password
          <Text as="span" fontSize="inherit" fontWeight="bold" color="primary">
            reset link
          </Text>
        </Text>
        <FormInput id="email" title="Email" type="email" />
        <SubmitInput title="Get reset link" />
        <Button
          _focus={{}}
          _hover={{ opacity: '0.8' }}
          _active={{}}
          fontWeight="extrabold"
          color="primary"
          bg="transparent"
          mt="20px"
          gap="5px">
          <FaChevronLeft />
          <Link href={LinkTo.sigunp}>Go back</Link>
        </Button>
      </FormControl>
    </FormContainer>
  )
}
