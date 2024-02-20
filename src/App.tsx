import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <Rating/>
      <Accardion/>
    </div>
  );
}

export default App;


function Rating (){
  return(
      <div>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
      </div>
  )
}

function Accardion (){
  return(
      <div>
        <h3>menu</h3>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
  )
}

function Star (){
    return(
        <div>star</div>
    )
}
