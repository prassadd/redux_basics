import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './slice'
const store = configureStore({
    reducer:{
        cart:cartReducer
    }
})

console.log(store.getState())
export default store;