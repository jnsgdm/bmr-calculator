import React from 'react'

type Props = {
  sedIndexStage: any
  basalObj: any
}

const ShowData = (props: Props) => {
  return (
    <div>
        <ul>
            <li>Genero biologico: {props.basalObj.gender} </li>
            <li>Idade: {props.basalObj.age}</li>
            <li>Altura: {props.basalObj.height}</li>
            <li>Peso: {props.basalObj.weight}</li>
        </ul>
        <button onClick={props.sedIndexStage}>Calcular</button>
    </div>
  )
}

export default ShowData