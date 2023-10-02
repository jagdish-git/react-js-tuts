import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-amber-500 text-3xl underline'>RTK TODO</h1>
      <AddTodo />
      <Todos />
    </>
  )
}
7
export default App
