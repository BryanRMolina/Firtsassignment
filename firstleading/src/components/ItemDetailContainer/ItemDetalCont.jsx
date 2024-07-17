import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../data/asyncMock'
import ItemDetails from '../ItemDetails/ItemDetails'
import {HashLoader} from 'react-spinners'
import { Flex } from '@chakra-ui/react'


const ItemDetalCont = () => {
    const [product, setProduct ] = useState({})
    const {productId} = useParams()
    const [loading, setLoading] = useState(true)

    console.log(product)
    console.log(productId)

    useEffect(() => {
        getProductById(productId)
            .then((data) => setProduct(data))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [])

  return (
    <div>
      {
        loading ?
        <Flex justify={'center'} align={'center'} h={'50vh'}>
        <HashLoader/>                
        </Flex>
        :
        <Flex justify={'center'} align={'center'} h={'50vh'}>
        <ItemDetails {...product} />
        </Flex>
      }
      
    </div>
  )
}

export default ItemDetalCont