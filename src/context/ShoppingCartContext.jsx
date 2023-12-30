import { createContext, useState } from "react";

export const CartContext = createContext(null)
export const ShoppingCartProvider = ({children})=>{

    const [cart, setCart] = useState([])
    const [prodCart, setProdCart] = useState([])
    const limpiarCarrito = () => {
        setCart([])
      }

    return(
        <CartContext.Provider value={{cart, setCart, limpiarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

export default ShoppingCartProvider