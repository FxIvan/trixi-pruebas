import React from "react";
import {Item} from '../Item/Item'

export const ItemList = ({states}) => {
  return (
    <div>
      {
        states.map((productos) => {
          return(
            <div key={productos.id}>
              <Item item={productos}/>
            </div>
          )
        })
      }
    </div>
  );
};
