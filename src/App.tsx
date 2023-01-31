import Presentation from './components/Presentation/Presentation';
import Result from './components/Result/Result';
import Question from './components/Question/Question';
import Footer from './components/Footer/Footer';

import { useState } from 'react';

import './App.css';

interface Stage {
  id: number,
  desc: string
}

const stage: Stage[] = [
  {id: 1, desc: 'apresentacao'},
  {id: 2, desc: 'questoes'},
  {id: 3, desc: 'resultado'}
];

function App() {
  const [appStage, setAppStage] = useState(stage[0].id);
  const [valueBasal, setValueBasal] = useState({})
  const [userName, setUserName] = useState("");

  const handleFlow = (value: number): void => {
    setAppStage(stage[value].id);
  }

  const handleCallbackData = (a:string, b:string, c:string, d:string): void => {
    const objBasal = {
      gender: a,
      age: b,
      height: c,
      weight: d
    }
    setValueBasal(objBasal);
  }

  const handleCallBackName = (name: string): void => {
    setUserName(name);
  }

  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      {appStage === 1 && <Presentation handleFlow={handleFlow} handleCallBackName={handleCallBackName}/>} 
      {appStage === 2 && <Question handleFlow={handleFlow} handleCallbackData={handleCallbackData} userName={userName}/>}
      {appStage === 3 && <Result data={valueBasal} />}
      <Footer/>
    </div>
  );
}

export default App;
