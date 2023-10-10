import './App.css';
import React, { useState } from 'react';
import ImageContainer from './components/ImageContainer';
import UserGreeting from './components/UserGreeting';
import GuestGreeting from './components/GuestGreeting';
import AddShapeForm from "./components/AddShapeForm";
import ShapeList from "./components/ShapeList";
import ControlledTextarea from "./components/ControlledTextarea";
import UncontrolledTextarea from "./components/UncontrolledTextarea";

function App() {

  const [user, setUser] = useState('');
  const [logged, setLogged] = useState(false);
  const [shapes, setShapes] = useState([]);

  function inLogin () {
    if(user !== ''){
      return setLogged(true);
    }
  }

  function isLogout(){
    setLogged(false);
    return setUser('')
  }

    const typeShape = (newShape) => {
        setShapes([...shapes, newShape]);
    };


  return (
    <div className="App">
      <h1>Задание 1: ImageContainer и CustomizableImage</h1>
      <ImageContainer />

      <h1>Задание 2</h1>
        <ControlledTextarea />
        <UncontrolledTextarea />

      <h1>Задание 3: Greeting</h1>
      <input placeholder='Введите свое имя' 
      className='inpText' 
      type={'text'} 
      value={user} 
      onChange={(e) => setUser(e.target.value)}>
      </input>

      <button className='btnClick' onClick={inLogin}>Войти</button>

      {logged ? (<UserGreeting user={user} isLogout={isLogout}/>) : (<GuestGreeting/>)}

      <h1>Задание 4</h1>
        <AddShapeForm addShape={typeShape}/>
        <ShapeList shape={shapes}/>
    </div>
  );
}

export default App;

