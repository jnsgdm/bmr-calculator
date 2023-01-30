import './Modal.css'

type Props = {
    children:  JSX.Element
    start: boolean;
    setStart: any
}

const Modal = (props: Props) => {
    const id = "bdmodal"
    
    if(!props.start) return null;

    const handleBackdropClick = (e: any): void => {
        if(e.target.id) props.setStart(false)
    }   

    return (
        <div className='backdrop' id={id} onClick={handleBackdropClick}>
            <div className='modal' >
                <button type='button' className='btn-modal-close' onClick={() => {props.setStart(false)}}/>
                {props.children}
            </div>
        </div>
    )
}

export default Modal