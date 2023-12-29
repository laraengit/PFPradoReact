import { createContext, useState } from "react";

export const CartContext = createContext(null)
export const ShoppingCartProvider = ({children})=>{

    const [cart, setCart] = useState([])
    const [prodCart, setProdCart] = useState([])

    return(
        <CartContext.Provider value={{cart, setCart, prodCart, setProdCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default ShoppingCartProvider