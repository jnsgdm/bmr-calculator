import { BsGenderFemale,BsGenderMale} from "react-icons/bs";

type Props = {}

const GenderIcon = (props: Props) => {
  return (
    <div>
        <BsGenderFemale/>
        <BsGenderMale/>
    </div>
  )
}

export default GenderIcon