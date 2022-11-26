import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from '@chakra-ui/react'

import EditForm from '../EditForm'
import EditModal from '../EditModal'

const TableComponent = () => {
  const [showForm, setshowForm] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [indData, setIndData] = useState({})
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('employee_data.json')
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err))
  }, [])

  const formHandler = (data) => {
    setshowForm(true)
    setIndData(data)
  }

  const ModalHandler = (data) => {
    setOpenModal(true)
    setIndData(data)
  }

  const closeHandler = () => {
    setshowForm(false)
    setOpenModal(false)
  }
  return (
    <>
      <TableContainer className="table-container">
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>EmailId</Th>
              <Th>Aadhar Number</Th>
              <Th>Pan Number</Th>
              <Th>Employee Type</Th>
              <Th>Joining Date</Th>
              <Th>Edit</Th>
              <Th>Modal Edit</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((singleData) => (
              <Tr key={singleData.id}>
                <Td>{singleData.id}</Td>
                <Td>{singleData.name}</Td>
                <Td>{singleData.emailId}</Td>
                <Td>{singleData.aadharNumber}</Td>
                <Td>{singleData.panNumber}</Td>
                <Td>{singleData.employeeType}</Td>
                <Td>{singleData.joiningDate}</Td>
                <Td>
                  <Button size="xs" onClick={() => formHandler(singleData)}>
                    Edit
                  </Button>
                </Td>
                <Td>
                  <Button size="xs" onClick={() => ModalHandler(singleData)}>
                    Modal edit
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <EditForm
        isOpen={showForm}
        indData={indData}
        closeHandler={closeHandler}
        setData={setData}
        data={data}
      />

      <EditModal
        isOpen={openModal}
        indData={indData}
        closeHandler={closeHandler}
        setData={setData}
        data={data}
      />
    </>
  )
}

export default TableComponent
