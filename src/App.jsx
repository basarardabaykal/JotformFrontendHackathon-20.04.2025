import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Items from "./components/Items.jsx"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-black h-auto w-screen overflow-x-hidden flex justify-center items-center'>
        
        <Items></Items>
      </div>
    </>
  )
}

export default App
