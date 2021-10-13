import React from "react";
import "./style.css";

function Welcome(props) {
  return<h1> Hello, {props.name}</h1>;
}
function clickHandler(){
  window.alert("Hello from React!");
}
function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Chiara" />
      <h1 style={{color:"blue"}}> Hola Hola</h1>
      <button onClick={clickHandler}>
        Hola como vamos?
      </button>    
    </div>
  );
}
export default App;  

