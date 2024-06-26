import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeNumber } from '../store/reducer/bt2'


export default function Bt2() {
  const data:any = useSelector(state => state);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(changeNumber());
  }

  return (
    <div>
      <h2>Bai 2</h2>
      <p>Arr: [{data.bt2.arrNumber1}]</p>
      <button onClick={handleChange}>Change Number</button>
    </div>
  )
}
