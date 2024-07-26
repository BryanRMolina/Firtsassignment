import React from 'react'
import './ItemDetails.css'
import ItemCount from '../ItemCount/ItemCount'
import {Card,Image,Stack,CardBody,Heading,Text,CardFooter,Button, Tag,TagLabel,TagCloseButton} from '@chakra-ui/react'
import { ToastContainer, toast } from 'react-toastify';


const ItemDetails = ({nombre, id, img, precio, descripcion, stock}) => {
    const onAdd = (quantity) => {
        toast(`Agregaste ${quantity} productos`)
    }

  return (
  <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    background='white'
    borderRadius='20px'
    padding='5px'
    height='100%'
    width='70%'

  >
    <Image
      objectFit='cover'
      maxW={{ base: '100%', sm: '200px' }}
      src={img}
      alt={nombre}
      background='gray'
      borderRadius='10px'
    />

    <Stack>
      <CardBody>
        <Heading size='md' alignItems='center'>{nombre}</Heading>
        <Text py='2'> {descripcion} </Text>
      </CardBody>

      <CardFooter>
      <Tag
        size='ms'
        borderRadius='full'
        variant='solid'
        colorScheme='green'
      >
        <TagLabel>{precio}</TagLabel>
      </Tag>
        <ItemCount initialValue = {1} stock = {stock} onAdd={onAdd}/>
      </CardFooter>
    </Stack>
    <ToastContainer />
  </Card>

  )
}

export default ItemDetails