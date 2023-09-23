import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <header>The JS Quiz</header>
        <section className="viewport">
          <SceneMCQuestion></SceneMCQuestion>
        </section>
    </>
  )
}

export default App
