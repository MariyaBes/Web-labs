import React from "react";
import {CSSTransition} from "react-transition-group";

const ModalAnimation = ({ modal, setActive, setShowTrigger }) => {
    const closeModal = () => {
        setActive(false);
    }

    return(
        <CSSTransition
            timeout={500}
            classNames="modal-anim"
            in={modal}
            unmountOnExit
        >
            <div className={modal ? 'modal-anim active' : 'modal-anim'} onClick={() => setActive(false)}>
                <div className={'modal-content'}>
                    <h3>React Transition Group - библиотека для простых анимаций именно перехода</h3>
                    <button className={'modalBtn'} onClick={closeModal}>Закрыть</button>
                </div>

            </div>
        </CSSTransition>
    )
}

export default ModalAnimation;