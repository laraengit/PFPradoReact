import { Icon, Badge } from '@chakra-ui/react'
import { CalendarIcon } from '@chakra-ui/icons'
import { useContext } from 'react'
import { CartContext } from '../../context/ShoppingCartContext'
import { CiShoppingCart } from "react-icons/ci";
const CardWidget = () => {
  const {cart, setCart} = useContext(CartContext)
  const quantity = cart.reduce((acc,curr) => acc+curr.quantity,0 )
  console.log(quantity)




  return (
    <div>
      
        <Icon as={CiShoppingCart} boxSize={6}/>
        <Badge colorScheme='green'>{quantity}</Badge>

    </div>
  )
}

export default CardWidget