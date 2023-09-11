import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import statusCode from './utils/statusCode'

const initialState = {
    data:[],
    status: statusCode.Success
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder
        // eslint-disable-next-line no-unused-vars
        .addCase(getProducts.pending, (state, action) => {
            state.status = statusCode.Loading
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.status = statusCode.Success
            state.data = action.payload
        })   
        // eslint-disable-next-line no-unused-vars
        .addCase(getProducts.rejected, (state, action) => {
            state.status = statusCode.Error
        })
    }
})

export const getProducts = createAsyncThunk('products/get', async() => {
    const data = await fetch('https://fakestoreapi.com/products')
    const result = await data.json()
    return result
})

export const {helloProducts} = productSlice.actions
export default productSlice.reducer

