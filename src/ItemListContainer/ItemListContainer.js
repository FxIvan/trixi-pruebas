import React, { useEffect, useState } from "react";
import { stock } from "../ItemList/AllProducts";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
  const [states, setStates] = useState([]); // si no pongo[] el map no lo va a poder leer y aparece undefined
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
        .then((resp) => {
          setStates(resp); //Este iria en el .then
        })
        .catch((err) => {
          setStates(err);
        });
    }, 2000);
  });

  return (
    <div>
      {
        <ItemList states={states}/>
      }
    </div>
  );
};
