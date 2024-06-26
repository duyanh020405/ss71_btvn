import { createSlice } from "@reduxjs/toolkit";
const arrNumber=createSlice({
    name:"arr",
    initialState:{},
    reducers:{
        changeNumber:(state:any)=>{
        let a:number = Math.floor(Math.random() *100)
        let b:number = Math.floor(Math.random() *100)
        let c:number = Math.floor(Math.random() *100)
            state.arrNumber1 = [a," ,",b," ,",c]
        }
    }
})
export const {changeNumber} = arrNumber.actions
export default arrNumber.reducer