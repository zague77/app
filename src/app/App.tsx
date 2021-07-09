import React from 'react';
//import logo from './logo.svg';
import './App.css';

import Button from './components/Button/Button'

function App() {
  return (
    <div className="App">
     <h1>Voici mon button</h1>
     <Button text ="Une valeur" backColor="bluesky"/>
     <Button text ="Une autre valeur" backColor="tomato" style={{textDecoration:'underline green',fontStyle:'italic'}}/>
     <Button text ="Une autre valeur" backColor="green"/>
     </div>
  );
}

export default App;
