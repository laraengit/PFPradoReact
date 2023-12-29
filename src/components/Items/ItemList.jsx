import {useContext} from 'react'
import Item from './Item'
import { Flex, Spacer } from '@chakra-ui/react'
import { ProductContext } from '../../context/ProductsShownContext'

const ItemList = ({productos}) => {
  const {productsShown, setProducts} = useContext(ProductContext);
  console.log(productsShown)
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