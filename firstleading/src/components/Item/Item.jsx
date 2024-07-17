import React from 'react'
import './Item.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link} from "react-router-dom"

const Item = ({nombre, id, img, precio, descripcion, stock}) => {
  return (
    <div className="card">
      <img src={img} alt='IMG' className="card-img" />
      <div className="card-body">
        <h2 className="card-title">{nombre}</h2>
        <p className="card-description">{descripcion}</p>
        <div className="card-footer">
          <span className="card-price">${precio}</span>
          <button className="card-button">
            <Link to = {`/producto/${id}`}> Ver más </Link>
          </button>
          <ItemCount initialValue = {1} stock = {stock}/>
        </div>
      </div>
    </div>
  )
}

export default Item