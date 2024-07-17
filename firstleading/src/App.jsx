import { useState } from 'react'
import './App.css'
import NavBar from './components/navBar'
import { ChakraProvider } from '@chakra-ui/react'
import  {BrowserRouter as  Router, Routes, Route} from 'react-router-dom'
import HomePage from './components/routes/HomePage'
import Products from './components/routes/Products'
import Our from './components/routes/Our'
import CommingSoon from './components/routes/CommingSoon'
import Contacts from './components/routes/Contacts'
import Vision from './components/routes/Vision'
import Category from './components/Category/Category'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetalCont from './components/ItemDetailContainer/ItemDetalCont'
import PageNotFound from './components/PageNotFound/PageNotFound'
function App() {

  return (
    <div className='container'>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/Products" element={<Products/>}/>
            <Route path="/our" element={<Our/>}/>
            <Route path="/vision" element={<Vision/>}/>
            <Route path="/coomingsoon" element={<CommingSoon/>}/>
            <Route path="/contacts" element={<Contacts/>}/>

            <Route path="/Products/:categoryId" element={<ItemListContainer greeting = 'Articulos' />}/>
            <Route path="/producto/:productId" element={<ItemDetalCont />}/>

            <Route path='*' element={<PageNotFound/>}/>
            


          </Routes>
        </Router>
    </div>

  )
}

export default App
