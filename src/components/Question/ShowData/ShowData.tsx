import './ShowData.css'

type Props = {
  sedIndexStage: any
  basalObj: any
}

const ShowData = (props: Props) => {
  return (
    <div className='showdata'>
        <ul>
            <li>Genero biologico: {props.basalObj.gender === 'f' ? 'Feminino' : 'Masculino'} </li>
            <li>Idade: {props.basalObj.age}</li>
            <li>Altura: {props.basalObj.height}</li>
            <li>Peso: {props.basalObj.weight}</li>
        </ul>
        <button onClick={props.sedIndexStage} className='btn'>Calcular</button>
    </div>
  )
}

export default ShowData