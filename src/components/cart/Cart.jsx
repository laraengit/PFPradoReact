import React, { useContext } from 'react'
import { CartContext } from '../../context/ShoppingCartContext'
import { Card, CardBody,Heading, Text, Stack, Divider, CardHeader,CardFooter, ButtonGroup, Button, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Cart = () => {
const {cart, setCart} = useContext(CartContext)
const total = cart.reduce((acc, curr) => {
  return acc + curr.quantity;
}, 0);

const totalPrecio = cart.reduce(
  (acc, curr) => acc + curr.quantity * curr.precio,
  0
);

  /* setProdCart([{id:2, producto: "Crema humectante", descripcion: "Tamaño chico. Puede utilizarse todos los días. Composición natural e hipoalergénica.", precio: 5000, categoria: "250ml", imagen : "/src/assets/humectante.jpg"}]) */
  console.log("Estoy en Cart")
  console.log(cart)
  return (
    <div>
      <h1>Carrito de compra</h1>
      { cart.map((p)=>{
                return(
                  
                    <Card key={p.id}
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                  >
                    
                    <Image
                      
                      borderRadius='full'
                      boxSize='100px'
                      src={p.imagen}
                      alt={p.nombre}
                    />
                  
                    <Stack>
                      <CardBody>
                        <Heading size='md'>{p.nombre}</Heading>
                  
                        <Text py='2'>
                           Precio: ${p.precio} 
                        </Text>
                        <Text py='2'>
                          Cantidad: {p.quantity} 
                        </Text>
                      </CardBody>
                  
                      {/* <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                          Buy Latte
                        </Button>
                      </CardFooter> */}
                    </Stack>
                  </Card>
                )
            })
      }
      <div>Cantidad de ítems: {total}</div>
      <div>Total: ${totalPrecio}</div>
      <Link to={"/orden"}>
        <Button variant='solid' colorScheme='pink'>
          Finalizar compra 
        </Button>
          
      </Link>
      

    </div>
  )
}

export default Cart