import { useFormulaBasal } from '../../hooks/useFormulaBasal'

import './Result.css'

type Props = {
  data: any;
  userName: String;
  handleReStart: any;
}

function Result(props: Props) {
  const valor = useFormulaBasal(props.data);

  return (    
    <div className='presentation'>
      <h1>Resultado</h1>
      <div className='explain'>
        <h3 className='h3-presentation'>{props.userName}, você gasta <b>{valor}</b> para sobreviver!</h3>
      </div>
      <div className='show-explain'>
        <span className="material-symbols-outlined">
          keyboard_arrow_up
        </span>
        <div className='explain-result'>
          <h3>Caso queira ganhar massa: </h3>
          <p>Precisa consumir mais que {valor} por dia, gerando um superávit calórico.</p>
        </div>
      </div>
      <div className='show-explain'>
        <span className="material-symbols-outlined">
          expand_more
        </span>
        <div className='explain-result'>
          <h3>Caso queira perder massa: </h3>
          <p>Precisa consumir menos que {valor} por dia, gerando déficit calórico.</p>
          <p></p>
        </div>
      </div>
      <button className='btn' onClick={props.handleReStart}>Calcular novamente</button>
    </div>
  )
}

export default Result