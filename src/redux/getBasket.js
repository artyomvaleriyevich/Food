import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllBasket = createAsyncThunk(
    'getBasket/getAllBasket',
    async (_,{rejectWithValue}) =>{
        try{
            const res = await  axios(`http://localhost:5555/basket`)
            if (res.status !== 200){
                throw new Error('Server error!')
            }
            return res.data
        }catch (err) {
            return rejectWithValue(err.message)
        }
    }
)


export const getBasket = createSlice({
    name: 'getBasket',
    initialState: {
        allBasketCard: []
    },
    reducers: {

    },
    extraReducers : {
        [getAllBasket.pending] : (state, action) => {
            state.status =  'loading'
        },
        [getAllBasket.fulfilled] : (state, action) => {
            state.status = 'success'
            state.productInfo = action.payload
        },
        [getAllBasket.rejected] : (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

export default getBasket.reducer
export const {} = getBasket.actions