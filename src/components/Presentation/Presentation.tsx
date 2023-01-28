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
  Para conseguir calcular essa taxa através da formula será necessário 4 variaveis
  (sexo, idade, peso e altura). 
  `

  const [name, setName] = useState("");

  const sendIndexStage = (): void => {
    props.handleCallBackName(name)
    props.handleFlow(1);
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