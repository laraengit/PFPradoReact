import React from 'react'
import { Card, CardBody,Heading, Text, Stack, Divider, CardFooter, ButtonGroup, Button, Image } from '@chakra-ui/react'
import ItemCount from '../ItemCount'
import { useParams } from 'react-router-dom'
import ShoppingCartProvider from '../../context/ShoppingCartContext'
const ItemDetail = ({p}) => {
    /* const {id}  = useParams()
    } */
    
  return (
    <Card maxW='md' >
        <CardBody>
        <Heading size='lg'>{p.nombre}</Heading>
            <Image
            src={p.imagen}
            alt='Imagen ilustrativa del producto'
            borderRadius='lg'
            />
            <Stack mt='5' spacing='4'>
            
            <Text fontSize='2xl'>
                {p.descripcion}
            </Text>
            <Text fontSize='2xl'>
                {p.categoria}
            </Text>
            <Text color='gray.700' fontSize='2xl'>
                ${p.precio}
            </Text>
            </Stack>
        </CardBody>
        <Divider />
            <CardFooter>
            <ButtonGroup spacing='2' >
                    <ItemCount p = {p}/>
            </ButtonGroup>
        </CardFooter> 
    </Card>

  )
}

export default ItemDetail