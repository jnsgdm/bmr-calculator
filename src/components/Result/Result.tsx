import { useFormulaBasal } from '../../hooks/useFormulaBasal'

type Props = {
  data: any
}

function Result(props: Props) {
  const valor = useFormulaBasal(props.data);

  return (    
    <div>
      Teste: {valor}
    </div>
  )
}

export default Result