import { createSlice } from "@reduxjs/toolkit"
const changeColor = createSlice({
    name:"hi",
    initialState:{
        color:"black"
    },
    reducers:{
        change:(state:any)=>{
            if(state.color==="white"){
                state.color="black"
            }
            else{
                state.color="white"

            }

        }
        
    }
})
export default changeColor.reducer
export const {change} = changeColor.actions