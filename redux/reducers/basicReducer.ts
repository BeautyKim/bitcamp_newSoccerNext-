import { createSlice } from "@reduxjs/toolkit"

export interface BmiType{
    name: string
    height: string
    weight: string
}

const initialState = {}

export const basicSlice = createSlice({
    name: 'basics',
    initialState,
    reducers: {
        
    }
})

export default basicSlice.reducer 