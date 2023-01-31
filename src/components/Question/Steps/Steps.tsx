import {Question} from '../interfaces/Question'

import './Steps.css'

type Props = {
    questions: Question[];
    questionIndex: number;
}

const Steps = (props: Props) => {
    return (
        <div className='steps'>
            {props.questions.map((question)=>(
                <div className={question.id === props.questionIndex ? 'active-step' : 'step'}>
                {question.step}
                </div>
            ))}
        </div>
    )
    }

export default Steps