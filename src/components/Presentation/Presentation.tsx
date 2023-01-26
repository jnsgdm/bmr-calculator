import '../Presentation/Presentation.css'

type Props = {
  handleFlow: any;
}

function Presentation(props: Props) {
  const explain: string = `
  A taxa metabólica basal (TMB) mostra a média de calorias necessarias que uma pessoa
  gasta parada, em jejum ou em repouso, para sobreviver.
  Para conseguir calcular essa taxa através da formula será necessário 4 variaveis
  (sexo, idade, peso e altura). 
  `

  const sedIndexStage = (): void => {
    props.handleFlow(1);
  }

  return ( 
    <div className="presentation"> 
      <h2> 
        {explain}
      </h2>
      <button onClick={sedIndexStage}>Iniciar</button>
    </div>
  ) }

export default Presentation