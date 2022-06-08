import React, { useState } from 'react';
import './App.css';
import { Inc } from './components/inc/Inc';
import { Input } from './components/input/Input';
import { Reset } from './components/reset/Reset';

function App() {

  const[count,setCount]=useState(0)

  const increment = () => {

        setCount(count + 1 )
}

   const reset =()=>{
     setCount(0)
   }

  return (
  
    <div className='Hello'>

      <Input  count={count}
      />

      <div>
        <Inc increment={increment}/>
        <Reset reset={reset} />
      </div>

    </div>

       
       
      
    
  );
}

export default App;
