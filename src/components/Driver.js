import React, { useState } from "react";
import Select from 'react-select'
import Stopwatch from './Stopwatch'

const select_options = [
  { value: 2, label: 'two' },
  { value: 3, label: 'three' },
  { value: 4, label: 'four' }
]

const Driver = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1)
  const [cycle, setCycle] = useState(0)

  const UpdateCount = (upd_by) => {
    let prev = count
    let newCount = count + upd_by 
    setCount(newCount)
    console.log('prev', prev)
    console.log('count', newCount)
    console.log('cycle', cycle)
    if (((prev > 0) && (newCount < 0)) ||
       ((prev < 0) && (newCount > 0)) || 
       (newCount === 0)) {
         setCycle(cycle + 1)
       }
  }
  
  const IncNum = () => {
    UpdateCount(amount)
  };

  const DecNum = () => {
    UpdateCount(-Math.abs(amount))
  };

  const setSelectVal = (evt) => {
    setAmount(evt.value)
  }

  return (
    <>
      <div className="text-center mt-5">
        <h1 style={{display: "inline"}}>React Hooks</h1>
        <Stopwatch running={true} />
      </div>
      <div className="text-center" style={{ marginTop: "30vh" }}>
        <h1>{count}</h1>
        <br/>
        <Stopwatch running={true} amount={amount} cycle={cycle} showButtons={true} />
        <br/>
        <button
          onClick={DecNum}
          type="button"
          className="btn btn-primary btn-xl"
          style={{ marginRight: "15px" }}>
          Subract
        </button>
        <button
          onClick={IncNum}
          type="button"
          className="btn btn-primary btn-xl">
          Add
        </button>
      </div>
      <div className="select-container">
        <Select options={select_options} onChange={setSelectVal} /> 
      </div>
    </>
  );
};

export default Driver;
