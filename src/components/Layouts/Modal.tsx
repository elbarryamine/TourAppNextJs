import React, { useEffect, useState } from 'react'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'

// eslint-disable-next-line no-unused-vars
type AllOrNone<T> = T | { [K in keyof T]?: never }
type Props = AllOrNone<{
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  variant: 'success' | 'danger' | 'primary'
  headerContent?: string | React.ReactNode
  bodyContent?: string | React.ReactNode
  footerContent?: string | React.ReactNode
}>

export function ModalMessage({ isOpen, setIsOpen, variant, headerContent, bodyContent, footerContent }: Props) {
  const { onClose } = useDisclosure()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true)
  useEffect(() => {
    const modalTimeOut = setInterval(() => {
      setIsModalOpen(false)
    }, 5000)
    return () => {
      clearInterval(modalTimeOut)
    }
  }, [])
  let color
  if (variant === 'success') color = 'misc.success'
  if (variant === 'danger') color = 'misc.danger'
  if (variant === 'primary') color = 'secondary'

  return (
    <Modal motionPreset="slideInBottom" isCentered onClose={onClose} isOpen={isOpen !== undefined ? isOpen : isModalOpen}>
      <ModalOverlay />
      <ModalContent pb={5} bg="white">
        {headerContent && <ModalHeader color="secondary">{headerContent}</ModalHeader>}
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
          color={color}
        />
        {bodyContent && (
          <ModalBody fontWeight="extrabold" color={color}>
            {bodyContent}
          </ModalBody>
        )}
        {footerContent && (
          <ModalFooter fontWeight="extrabold" color={color}>
            {footerContent}
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  )
}
