import React from 'react'
import './App.css';
import Counter from './components/counter'
import buttonToChangeColor from './components/buttonToChangeColor'
import ButtonToChangeColor from './components/buttonToChangeColor';

function App() {
  return (
    <div className="App">
      
      <Counter />
      <hr/>
      <ButtonToChangeColor />

    </div>
  );
}

export default App;
