import React from 'react'
import './ItemDetails.css'
import ItemCount from '../ItemCount/ItemCount'
import { Button } from '@chakra-ui/react'

const ItemDetails = ({nombre, id, img, precio, descripcion, stock}) => {
    const onAdd = (quantity) => {
        console.log(`Agregaste ${quantity} productos`)
    }

  return (
    <div className="card" >
      <img src={img} alt='IMG' className="card-img" />
      <div className="card-body">
        <h2 className="card-title">{nombre}</h2>
        <p className="card-description">{descripcion}</p>
        <div className="card-footer">
          <span className="card-price">${precio}</span>
          <ItemCount initialValue = {1} stock = {stock} onAdd={onAdd}/>
        </div>
      </div>
    </div>  
    )
}

export default ItemDetails