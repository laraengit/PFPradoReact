import {useContext} from 'react'
import CardWidget from './CardWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Flex,
    Box,
    Heading,
    ButtonGroup,
    Button,
    Spacer,
    Image,
  } from '@chakra-ui/react'
  import { ChevronDownIcon } from '@chakra-ui/icons'
  import { Link } from 'react-router-dom'
  import ShoppingCartProvider from '../../context/ShoppingCartContext'
  import { ProductContext } from '../../context/ProductsShownContext'
const NavBar = () => {
    const {productsShown, setProducts, categoria, setCategoria} = useContext(ProductContext)
  return (
    /* <div>Navbar
        <h3>Brand</h3>
        <CardWidget/>
    </div> */

    <div id="navbar">
        <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
                <Link to = {"/"}>
                    {/* <Heading size='md'>Gineco-store</Heading> */}
                    <Image
                      boxSize='25%'
                      src='../..\src\assets\logo-removebg-preview.png'
                      alt='Logo gineco-store'
                    />
                </Link>
                
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
                <Menu>
                    <MenuButton
                        px={4}
                        py={2}
                        transition='all 0.2s'
                        borderRadius='md'
                        borderWidth='1px'
                        _hover={{ bg: 'pink.200' }}
                        _expanded={{ bg: 'pink.400' }}
                        _focus={{ boxShadow: 'outline' }}
                    >Categoría <ChevronDownIcon/>
                        
                    </MenuButton>
                    <MenuList>
                        {/* <MenuItem>Consulta</MenuItem>
                        <MenuItem>Revisión de Estudios</MenuItem>
                        <MenuItem>Chip</MenuItem>
                        <MenuItem>Plasma</MenuItem> */}
                        
                        
                        <Link to = {"/servicios"}>
                            <MenuItem>
                            Servicios
                            </MenuItem>
                        </Link>
                        <Link to = {"/productos"}>
                            <MenuItem>
                            Productos
                            </MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
                <Button colorScheme='teal'>
                    
                    <Link to = {"/cart"}>
                            <CardWidget/>
                    </Link>
                    
                    
                    
                </Button>
            </ButtonGroup>
        </Flex>

    </div>

    
    
  )
}

export default NavBar