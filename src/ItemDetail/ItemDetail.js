import React from 'react'

export const ItemDetail = ({id,titulo,img,descripcion,precio}) =>{
    return(
        <div>
            <h2>{titulo}</h2>
            <img src={img}/>
            <p>{descripcion}</p>
            <h3>{precio}</h3>
        </div>
    )
}