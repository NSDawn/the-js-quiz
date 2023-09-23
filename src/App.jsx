import { useState, useContext, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SceneMCQuestion from './assets/scenes/SceneMCQuestion'
import S from './assets/data/en.json' 
import { G } from './AppContextProvider'

function App() {


  const [global, setGlobal] = G();
  useEffect(() => {
    setGlobal({...global, lives: 2});
  }, [])

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

        <button onClick={() => { setGlobal({...global, currQuestion: global.currQuestion + 1}) }}>
        debugChangeQuestion
      </button>
      <footer>
        <h3>
          {S.titles.lives} {global.lives}
        </h3>
      </footer>
    </>
  )
}

export default App
