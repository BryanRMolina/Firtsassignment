import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../data/asyncMock'
import ItemDetails from '../ItemDetails/ItemDetails'
import {HashLoader} from 'react-spinners'
import { Flex } from '@chakra-ui/react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'

const ItemDetalCont = () => {
    const [product, setProduct ] = useState({})
    const {productId} = useParams()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
      const getData = async () =>{
        const queryRef = doc(db, 'productos', productId)
        const response = await getDoc(queryRef)

        const newItem = {
          ...response.data(),
          id: response.id
        }

        setProduct(newItem)
        setLoading(false)

      }
      getData()
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