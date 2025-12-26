import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState:{
        count:1000
    },
    reducers:{
        increase:(state,action)=>{
            state.count= state.count+1
        },
        decrease:(state,action)=>{
            return {...state,count:state.count-1}
        }
    }
})

export const {increase,decrease} = counterSlice.actions

export default counterSlice.reducer