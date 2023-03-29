import './ShowData.css'

type Props = {
  sedIndexStage: any
  basalObj: any
}

const ShowData = (props: Props) => {
  return (
    <div className='showdata'>
        <ul>
            <li><b>Genero biológico:</b> {props.basalObj.gender === 'f' ? 'Feminino' : 'Masculino'} </li>
            <li><b>Idade:</b> {props.basalObj.age} anos</li>
            <li><b>Altura:</b> {props.basalObj.height} m</li>
            <li><b>Peso:</b> {props.basalObj.weight} kg</li>
        </ul>
        <button onClick={props.sedIndexStage} className='btn'>Calcular</button>
    </div>
  )
}

export default ShowData