import { useState } from 'react'

import './App.css'

function App() {
  const [status,setstatus] = useState('true')

  const onchangeButton = () =>{
    setstatus(!status)

  }
  

  return (
    <>
    <div className={status?'container-light':'container-dark'}>
      <div className="box">
        <i className={status?'ri-lightbulb-fill':'ri-lightbulb-flash-fill'}></i>
        <button onClick={() => onchangeButton()}>
          {status ? 'ON' : 'OFF'}
          </button>
      </div>
    </div>
      
    </>
  )
}

export default App
