import './App.css'
import SceneMCQuestion from './assets/scenes/SceneMCQuestion';
import S from './assets/data/en.json';
import { useState } from 'react';
import { useGlobal } from './AppContextProvider';
import LivesCounter from './assets/components/LivesCounter';
import Footer from './assets/components/Footer';

function App() {

  const [global, setGlobal] = useGlobal();

  return (
    <>
      <header>
        { global.currQuestion != '31' ? 
            <h1>
                The JS Quiz
            </h1>
        : null}
      </header>
      <section className="viewport">
        <SceneMCQuestion Q={S.questions[global.currQuestion]} ></SceneMCQuestion>
        <LivesCounter />
      </section>
      
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
