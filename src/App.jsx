import { useState, useContext, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SceneMCQuestion from './assets/scenes/SceneMCQuestion'
import S from './assets/data/en.json' 
import { useGlobal } from './AppContextProvider'

function App() {

  let [global, setGlobal] = useGlobal();

  return (
    <>
      <header>
        <h1>
          {S.titles.the_js_quiz}
        </h1>
      </header>
      <section className="viewport">
        <SceneMCQuestion Q={S.questions[global.currQuestion]} ></SceneMCQuestion>
      </section>
      <footer>
        <h3>
          {S.titles.lives} {global.lives}
        </h3>
      </footer>
    </>
  )
}

export default App
