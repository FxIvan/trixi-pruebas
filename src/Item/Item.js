import React from 'react'
import {Link} from 'react-router-dom'
export const Item = ({item}) =>{
    return(
        <Link to={`/detail/${item.id}`}>
            <div key={item.id}>
            <h1>{item.titulo}</h1>
            <img src={item.img} alt="productos"/>
            <p>{item.descripcion}</p>
            <h2>{item.precio}</h2>
        </div>
        </Link>
    )
}