import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./reducer"
import cartReducer from "./CartReducer"

const CounterStore = configureStore({
    reducer:{
        counter:counterReducer,
        cart:cartReducer
    }
})

export default CounterStore