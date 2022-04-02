//import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Button from './component/button/Button';

function App() {
  const handclick = () => console.log(`Click green button`);

  return (
    <div className="App">
      <Button
        color="blue"
        handclick={() => console.log("Click blue button")}
      ></Button>
      <Button
        color="green"
        handclick={handclick}
      ></Button>
    </div>
  );
}

export default App;
