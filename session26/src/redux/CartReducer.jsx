import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"cart",
    initialState:{
        productList:[]
    },
    reducers:{
        addtocart:(state,action)=>{
            let tempList = state.productList
            return {...state,
                productList:[...state.productList,action.payload]}
        }
    }
})

export const {addtocart} = CartSlice.actions

export default CartSlice.reducer