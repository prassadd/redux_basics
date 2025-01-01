import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
export const getData = createAsyncThunk('getCartData', async(state,action) => {
    try{
        const data = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(data)
        return data.data;
    }catch(error){

    }
})
const cartSlice = createSlice({
    name:'cart',
    initialState:{
        data:[],
        loading:false
    },
    reducers:{
        add:(state,action) => {
            console.log(action)
            state.data = [...state.data,action.payload.name]
        }
    },
    extraReducers:(builder) => {
        (builder).
        addCase('getCartData/fulfilled',(state,action) => {
            console.log(action)
            state.data = action.payload;
        })
    }

})

export default cartSlice.reducer
export const {add} = cartSlice.actions