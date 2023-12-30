import React, { useContext } from 'react'
import { CartContext } from '../../context/ShoppingCartContext'
import { Card, CardBody,Heading, Text, Stack, Divider, CardHeader,CardFooter, ButtonGroup, Button, Image } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
const Cart = () => {
const {cart, setCart, limpiarCarrito} = useContext(CartContext)
const total = cart.reduce((acc, curr) => {
  return acc + curr.quantity;
}, 0);

const totalPrecio = cart.reduce(
  (acc, curr) => acc + curr.quantity * curr.precio,
  0
);

//Funcion remover item
const removeItem = (() => {
  console.log("entro a remove item")
  const currItems = cart.filter(prod => prod.id !== idSelect)
  console.log(currItems)
  setCart(currItems)
})



  
  console.log("Estoy en Cart")
  console.log(cart)

  if (total === 0){
    return(
      <div>
        <h1>
          Carrito de compras
        </h1>
        <p>
          No se han seleccionado productos o servicios
        </p>
      </div>
    )
  }
  return (
    <div id='carritoGrande'>
      <h1>Carrito de compras</h1>
      <div id ="carrito">
      {cart.map((p)=>{
        let idSelect = p.id
        const removeItem = (() => {
          console.log("entro a remove item")
          const currItems = cart.filter(prod => prod.id !== idSelect)
          console.log(currItems)
          setCart(currItems)
        })
        console.log(p.id)
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
                           Precio unitario: ${p.precio} 
                        </Text>
                        <Text py='2'>
                          Cantidad: {p.quantity} 
                        </Text>
                        <Text py='2'>
                          Total por producto: ${p.totalProd} 
                        </Text>
                      </CardBody>
                  
                      {/* <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                          Buy Latte
                        </Button>
                      </CardFooter> */}
                    </Stack>
                      <Button colorScheme='gray' variant='ghost' onClick={removeItem} >
                      x
                      </Button>
                    </Card>
                )
            })
      }
      

      

      </div>
      <div id='resumenCompra'>
        <Stack>
          <Text py={'3'} fontSize='xl'>
          Cantidad de ítems: {total}
          </Text>
          <Text py={'3'} fontSize='xl'>
          Total: ${totalPrecio}
          </Text>
          <ButtonGroup spacing={'5'}  alignItems={'center'}>
          
          <Button variant='solid' colorScheme='pink' >
            <Link to={"/orden"}>
              Finalizar compra
              </Link>
          </Button>
              
          
          <Button variant='outline' colorScheme='pink' onClick={limpiarCarrito}>
            Limpiar carrito <DeleteIcon/>
            </Button>

        </ButtonGroup>
        </Stack>

      </div>
      

    </div>
  )
}

export default Cart