import { useState } from 'react';
import Modal from '../Modal/Modal';
import '../Presentation/Presentation.css'

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
      <h1>BMR Calculator</h1>
      <h3>Esse projeto tem como objetivo calcular a taxa de metabolismo basal do usuário</h3>

      <h3>O que é Taxa de Metabolismo Basal? </h3>
      <h5>A taxa metabólica basal (TMB) mostra a média de calorias necessarias que uma pessoa
      asta parada, em jejum ou em repouso, para sobreviver.</h5>

      <h3>O queé preciso para calcular essa taxa?</h3>
      <h5>Para obter essa taxa é utilizada uma formula que necessita de 4 variaveis
      (sexo, idade, peso e altura).</h5>
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