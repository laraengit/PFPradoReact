import React from 'react'
import ItemDetail from './ItemDetail'
import { Flex,SimpleGrid} from '@chakra-ui/react'

const ItemDetailList = ({productos}) => {
  return (
    <div id='detail'>
        <Flex minWidth='max-content' alignItems='center' justifyContent= "space-around">
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'></SimpleGrid>
        { productos.map((p)=>{
                return(
                  <ItemDetail p = {p} key = {p.id}/>
                  
                )
                
            })
            }
        <SimpleGrid/>
            
            
        </Flex> 

        
    </div>
  )
}

export default ItemDetailList