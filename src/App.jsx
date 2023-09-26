import './App.css'
import SceneMCQuestion from './assets/scenes/SceneMCQuestion';
import S from './assets/data/en.json';
import { useState } from 'react';
import { useGlobal } from './AppContextProvider';
import LivesCounter from './assets/components/LivesCounter';

function App() {

  const [global, setGlobal] = useGlobal();
  
  
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
        
        <LivesCounter />
      </footer>
    </>
  )
}

export default App
