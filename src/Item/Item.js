import React from 'react'

export const Item = ({item}) =>{
    return(
        <div>
            <h1>{item.titulo}</h1>
            <img src={item.img} alt="productos"/>
            <p>{item.descripcion}</p>
            <h2>{item.precio}</h2>
        </div>
    )
}