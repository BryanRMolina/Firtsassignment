import { Button } from '@chakra-ui/react'
import React, {useState} from 'react'


const ItemCount = ({initialValue, stock, onAdd}) => {
    const [ count, setCount ] = useState(initialValue)

    const incrementar = () => {
        count < stock && setCount(count + 1)
    }

    const decrementar = () => {
        count > initialValue && setCount(count - 1)
    }
    return (
        <div>
            <button onClick={decrementar}>-</button>
            <span>{count}</span>
            <button onClick={incrementar}>+</button>
            <Button onClick={() => onAdd(count)}>
                Agregar
            </Button>
        </div>
  )
}

export default ItemCount