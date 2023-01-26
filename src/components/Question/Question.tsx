import { useEffect, useState } from 'react'

import './Question.css'

type Props = {
  handleFlow: any;
}

interface Question {
  id: number,
  desc: string
}

const questions: Question[] = [
  {id: 1, desc: 'seu genero bilogico'},
  {id: 2, desc: 'sua idade'},
  {id: 3, desc: 'seu peso'},
  {id: 4, desc: 'sua altura'}
];


const QuestionFlow = (props: Props) => {
  const [requestData, setRequestData] = useState(questions[0].desc);
  const [inputValue, setInputValue] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(()=>{
    setQuestionIndex(questionIndex+1);
    setRequestData(questions[questionIndex].desc);
  },[gender,age,height,weight])

  const handleGetNextQuestion = (i: number) => {
    switch (i) {
        case 0:
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
            break;
    }
  }

  const sedIndexStage = (): void => {
    props.handleFlow(2);
  }

  return (
    <div className='questionflow'>
      <h4>Informe {requestData}</h4>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      {questionIndex <= 2 && <button onClick={() => handleGetNextQuestion(questionIndex)}>Avançar</button>}
      {questionIndex === 3 && <button onClick={sedIndexStage}>Calcular</button>}
    </div>
  ) }

export default QuestionFlow