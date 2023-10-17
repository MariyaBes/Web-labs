import React from "react";

const Modal = ({title, message, onConfirm, onCancel, active, setActive}) => {
    return(
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className="modal-header">
                <h4>{title}</h4>
            </div>
            <div className={'modal-content'} onClick={e => e.stopPropagation()}>
                <h3>{message}</h3>
                <button className="modalBtn" onClick={onConfirm}>Подтвердить удаление</button>
                <button className="modalBtn" onClick={onCancel}>Закрыть</button>
            </div>
        </div>
    )
}

export default Modal;