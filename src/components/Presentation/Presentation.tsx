import { useState } from 'react';
import '../Presentation/Presentation.css'

type Props = {
  handleFlow: any;
  handleCallBackName: any;
}

function Presentation(props: Props) {
  const explain: string = `
    A taxa metabólica basal (TMB) mostra a média de calorias necessarias que uma pessoa
    gasta parada, em jejum ou em repouso, para sobreviver.
    Para obter essa taxa é utilizada uma formula que necessita de 4 variaveis
    (sexo, idade, peso e altura).
  ` 

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
      <h2> 
        {explain}
      </h2>
      <label htmlFor="">Me fale seu nome para começarmos:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} onKeyDown={handleStartWithEnter}/>
      <button onClick={sendIndexStage} >Iniciar</button>
    </div>
  ) }

export default Presentation