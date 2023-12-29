import{useContext, useState} from 'react'
import { Button, Badge, useToast, Flex, Spacer, ButtonGroup } from '@chakra-ui/react'
import useCounter from '../hooks/useCounter'
import { CartContext } from '../context/ShoppingCartContext'

const ItemCount = ({p}) => {
    
    /* const [count,setCount] = useState(0) */
    const {cart, setCart} = useContext(CartContext)
    const idnew = p.id
    console.log(idnew)

    const {count, increment, decrement} = useCounter(0,1)
    console.log(`count: ${count}`)
    const toast = useToast()

    const addToCart = (()=>{
      setCart((currItems) => {
        const isItemsFound = currItems.find((item) => item.id === idnew);
        if (isItemsFound) {
          return currItems.map((prod) => {
            if (p.id === idnew) {
              return { ...prod, quantity: prod.quantity + count };
            } else {
              return prod;
            }
          },[]);
        } else {
          return [...currItems, { p, quantity: count}];
        }
      },[]);
      console.log(cart)    

        toast({
            title: 'Producto agregado',
            description: `${count} productos agregados`,
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          

    })

    const removeItem = (id) => {
      setCart((currItems) => {
        if (currItems.find((item) => item.id === id)?.quantity === 1) {
          return currItems.filter((item) => item.id !== id);
        } else {
          return currItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return item;
            }
          });
        }
      });
    };



  return (
    <div>
        <Flex minWidth='max-content' alignItems='center' justifyContent= "space-around">
            <ButtonGroup >
                <Button  colorScheme='teal' variant='outline' onClick ={increment}>
                    +
                </Button>
                {count}
                <Button colorScheme='teal' variant='outline' onClick ={decrement}>
                    -
                </Button>
            </ButtonGroup>
            

            <Spacer/>

            <Button   colorScheme='cyan' onClick ={addToCart}>Agregar al carrito</Button>

        </Flex>
        
    </div>
  )
}

export default ItemCount