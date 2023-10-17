import './App.css';
import React, { useState } from 'react';
import AddShapeForm from "./components/AddShapeForm";
import ShapeList from "./components/ShapeList";
import useInput from "./components/useInput";
import ModalAnimation from "./components/ModalAnimation";


function App() {
  const [shapes, setShapes] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [showTrigger, setShowTrigger] = useState(true);

  const input = useInput('', true);

    const typeShape = (newShape) => {
        setShapes([...shapes, newShape]);
    };

    const deleteShape = (index) => {
        setShapes(prevShapes => prevShapes.filter((_, i) => i !== index));
    };


  return (
    <div className="App">

      <h1>Задание 1</h1>
        <AddShapeForm addShape={typeShape} />
        <ShapeList shape={shapes} delShapes={deleteShape}/>

      <h1>Задание 2</h1>
        <div className={'inputUse'}>
            <label>Текст: {input.value}</label>
            <input
                type='text'
                value={input.value}
                onChange={input.onChange}
                onBlur={input.onBlur}
            />
            {input.error && <span>{input.error}</span>}
        </div>

        <h1>Задание 3</h1>
        {showTrigger ? <button
            onClick={() => setModalActive(true)}
            className={'btnClick'}>Открыть модальное окно</button> : null}

        <ModalAnimation modal={modalActive} setActive={setModalActive} setShowTrigger={setShowTrigger}/>
    </div>
  );
}

export default App;

