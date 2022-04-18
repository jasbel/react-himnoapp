
import './App.css'
import Home from './pages/Home'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from './layout/Layout'
import { theme } from './config/theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Home />
      </Layout>
    </ChakraProvider>
  )
}

export default App
