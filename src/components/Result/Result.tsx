import React, { useState } from 'react'
import { useFormulaBasal } from '../../hooks/useFormulaBasal'

type Props = {
  data: any
}

function Result(props: Props) {
  
  const handleCalculateBasal = (): void => {
    
  }

  const valor = useFormulaBasal(props.data);

  // const [sum, setSum] = useState();

  // let x = props.data.age + props.data.height + props.data.weight;
  // setSum(x);

  return (    
    <div>
      Teste: {valor}
    </div>
  )
}

export default Result