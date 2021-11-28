import React,{useEffect,useState} from 'react'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router'
import { stock } from '../ItemList/AllProducts'


export const ItemDetailContainer = () =>{
    

    const [states, setStates] = useState([]);
    
    const {itemId} = useParams()
    console.log(typeof(itemId))

    useEffect(() => {

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
        .then(resp =>{
            setStates(resp.find(prod =>{
                return(
                prod.id === Number(itemId) //ponemos Number por que me devuelve un string y en el array es de tipo numero
                )
            }))
        })
        .catch(err=>{
            setStates(err)
        })
    }, [])

    return(
        <div>
        {
            <ItemDetail {...states}/>// esto va a item detail se llama SpreadOperator lo paso como una lista de argumentos y no como un array
                                    //es decir que dentro de ItemDetail accedo por propiedad y no dentro de un objeto como ejemplo item.precio sino que voy a accede por precio nomas
        }
        </div>
    )
}