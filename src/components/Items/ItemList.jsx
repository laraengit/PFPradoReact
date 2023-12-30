import {useContext} from 'react'
import Item from './Item'
import { Flex, Spacer, SimpleGrid } from '@chakra-ui/react'
import { ProductContext } from '../../context/ProductsShownContext'

const ItemList = ({productos}) => {
  const {productsShown, setProducts} = useContext(ProductContext);
  console.log(productsShown)
  return (
    <SimpleGrid spacing={5} templateColumns='repeat(auto-fill, minmax(300px, 3fr))'>
      {productos.map((p)=>{
          return(
            <Item p = {p} key = {p.id} />
            
          )
        })}
    </SimpleGrid>
        
        
        
      

    
    
  )
}

export default ItemList