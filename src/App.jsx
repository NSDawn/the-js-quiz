import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SceneMCQuestion from './assets/scenes/SceneMCQuestion'
import S from './assets/data/en.json' 

function App() {

  return (
    <>
        <header>
          <h1>
            The JS Quiz
          </h1>
        </header>
        <section className="viewport">
          <SceneMCQuestion Q={S.questions[1]} ></SceneMCQuestion>
        </section>
    </>
  )
}

export default App
