import { useState } from 'react';

import Modal from '../Modal/Modal';

import '../Presentation/Presentation.css'

import { AiOutlineCalculator,AiOutlineQuestionCircle } from "react-icons/ai";

type Props = {
  handleFlow: any;
  handleCallBackName: any;
}

function Presentation(props: Props) {
  const [start,setStart] = useState(false);

  const [name, setName] = useState("");

    const sendIndexStage = (): void => {
        // if(name === ""){
        //   alert('pfv informe algum nome para ser chamad')
        // }else{
        //   props.handleCallBackName(name)
        // }
        props.handleFlow(1);
      }
    
      const handleStartWithEnter = (e: any) => {
        if(e.keyCode === 13){
          sendIndexStage()
        }
      }

  return ( 
    <div className="presentation"> 
      <h1>Calculadora de Taxa Basal</h1>
      <h3 className='h3-presentation'>
        Fundamental para descobrir quantas calorias você gasta para sobreviver!
      </h3>
      
      <div className='show-explain'>
        <div className='icon'>
          <AiOutlineQuestionCircle/>
        </div>
        <div className='explain'>
          <h3>Para que serve? </h3>
          <p>A partir dessa taxa é possível calcular um deficit calorico (caso queira emagrecer), ou um superavit calorico (caso queira ganhar massa).</p>
        </div>
      </div>

      <div className='show-explain'>
        <div className='icon'>
          <AiOutlineCalculator />
        </div>
        <div className='explain'>
          <h3>Como essa taxa é calculada?</h3>
          <p>Para obter essa taxa é utilizada uma formula que necessita de 4 variaveis
          (genero biologico, idade, peso e altura).</p>
        </div>
      </div>

      {/* <Modal start={start} setStart={setStart}>
        <div className='content-modal'>
            <label htmlFor="">Me fale seu nome para começarmos:</label>
            <input className='input-name-modal' type="text" value={name} onChange={(e) => setName(e.target.value)} onKeyDown={handleStartWithEnter}/>
            <button onClick={sendIndexStage} className='btn'>Continuar</button>
          </div>
      </Modal> */}
      <button onClick={sendIndexStage} className='btn'>Iniciar</button>
    </div>
  ) }

export default Presentation
