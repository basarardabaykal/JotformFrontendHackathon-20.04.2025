import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-black h-screen w-screen flex justify-center items-center'>
        <p className='text-white text-4xl'>Hello World!</p>
      </div>
    </>
  )
}

export default App
