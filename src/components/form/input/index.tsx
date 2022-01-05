import React from 'react'
import { Input, FormLabel, Box, Text, FormHelperText, InputGroup, InputRightElement } from '@chakra-ui/react'
import validator from 'validator'
import { FaEye } from 'react-icons/fa'

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
    validatePassword?: boolean
}
FormInput.defaultProps = {
    validatePassword: false,
}
export function FormInput(props: PropsFormInput) {
    const { title, type } = props
    const [inputVal, setInputVal] = React.useState<string>('')
    const [message, setMessage] = React.useState<string>('')
    const [isError, setIsError] = React.useState<boolean>(false)
    const [showPassword, setShowPassword] = React.useState<boolean>(false)
    const [passwordStates, setPasswordStates] = React.useState<{
        symbols: boolean
        uppercase: boolean
        number: boolean
    }>({
        symbols: false,
        uppercase: false,
        number: false,
    })
    //
    const verifyType = type.toLowerCase() === 'password' ? (showPassword ? 'text' : type) : type
    const labelBgColor = inputVal ? (isError ? 'red.100' : 'gray.100') : ''
    const labelColor = inputVal ? (isError ? 'red.500' : 'primary') : 'gray.500'
    //
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { value }: { value: string } = e.target
        setInputVal(value)
        if (value === '') {
            setIsError(false)
            setMessage('')
        } else {
            if (type.toLowerCase() == 'email') {
                setIsError(!validator.isEmail(value))
                setMessage('Please enter a valid email')
            }
            if (type.toLowerCase() == 'password') {
                setIsError(handleIsPasswordStrong(value))
            }
        }
    }
    function handleIsPasswordStrong(value: string): boolean {
        return true
    }
    return (
        <Box mb="15px">
            <Box position="relative" h="50px">
                <InputGroup h="40px" position="absolute">
                    <Input
                        h="100%"
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
                        type={verifyType}
                        onChange={handleChange}
                    />
                    {type.toLowerCase() === 'password' && (
                        <InputRightElement
                            color="primary"
                            display="flex"
                            alignItems="center"
                            cursor="pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            <FaEye size="40%" />
                        </InputRightElement>
                    )}
                </InputGroup>
                <FormLabel
                    transition="all 0.4s"
                    transform={inputVal ? 'translateY(-45%)' : ''}
                    top="0"
                    d="flex"
                    alignItems="center"
                    px="10px"
                    className="label"
                    height="40px"
                    color={labelColor}
                    position="absolute"
                    fontWeight="bold"
                    htmlFor={type}
                    w="max-content"
                >
                    <Text bg={labelBgColor} px="5px" as="p" borderRadius="5px">
                        {title}
                    </Text>
                </FormLabel>
                {isError ? (
                    <Box position="absolute" bottom="0" h="15px" pl="15px">
                        {type === 'password' ? '' : <FormHelperText color="red.500">{message}</FormHelperText>}
                    </Box>
                ) : (
                    ''
                )}
            </Box>
        </Box>
    )
}