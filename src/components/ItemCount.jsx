import{useState} from 'react'
import { Button, Badge, useToast, Flex, Spacer, ButtonGroup } from '@chakra-ui/react'
import useCounter from '../hooks/useCounter'

const ItemCount = () => {
    
    /* const [count,setCount] = useState(0) */

    const {count, increment, decrement} = useCounter(0,1)
    const toast = useToast()

    const addToCart = ()=>{
        toast({
            title: 'Producto agregado',
            description: `${count} productos agregados`,
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
    }



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