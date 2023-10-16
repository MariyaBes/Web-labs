import React, {useState} from "react";

const AddShapeForm = ({ addShape }) => {
    const [shape, setShape] = useState('');

    const buttonSubmit = (e) => {
        e.preventDefault();
        if (shape.trim() === '') {
            return;
        }
        addShape(shape);
        setShape('');
    };

    return (
        <div>
            <form onSubmit={buttonSubmit}>
                <input
                    type='text'
                    className='inpText'
                    placeholder='Квадрат, круг...'
                    value={shape}
                    onChange={(e) =>
                        setShape(e.target.value)}
                />

                <button
                    className="btnClick"
                    onClick={buttonSubmit}
                >Добавить фигуру</button>

            </form>
        </div>
    )
}

export default AddShapeForm;