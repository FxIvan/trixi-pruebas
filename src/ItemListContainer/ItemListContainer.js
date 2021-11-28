import React, { useEffect, useState } from "react";
import { stock } from "../ItemList/AllProducts";
import { ItemList } from "../ItemList/ItemList";
import {useParams} from 'react-router-dom'

export const ItemListContainer = () => {
  const [states, setStates] = useState([]); // si no pongo[] el map no lo va a poder leer y aparece undefined
  
  const { category } = useParams()
  
  console.log(category)

  useEffect(() => {
    setTimeout(() => {
      const nuevoDatos = () => {
        return new Promise((resolve, reject) => {
          resolve(stock); //Termina el resolve
          reject(() => {
            setStates(<h1>Error en la Pagina</h1>);
            console.log("Error en la Pagina");
          });
        });
      };

      nuevoDatos()
        .then((resp) =>{
          if(!category){
            setStates(resp); //Este iria en el .then
          }else{
            setStates(resp.filter(prod =>{
              return(
              prod.category === category
              )
            }))
            }
          })
        .catch((err) => {
          setStates(err);
        });
    }, 2000);
  },[]);

  return (
    <div>
      <h1>ItemListContainer</h1>
      
      {
        <ItemList states={states}/>
      }
    </div>
  );
};
