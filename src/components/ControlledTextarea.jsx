import React, {useState} from "react";

const ControlledTextarea = () => {
    const [value, setValue] = useState('');
    function change (e) {
        setValue(e.target.value);
    }

    return (
        <div>
            <h1>Управляемый компонент</h1>
            <textarea
                value={value}
                onChange={change}
            />
            <p>Значение: {value}</p>
        </div>
    )
}

export default ControlledTextarea;