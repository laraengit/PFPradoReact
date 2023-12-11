import React from 'react'
import Item from './Item'
import { Flex, Spacer } from '@chakra-ui/react'

const ItemList = ({productos}) => {
  return (
    <Flex minWidth='max-content' alignItems='center' justifyContent= "space-around" flexWrap="wrap">
        {productos.map((p)=>{
          return(
            <Item p = {p} key = {p.id} />
          )
        })}
        
        
      

    </Flex>
    
  )
}

export default ItemList