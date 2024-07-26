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
function App() {

  return (
    <div className='container'>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Products/>}/>
            <Route path="/our" element={<Our/>}/>
            <Route path="/vision" element={<Vision/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            
            <Route path="/:categoryId" element={<ItemListContainer greeting = 'Articulos'/>}/>
            <Route path="/producto/:productId" element={<ItemDetalCont />}/>

            <Route path='/*' element={<PageNotFound/>}/>
          </Routes>
        </Router>
    </div>

  )
}

export default App
