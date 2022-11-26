import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from '@chakra-ui/react'

const TableComponent = ({ data }) => {
  return (
    <TableContainer className="table-container">
      <Table variant="simple" size="md">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>EmailId</Th>
            <Th>AadharNumber</Th>
            <Th>PanNumber</Th>
            <Th>EmployeeType</Th>
            <Th>JoiningDate</Th>
            <Th>Edit</Th>
            <Th>Modal Edit</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map(
            ({
              id,
              name,
              emailId,
              aadharNumber,
              panNumber,
              employeeType,
              joiningDate,
            }) => (
              <Tr>
                <Td>{id}</Td>
                <Td>{name}</Td>
                <Td>{emailId}</Td>
                <Td>{aadharNumber}</Td>
                <Td>{panNumber}</Td>
                <Td>{employeeType}</Td>
                <Td>{joiningDate}</Td>
                <Td>
                  <Button size="xs">Edit</Button>
                </Td>
                <Td>
                  <Button size="xs">Modal edit</Button>
                </Td>
              </Tr>
            )
          )}
        </Tbody>
        {/* <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot> */}
      </Table>
    </TableContainer>
  )
}

export default TableComponent
