import React from 'react'
import { Box,Card, CardBody,Heading, Text, Stack, Divider, CardFooter, ButtonGroup, Button, Image } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
/* import ItemCount from '../itemCount' */
import { Link } from 'react-router-dom'


const Item = ({p}) => {
    
  return (

        <Card maxW='sm'  p='4'>
            <CardBody>
                <Box h = {'75%'} alignItems={'center'}>
                    <Image
                    maxW={{ base: '100%', sm: '250px' }}
                    src={p.imagen}
                    alt='Imagen ilustrativa del producto'
                    borderRadius='lg'
                />

                </Box>
                
                <Stack mt='6' spacing='3'>
                <Heading size='md'>{p.nombre}</Heading>
                <Text color='gray.700' fontSize='2xl'>
                    ${p.precio}
                </Text>
                </Stack>
            </CardBody>
            <Divider />
                <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='outline' colorScheme='pink'>
                    <Link to = {"/item/"+p.id}>
                        Ver detalle
                    </Link>
                    
                </Button>
                </ButtonGroup>
            </CardFooter> 
        </Card>
            

    
    
  )
}

export default Item