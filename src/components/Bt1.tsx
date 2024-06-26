import React from 'react'
import { tang , giam, resert } from '../store/reducer/bt1'
import { useDispatch, useSelector } from 'react-redux'
export default function Bt1() {
  const data:any = useSelector(state=>state)
  const dishpath = useDispatch()
  const tang1 =()=>{
    dishpath(tang())
  }
  const giam1 =()=>{
    dishpath(giam())
  }
  const datlai =()=>{
    dishpath(resert())
  }

  return ( 
    <div>
      <h2>Bai 1</h2>
      <p>Count : {data.bt1.count}</p>
      <button onClick={()=>tang1()}>Tang</button>
      <button onClick={()=>giam1()}>Giam</button>
      <button onClick={()=>datlai()}>Resert</button>
      
    </div>
  )
}
