import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { useChakraTheme } from 'config/hooks/usetheme'
import React from 'react'

// eslint-disable-next-line no-unused-vars
type AllOrNone<T> = T | { [K in keyof T]?: never }
type Props = AllOrNone<{
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}>

export default function SuccessModalMessage({ isOpen, setIsOpen }: Props) {
  const { background, success } = useChakraTheme()
  const { onClose } = useDisclosure()
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(true)
  React.useEffect(() => {
    const modalTimeOut = setInterval(() => {
      setIsModalOpen(false)
    }, 5000)
    return () => {
      clearInterval(modalTimeOut)
    }
  }, [])
  return (
    <Modal motionPreset="slideInBottom" isCentered onClose={onClose} isOpen={isOpen !== undefined ? isOpen : isModalOpen}>
      <ModalOverlay />
      <ModalContent pb={5} bg={background}>
        <ModalHeader color={success}>Yey!</ModalHeader>
        <ModalCloseButton
          onClick={() => {
            if (setIsOpen !== undefined) {
              setIsOpen(false)
            } else {
              setIsModalOpen(false)
            }
          }}
          _focus={{}}
          _active={{}}
          color={success}
        />
        <ModalBody fontWeight="extrabold" color={success}>
          Sign Up Successfully
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
