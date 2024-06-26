import { createSlice } from "@reduxjs/toolkit";
const CountChange =createSlice({
    name :" counter",
    initialState:{
        count:0
    },
    reducers:{
        tang:(state:any)=>{
            state.count+=1
        },
        giam:(state:any)=>{
            state.count-=1
        },
        resert:(state:any)=>{
            state.count=0
        }
    }
})
export const {tang , giam , resert} = CountChange.actions
export default CountChange.reducer