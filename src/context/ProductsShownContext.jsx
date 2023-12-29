import { createContext, useState } from "react";

export const ProductContext = createContext(null)
export const ProductsShownProvider = ({children})=>{

    const [productsShown, setProducts] = useState([])
    const[categoria, setCategoria] = useState("")

    return(
        <ProductContext.Provider value={{productsShown, setProducts,categoria,setCategoria}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductsShownProvider