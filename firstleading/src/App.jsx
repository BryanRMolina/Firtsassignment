import { useState } from 'react'
import './App.css'
import NavBar from './components/navBar'
import { ChakraProvider } from '@chakra-ui/react'
import  {BrowserRouter as  Router, Routes, Route} from 'react-router-dom'
import Products from './components/routes/Products'
import Our from './components/routes/Our'
import Contacts from './components/routes/Contacts'
import Vision from './components/routes/Vision'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetalCont from './components/ItemDetailContainer/ItemDetalCont'
import PageNotFound from './components/PageNotFound/PageNotFound'
import 'react-toastify/dist/ReactToastify.css';
import { CartContextProvider } from './Context/CartContext'
import Cart from '../src/components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

function App() {

  return (

    <ChakraProvider>
      <CartContextProvider>
      <div >
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Products/>}/>
            <Route path="/our" element={<Our/>}/>
            <Route path="/vision" element={<Vision/>}/>
                    
            <Route path="/:categoryId" element={<ItemListContainer greeting = 'Articulos'/>}/>
            <Route path="/producto/:productId" element={<ItemDetalCont />}/>
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout/>}/>

            <Route path='/*' element={<PageNotFound/>}/>
          </Routes>
        </Router>    
      </div>    
      </CartContextProvider>
    </ChakraProvider>        

   )
}

export default App
