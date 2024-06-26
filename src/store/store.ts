import bt1 from "./reducer/bt1";
import bt2 from "./reducer/bt2"
import bt3 from "./reducer/bt3";
import bt4 from "./reducer/bt4";
import bt5 from "./reducer/bt5";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
    reducer:{
        bt1,bt2,bt3,bt4,bt5
    }
})
export default store