import React from 'react'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import '../assetsRoutes/Vision.css'
import { FcApproval } from "react-icons/fc";
import Footer from '../Footer/Footer'

const Vision = () => {
  return (
    <div className='Back'>
      <div className='Card-Vision'>
          <List spacing={3}>
          <ListItem>
            <ListIcon as={FcApproval} color='green.500' />
            Debe ser desafiante y ambiciosa, pero a la vez factible y realista.
          </ListItem>
          <ListItem>
            <ListIcon as={FcApproval} color='green.500' />
            Debe estar alineada con la misión de la empresa y ser coherente con ella.
          </ListItem>
          <ListItem>
            <ListIcon as={FcApproval} color='green.500' />
            Debe inspirar y motivar al equipo y generar una proyección de futuro.
          </ListItem>
          {/* You can also use custom icons from react-icons */}
          <ListItem>
            <ListIcon as={FcApproval} color='green.500' />
            Debe estar alineada con la misión de la empresa y ser coherente con ella.
          </ListItem>
        </List>
      </div>
      <Footer/>
    </div>

  )
}

export default Vision