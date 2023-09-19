import { useState } from 'react'
import './App.css'



function App() {
  let [counter , setCounter]= useState(10)

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter+1)
    }
  }

  const removeValue = () => {
    if (counter > 0){
      setCounter(counter-1)
    }
  }
  return (
    <>
      <h1>Counter Hooks</h1>
      <h4>Counter Value : {counter}</h4>

        <button onClick={addValue}>Add Value : {counter}</button>
        <br />
        <button onClick={removeValue}>Remove Value : {counter}</button>

        <p>Footer: {counter}</p>
    </>
  )
}

export default App
