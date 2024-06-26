import { createSlice } from "@reduxjs/toolkit";
const changeButton = createSlice({
    name:"hihi",
    initialState:{
        DieuKhien:"",
        TaiKhoan:"",
        TaiSan:"",
        ThongKe:"",
        TaiLieu:"",
        width:50,
        alertt:"Mo ra"
    },
    reducers:{
        changeB4:(state:any)=>{
            if(state.DieuKhien ==""){
                state.DieuKhien="Bang Dieu Khien"
                state.TaiKhoan ="Tai Khoan"
                state.TaiSan ="Tai San"
                state.ThongKe ="Thong Ke"
                state.TaiLieu ="Tai Lieu"
                state.width=100
                state.alertt="Thu Gon"
            }
            else{
                state.DieuKhien=""
                state.TaiKhoan =""
                state.TaiSan =""
                state.ThongKe =""
                state.TaiLieu =""
                state.width=50
                state.alertt="Mo Ra"
            }

        }
    }
})
export default changeButton.reducer
export const {changeB4} = changeButton.actions