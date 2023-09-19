import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  let newArray = [1,3,5,7]

  let newObj = {
    age:23,
    address:'India',
    city:'Pune'
  }

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind CSS Props</h1>
      <Card userName="Sarah" array = {newArray} obj={newObj}/>
      <Card userName="Kiara" btnText='follow me' />


    </>
  )
}

export default App