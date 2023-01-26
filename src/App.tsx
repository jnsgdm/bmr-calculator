import Presentation from './components/Presentation/Presentation';
import QuestionFlow from './components/Question/Question';
import Result from './components/Result/Result';

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

  const handleFlow = (value: number): void => {
    setAppStage(stage[value].id);
  }

  return (
    <div className="App">
      {appStage === 1 && <Presentation handleFlow={handleFlow}/>} 
      {appStage === 2 && <QuestionFlow handleFlow={handleFlow}/>}
      {appStage === 3 && <Result/>}
    </div>
  );
}

export default App;
