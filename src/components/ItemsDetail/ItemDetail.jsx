import React from 'react'
import { Card, CardBody,Heading, Text, Stack, Divider, CardFooter, ButtonGroup, Button, Image } from '@chakra-ui/react'
import ItemCount from '../itemCount'
import { useParams } from 'react-router-dom'
const ItemDetail = ({p}) => {
    /* const {id}  = useParams()
    } */
    
  return (
    <div >
        <Card maxW='sm' >
            <CardBody>
                <Image
                src={p.imagen}
                alt='Imagen ilustrativa del producto'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md'>{p.producto}</Heading>
                <Text>
                    {p.descripcion}
                </Text>
                <Text>
                    {p.categoria}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                    ${p.precio}
                </Text>
                </Stack>
            </CardBody>
            <Divider />
                <CardFooter>
                <ButtonGroup spacing='2'>
                    <ItemCount/>
                </ButtonGroup>
            </CardFooter> 
        </Card>

    </div>
  )
}

export default ItemDetail