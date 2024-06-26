import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { change } from '../store/reducer/bt3'

export default function Bt3() {
    const data:any = useSelector(state=>state)
    const dispatch = useDispatch()
    const changeCo=()=>{
        console.log(data.bt3.color);
        
        dispatch(change())
    }


  return (
    <div>
        <h2>Bai 3</h2>
        <div style={{backgroundColor:`${data.bt3.color}`,border:"1px solid black",position:"relative",width:300,height:200}}>
           <button onClick={()=>changeCo()}>Change Color</button>
        </div>
    </div>
  )
}
