import './App.css';
import Screen from './Screen';
import KeyBoard from './KeyBoard';
import {useState} from "react";
import background from "./img/images.png"

function App() {
  const [exp, setExp] = useState(" ");
  const [res, setRes] = useState("0");
  return (
    <div style={{ 
      backgroundImage: `url(${background})`,
      height: '100vh',
      width: '100wh'
      }} >
      <div className='App'>
      <Screen result = {res} setRes = {setRes} exp = {exp}/>
      <KeyBoard exp = {exp} setExp = {setExp} setRes = {setRes}/>
      </div>
    </div>
  );
}

export default App;
