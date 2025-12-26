import { createContext, useState } from "react";

export const CartContext =createContext()

export  const CartContextProvider = ({children})=>{

    let[count,setCount]=useState(2)

return <CartContext.Provider value={{count,setCount}}>
    {children}
</CartContext.Provider>
}