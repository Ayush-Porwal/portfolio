import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme/theme'

export default function App() {
  return (
      <ChakraProvider theme={theme}>
        <h1>Hello, I am heading one</h1>
      </ChakraProvider>
  )
}