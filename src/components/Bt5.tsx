import React from "react";
import { IoIosSpeedometer ,} from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { MdOutlineSlideshow } from "react-icons/md";
import { FaFile } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { changeB4 } from "../store/reducer/bt5";
export default function Bt5() {
    const data:any =useSelector(state => state)
    const dishpath =useDispatch()
    const change=()=>{
        dishpath(changeB4())
        console.log(data.bt5);
        
    }

  return (
    <div>
      <h2>Bai 5</h2>
      <div
        style={{
          backgroundColor: "darkblue",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          width:`${data.bt5.width}px`,
          height: 400,
        }}
      >
        <p style={{ color: "white" }}>
          <IoIosSpeedometer /> {data.bt5.DieuKhien}
        </p>
        <p style={{ color: "white" }}>
          <BsPeopleFill /> {data.bt5.TaiKhoan}
        </p>
        <p style={{ color: "white" }}>
          <FaMoneyBillWaveAlt/> {data.bt5.TaiSan}
        </p>
        <p style={{ color: "white" }}>
            <MdOutlineSlideshow></MdOutlineSlideshow>  {data.bt5.ThongKe}
        </p>
        <p style={{ color: "white" }}> 
            <FaFile/>{data.bt5.TaiLieu}
        </p>
        <button style={{ color: "white" ,backgroundColor:"darkblue" }} onClick={()=>change()}>{data.bt5.alertt}</button>

      </div>
    </div>
  );
}

