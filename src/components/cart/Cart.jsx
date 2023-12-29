import React, { useContext } from 'react'
import { CartContext } from '../../context/ShoppingCartContext'
import { Card, CardBody,Heading, Text, Stack, Divider, CardFooter, ButtonGroup, Button, Image } from '@chakra-ui/react'

const Cart = () => {
const {cart, setCart} = useContext(CartContext)
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
                      objectFit='cover'
                      maxW={{ base: '100%', sm: '200px' }}
                      src={p.imagen}
                      alt={p.nombre}
                    />
                  
                    <Stack>
                      <CardBody>
                        <Heading size='md'>{p.nombre}</Heading>
                  
                        <Text py='2'>
                          Precio: {p.precio}
                        </Text>
                        <Text py='2'>
                          Cantidad:{p.quantity} 
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
    </div>
  )
}

export default Cart