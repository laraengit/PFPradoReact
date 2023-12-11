import React from 'react'
import ItemDetail from './ItemDetail'
import { Flex } from '@chakra-ui/react'

const ItemDetailList = ({productos}) => {
  return (
    <div>
        <Flex minWidth='max-content' alignItems='center' justifyContent= "space-around">
            { productos.map((p)=>{
                return(
                    <ItemDetail p = {p} key = {p.id}/>
                )
            })
            }
        </Flex> 

        
    </div>
  )
}

export default ItemDetailList