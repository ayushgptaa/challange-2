import { ChakraProvider } from '@chakra-ui/react'
import TableComponent from './components/Table'

function App() {
  return (
    <ChakraProvider>
      <TableComponent />
    </ChakraProvider>
  )
}

export default App
