import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

import EditForm from '../EditForm'

const EditModal = ({ isOpen, closeHandler, indData, setData, data }) => {
  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Employ Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <EditForm
            isOpen={isOpen}
            indData={indData}
            closeHandler={closeHandler}
            setData={setData}
            data={data}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default EditModal
