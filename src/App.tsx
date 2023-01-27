import Presentation from './components/Presentation/Presentation';
import Result from './components/Result/Result';
import Question from './components/Question/Question';

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

  return (
    <div className="App">
      {appStage === 1 && <Presentation handleFlow={handleFlow}/>} 
      {appStage === 2 && <Question handleFlow={handleFlow} handleCallbackData={handleCallbackData}/>}
      {appStage === 3 && <Result data={valueBasal}/>}
    </div>
  );
}

export default App;
