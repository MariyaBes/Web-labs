import React, {useRef} from "react";

const UncontrolledTextarea = () => {
    const textareaRef = useRef();

    const buttonClick = () => {
        alert('Значение textarea: ' + textareaRef.current.value);
    };


    return (
        <div>
            <h1>Неуправляемый компонент c ref</h1>
            <textarea ref={textareaRef} />
            <button onClick={buttonClick}>Получить значение</button>
        </div>
    )
}

export default UncontrolledTextarea;