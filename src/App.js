import { useEffect, useState } from 'react'
import axios from 'axios'
import { ChakraProvider } from '@chakra-ui/react'
import TableComponent from './components/Table'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get('employee_data.json')
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <ChakraProvider>
      <TableComponent data={data} />
    </ChakraProvider>
  )
}

export default App
