import React from 'react';
import './App.css';
import { Inc } from './components/inc/Inc';
import { Input } from './components/input/Input';
import { Reset } from './components/reset/Reset';

function App() {
  return (
  
    <div className='Hello'>

      <Input />

      <div>
        <Inc />
        <Reset />
      </div>

    </div>

       
       
      
    
  );
}

export default App;
