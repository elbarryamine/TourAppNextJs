import React from 'react'
import { Input, FormLabel, Box, Text, FormHelperText, FormErrorMessage } from '@chakra-ui/react'
import validator from 'validator'

export function SubmitInput({ title }: { title: string }) {
    return (
        <Input
            boxShadow="shadow"
            type="submit"
            _hover={{
                background: 'primary2',
            }}
            _focus={{}}
            _active={{
                color: 'primary',
                bg: 'transparent',
                border: '1px',
                borderColor: 'primary',
            }}
            fontWeight="bold"
            bg="primary"
            color="white"
            value={title}
        />
    )
}

interface PropsFormInput {
    type: string
    title: string
}
export function FormInput(props: PropsFormInput) {
    const { title, type } = props
    const [inputVal, setInputVal] = React.useState<string>('')
    const [message, setMessage] = React.useState<string>('')
    const [isError, setIsError] = React.useState<boolean>(false)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { value } = e.target
        setInputVal(value)
        if (value === '') {
            setIsError(false)
            setMessage('')
        } else {
            if (type == 'email') {
                setIsError(!validator.isEmail(value))
                setMessage('Please enter a valid email')
            }
        }
    }
    return (
        <Box mb="15px">
            <Box position="relative" h="50px">
                <Input
                    h="40px"
                    position="absolute"
                    _focus={{
                        '& + .label': {
                            transform: 'translateY(-45%)',
                            color: 'primary',
                            '& p': {
                                bg: 'primaryShade',
                            },
                        },
                    }}
                    boxShadow="shadow2"
                    id={type}
                    type={type}
                    onChange={handleChange}
                />
                <FormLabel
                    transition="all 0.4s"
                    transform={inputVal ? 'translateY(-45%)' : ''}
                    top="0"
                    d="flex"
                    alignItems="center"
                    px="10px"
                    className="label"
                    height="40px"
                    color={inputVal ? (isError ? 'red.500' : 'primary') : 'gray.500'}
                    position="absolute"
                    fontWeight="bold"
                    htmlFor={type}
                    w="max-content"
                >
                    <Text bg={inputVal ? (isError ? 'red.100' : 'gray.100') : ''} px="5px" as="p" borderRadius="5px">
                        {title}
                    </Text>
                </FormLabel>
                {isError ? (
                    <Box position="absolute" bottom="0" h="15px" pl="15px">
                        <FormHelperText color="red.500">{message}</FormHelperText>
                    </Box>
                ) : (
                    ''
                )}
            </Box>
        </Box>
    )
}
