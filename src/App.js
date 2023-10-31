import './App.css';
import React from 'react';
import useLocalStorage from "./hooks/useLocalStorage";
import {books} from "./data";
import {Books} from "./components/Books";
import Timer from "./components/Timer";
import Albums from "./components/Albums";

function App() {
  const [order, setOrder] = useLocalStorage([], 'order');

  const addToOrder = (id) => {
    const newItem = books.find((item) => item.id === id);

    setOrder([...order, newItem]);
  };

  return (
    <div className="App">
      <div className='app-header-title'>
        <h1 className="app-header-title__head">Работа с сервером.</h1>
        <h2 className="app-header-title__desc">Кастомный хук на основе <strong>useEffect.</strong></h2>
      </div>
      <Books items={books} addToOrder={addToOrder}/>
        <Timer />
        <Albums />
    </div>
  );
}

export default App;

