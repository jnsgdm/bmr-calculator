import { useState } from 'react';

import Modal from '../Modal/Modal';

import '../Presentation/Presentation.css'

import { AiOutlineCalculator,AiOutlineQuestionCircle } from "react-icons/ai";
import { CiCalculator2 } from "react-icons/ci";

type Props = {
  handleFlow: any;
  handleCallBackName: any;
}

function Presentation(props: Props) {
  const [start,setStart] = useState(false);

  const [name, setName] = useState("");

    const sendIndexStage = (): void => {
        if(name === ""){
          alert('pfv informe algum nome para ser chamad')
        }else{
          props.handleCallBackName(name)
          props.handleFlow(1);
        }
      }
    
      const handleStartWithEnter = (e: any) => {
        if(e.keyCode === 13){
          sendIndexStage()
        }
      }

  return ( 
    <div className="presentation"> 
      <h1>TBM Calculator</h1>
      <h3 className='h3-presentation'>
        Esse projeto tem como objetivo calcular a Taxa de Metabolismo Basal do usuário
      </h3>
      
      <div className='show-explain'>
        <div className='icon'>
          <AiOutlineQuestionCircle/>
        </div>
        <div className='explain'>
          <h3>Para que serve? </h3>
          <p>A taxa metabólica basal (TMB) mostra a média de calorias necessarias que uma pessoa
          parada, em jejum ou em repouso, gasta para sobreviver.</p>
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

      <Modal start={start} setStart={setStart}>
        <div className='content-modal'>
            <label htmlFor="">Me fale seu nome para começarmos:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} onKeyDown={handleStartWithEnter}/>
            <button onClick={sendIndexStage} className='btn'>Continuar</button>
          </div>
      </Modal>
      <button onClick={() => {setStart(true)}} className='btn'>Iniciar</button>
    </div>
  ) }

export default Presentation