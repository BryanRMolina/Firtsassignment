import {Center, Heading, Flex} from '@chakra-ui/react'
import React, { useEffect, useState} from 'react'
import { getProducts, getProductsByCategory } from '../data/asyncMock'
import  ItemList  from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'
import {HashLoader} from 'react-spinners'


const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        setLoading(true)

        const dataProductos = categoryId ? getProductsByCategory(categoryId) : getProducts()

            dataProductos
            .then((prod) => setProductos(prod))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [categoryId])

    return(
        <Flex direction = {'column'} justify = {'center'} align = {'center'}>
            <Heading mt={5}>{greeting}</Heading>
            {
                loading ?
                <Flex justify={'center'} align={'center'} h={'50vh'}>
                <HashLoader/>                
                </Flex>
                :
                <ItemList productos = {productos} />
            }
        </Flex>
    )
}

export default ItemListContainer