import React, { useState } from 'react';
import Clicker from './component/clicker/Clicker';
import Timer from './component/timer/Timer';
//import logo from './logo.svg';
import './App.scss';
//import Button from './component/button/Button';
import Posts from './component/posts/Posts'
import Header from './component/header/Header';
import Registration from './component/registration/Registration'
import Login from './component/login/Login';
import LanguageContext from './contexts/LanguageContext';



const App: React.FC = () => {
  // const handclick = () => console.log(`Click green button`);
  const [lang, setLang] = useState("ru");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className="App-conteiner">
        <Header />
        {/* <Login /> */}
        {/* <Registration /> */}
        <Posts />
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
    </LanguageContext.Provider>
  );
}

export default App;
