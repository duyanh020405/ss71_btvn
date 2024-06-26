import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { change2 } from '../store/reducer/bt4'

export default function Bt4() {
    const data:any = useSelector(state=>state)
    const dishpath = useDispatch()
    const changeBook = ()=>{
        dishpath(change2())

    }
  return (
    <div>
        <h2>Bai 4</h2>
      <div style={{display:"flex",flexDirection:`${data.bt4.type}`,gap:10}}>
        <div style={{backgroundColor:"pink",width:`${data.bt4.width}px`,height:`${data.bt4.height}px`}}>HI</div>
        <div style={{backgroundColor:"pink",width:`${data.bt4.width}px`,height:`${data.bt4.height}px`}}>HI</div>
        <div style={{backgroundColor:"pink",width:`${data.bt4.width}px`,height:`${data.bt4.height}px`}}>HI</div>
        <div style={{backgroundColor:"pink",width:`${data.bt4.width}px`,height:`${data.bt4.height}px`}}>HI</div>
      </div>
      <button onClick={changeBook}>Change Form</button>
    </div>
  )
}
