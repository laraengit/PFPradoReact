import{useContext, useState} from 'react'
import { Button, Badge, useToast, Flex, Spacer, ButtonGroup, Text } from '@chakra-ui/react'
import useCounter from '../hooks/useCounter'
import { CartContext } from '../context/ShoppingCartContext'

const ItemCount = ({p}) => {
    
    /* const [count,setCount] = useState(0) */
    const {cart, setCart} = useContext(CartContext)
    
    const idnew = p.id

    const {count, increment, decrement} = useCounter(1,1)
    const toast = useToast()

    const addToCart = (()=>{
      setCart((currItems) => {
        const isItemsFound = currItems.find((item) => item.id === idnew);
        if (isItemsFound) {
          return currItems.map((prod) => {
            if (p.id === idnew) {
              let cantidadProducto = prod.quantity + count
              let totalProducto = cantidadProducto * prod.precio
              return { ...prod, quantity: cantidadProducto, totalProd: totalProducto };
            } else {
              return prod;
            }
          },[]);
        } else {
          let totalProducto = count * p.precio
          return [...currItems, { ...p, quantity: count,totalProd: totalProducto}];
        }
      },[]);   

        toast({
            title: 'Producto agregado',
            description: `Se agregaron ${count} ${p.nombre}`,
            status: 'success',
            variant:'subtle',
            duration: 5000,
            isClosable: true,
          })
          

    })


  return (
    <div>
        <Flex  alignItems='center' justifyContent= "space-between">
            <ButtonGroup spacing='4' >
                <Button  colorScheme='teal' variant='outline' onClick ={increment}>
                    +
                </Button>
                <Text>
                  {count}
                </Text>
                
                <Button colorScheme='teal' variant='outline' onClick ={decrement}>
                    -
                </Button>
            </ButtonGroup>

            <Button   colorScheme='pink' onClick ={addToCart}>Agregar al carrito</Button>

        </Flex>
        
    </div>
  )
}

export default ItemCount