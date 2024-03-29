import { useEffect, useState } from 'react'

import { normalizeInputs } from '../../utils/masks';

import ShowData from './ShowData/ShowData';
import Steps from './Steps/Steps';

import {Question} from './interfaces/Question'

import { GiBodyHeight } from "react-icons/gi";
import { BsFillCalculatorFill,BsCalendarEvent } from "react-icons/bs";
import { FaWeightHanging } from "react-icons/fa";
import GenderIcon from './Steps/GenderIcon';

import './Question.css'


type Props = {
  handleFlow: any;
  handleCallbackData: any;
  userName: string;
}

const questions: Question[] = [
  {id: 1, question: 'o seu genero biológico', desc: 'Genero', step: <GenderIcon/>},
  {id: 2, question: 'a sua idade', desc: 'Idade', step: <BsCalendarEvent/>},
  {id: 3, question: 'o seu peso (em Kg)', desc:'Peso', step: <FaWeightHanging/>},
  {id: 4, question: 'a sua altura (em metros)', desc:'Altura', step: <GiBodyHeight/>},
  {id: 5, question: 'calcular ', desc: 'Calcular', step: <BsFillCalculatorFill/>}
];

interface Basal {
  gender: string,
  age: string,
  height: string,
  weight: string
}

const QuestionFlow = (props: Props) => {
  const [requestData, setRequestData] = useState(questions[0].question);
  const [inputValue, setInputValue] = useState("");

  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [calc, setCalc] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  
  useEffect(()=>{
    if(questionIndex < 4){
      setRequestData(questions[questionIndex].question);
    }
  },[gender,age,height,weight])

  const handleGetNextQuestion = (i: number) => {
    switch (i) {
        case 0:
          if(inputValue !== ""){
            setGender(inputValue);
          }else{
            //componente de msg
            alert('pfv preencha o campo antes de avançar')
            return;
          }
          setInputValue("");
          break;
        case 1: 
          if(inputValue !== ""){
            setAge(inputValue);
          }else{
            //componente de msg
            alert('pfv preencha o campo antes de avançar')
            return;
          }            
          setInputValue("");
          break;
        case 2: 
          if(inputValue !== ""){
            setWeight(inputValue);
          }else{
            //componente de msg
            alert('pfv preencha o campo antes de avançar')
            return;
          }
          setInputValue("");
          break;
        case 3:
          if(inputValue !== ""){
            setHeight(inputValue);
          }else{
            //componente de msg
            alert('pfv preencha o campo antes de avançar')
            return;
          }
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

  const sendIndexStage = (): void => {
    props.handleCallbackData(gender,age,height,weight)
    props.handleFlow(2);
  }

  const handleStartWithEnter = (e: any) => {
    if(e.keyCode === 13){
      handleGetNextQuestion(questionIndex);
    }
  }

  useEffect(() => {
    if(questionIndex === 3){
      let normalized: any = normalizeInputs(inputValue,'m');
      if(normalized !== ""){
        setInputValue(normalized);
      }
    }
    if(questionIndex === 2){
      let normalized: any = normalizeInputs(inputValue,'kg');
      if(normalized !== ""){
        setInputValue(normalized);
      }
    }
    if(questionIndex === 1){
      let normalized: any = normalizeInputs(inputValue,'a');
      if(normalized !== ""){
        setInputValue(normalized);
      }
    }
  },[inputValue]); 

  return (
    <div className='question-card'>
      <Steps questions={questions} questionIndex={questionIndex}/>
      <div className='steps2'>
        <p>Etapa {questionIndex+1}/5</p>
      </div>
      {questionIndex <= 3 && 
        <div className='show-question'>
          <h3>Informe {requestData}: </h3>
        </div>
      }
      {gender === '' && 
        <select value={inputValue} onChange={(e) => setInputValue(e.target.value)}>
          <option value="">-- Selecione --</option>
          <option value="f">Feminino</option>
          <option value="m">Masculino</option>
        </select>
      }
      {(questionIndex > 0 && questionIndex <= 3) && <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleStartWithEnter}/> }
      {questionIndex <= 3 && <button onClick={() => handleGetNextQuestion(questionIndex)} className='btn'>Avançar</button>}
      {calc && <ShowData sedIndexStage={sendIndexStage} basalObj={obj}/>}
    </div>
  ) }

export default QuestionFlow