import { useEffect, useState } from 'react'

import './Question.css'
import ShowData from './ShowData/ShowData';

type Props = {
  handleFlow: any;
  handleCallbackData: any;
}

interface Question {
  id: number
  desc: string
}

const questions: Question[] = [
  {id: 1, desc: 'seu genero bilogico'},
  {id: 2, desc: 'sua idade'},
  {id: 3, desc: 'seu peso'},
  {id: 4, desc: 'sua altura'}
];

interface Basal {
  gender: string,
  age: string,
  height: string,
  weight: string
}

const QuestionFlow = (props: Props) => {
  const [requestData, setRequestData] = useState(questions[0].desc);
  const [inputValue, setInputValue] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [calc, setCalc] = useState(false);

  const [questionIndex, setQuestionIndex] = useState(0);
  
  useEffect(()=>{
    if(questionIndex < 4){
      setRequestData(questions[questionIndex].desc);
    }
  },[gender,age,height,weight])

  const handleGetNextQuestion = (i: number) => {
    switch (i) {
        case 0:
          if(inputValue !== ""){
          }
          setGender(inputValue);
          setInputValue("");
          break;
        case 1: 
            setAge(inputValue);
            setInputValue("");
            break;
        case 2: 
            setHeight(inputValue);
            setInputValue("");
            break;
        case 3:
            setWeight(inputValue);
            setInputValue("");
            setCalc(true);
            break;
    }
    setQuestionIndex(questionIndex+1);
  }

  const obj: Basal = {
    gender: gender,
    age: age,
    height: height,
    weight: weight
  }

  const sedIndexStage = (): void => {
    props.handleCallbackData(gender,age,height,weight)
    props.handleFlow(2);
  }

  return (
    <div className='questionflow'>
      {questionIndex <= 3 && <h4>Informe {requestData}</h4>}
      {gender === '' && 
        <select value={inputValue} onChange={(e) => setInputValue(e.target.value)}>
          <option value="">-- Selecione --</option>
          <option value="f">Feminino</option>
          <option value="m">Masculino</option>
        </select>
      }
      {(questionIndex > 0 && questionIndex <= 3) && <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/> }
      {questionIndex <= 3 && <button onClick={() => handleGetNextQuestion(questionIndex)}>Avançar</button>}
      {calc && <ShowData sedIndexStage={sedIndexStage} basalObj={obj}/>}
    </div>
  ) }

export default QuestionFlow