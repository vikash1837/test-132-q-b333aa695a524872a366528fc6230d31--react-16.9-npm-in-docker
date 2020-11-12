import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App(){
  const[Result,setResult]=useState("");
  const clear=()=>{
    setResult("");
  }
  const deletefromend=()=>{
    setResult(Result.slice(0,Result.length-1);
  }
  const click=(event)=>{
      setResult(Result.concat(event.target.name));
  }
  const Answer=()=>{
    try{
      setResult(eval(Result).toString());
    }catch(err){
      setResult("Err");
    }
  return (
    <div className="App">
    <form>
    <input type="text",value={Result}/>
    </form>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    <div className="keys">
    <button id="clear" onClick={clear}>AC</button>
    <button id="delete" onClick={deletefromend}>DELETE</button>
    <button id="Result" onClick={Answer}>=</Result>
    <button name="/" onClick={click}>/</button>
    <button name="7" onClick={click}>7</button>
    <button name="8" onClick={click}>8</button>
    <button name="9" onClick={click}>9</button>
    <button name="*" onClick={click}>*</button>
    <button name="4" onClick={click}>4</button>
    <button name="5" onClick={click}>5</button>
    <button name="6" onClick={click}>6</button>
    <button name="/" onClick={click}>-</button>
    <button name="1" onClick={click}>1</button>
    <button name="2" onClick={click}>2</button>
    <button name="3" onClick={click}>3</button>
    <button name="+" onClick={click}>+</button>
    <button name="%" onClick={click}>%</button>
    <button name="0" onClick={click}>0</button>
    <button name="." onClick={click}>.</button>
    </div>
    </div>
  );
}

export default App;
