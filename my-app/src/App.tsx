import React, { useState } from 'react';
import './App.css';
import { FullInput1 } from './components/fulInput1/FullInput1';
import { FullInput2 } from './components/fullinput2/FullInput2';




function App() {

 const[maxValue,setMaxValue]=useState(0)
 const[startValue,setStartValue]=useState(0)
  const[count,setCount]=useState(0)
  

  const addClick = () => {
     setStartValue(count)
     }

  const increment = () => {
        if(count < 5)
         setCount(count + 1 )
        }

   const reset =()=>{
     setCount(0)
     setStartValue(0)
     
   }

  return (
  
    <div className='Hello'>


      <FullInput1
        count={count}
        increment={increment}
        reset={reset}
      />

      <FullInput2
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        addClick={addClick}
        count={count}
        setStartValue={setStartValue}
        startValue={startValue}
      />

    </div>

  
  );
  }

export default App;
