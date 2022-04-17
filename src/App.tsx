
import './App.css'
import Home from './pages/Home'
import Header from './layout/Header'
import Footer from './layout/Footer'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  

  return (
    <ChakraProvider>
    <div className="App">
        <Header />
        <Home />
        <Footer />
    </div>
    </ChakraProvider>
  )
}

export default App
