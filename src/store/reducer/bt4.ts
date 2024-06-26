import { createSlice } from "@reduxjs/toolkit"
const changeBook = createSlice({
    name:"hi",
    initialState:{
        type:"column",
        width :100 ,
        height :50

    },
    reducers:{
        change2:(state:any)=>{
            if(state.type=="column"){
                state.type = "row"
                state.width=60
                state.height=60
            }
            else{
                state.type="column"
                state.width=200
                state.height=30
            }

        }
        
    }
})
export default changeBook.reducer
export const {change2} = changeBook.actions