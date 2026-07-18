import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Optimus",
    age: 26
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-x1'>Tailwind Test</h1>
      <Card username ="chaiaurcode" btnText="Click Me" ></Card>
      <Card username ="chaiaurreact" btnText="Visit Me"></Card>
    </>
  )
}

export default App
