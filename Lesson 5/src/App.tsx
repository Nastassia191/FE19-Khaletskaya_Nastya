import React from 'react';
import Clicker from './component/clicker/Clicker';
import Timer from './component/timer/Timer';
//import logo from './logo.svg';
import './App.scss';
//import Button from './component/button/Button';
import Posts from './component/posts/Posts'
import Header from './component/header/Header';
import Registration from './component/registration/Registration'

const App: React.FC = () => {
  // const handclick = () => console.log(`Click green button`);

  return (
    <div className="App-conteiner">
      <Header />
      <Registration />
      {/*<Posts />*/}
      {/* <Clicker />*/}
      {/*<Timer />*/}


      {/*<Button
        color="blue"
        handclick={() => console.log("Click blue button")}
      ></Button>
      <Button
        color="green"
        handclick={handclick}
  ></Button>*/}
    </div>
  );
}

export default App;
