import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SceneMCQuestion from './assets/scenes/SceneMCQuestion'
import S from './assets/data/en.json' 

function App() {

  const [lives, setLives] = useState(3);
  const [currQuestion, setCurrQuestion] = useState(2);

  return (
    <>
        <header>
          <h1>
            {S.titles.the_js_quiz}
          </h1>
        </header>
        <section className="viewport">
          <SceneMCQuestion Q={S.questions[currQuestion]} ></SceneMCQuestion>
        </section>
        <footer>
          <h3>
            {S.titles.lives} {lives}
          </h3>
        </footer>
    </>
  )
}

export default App
