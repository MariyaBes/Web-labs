import './App.css';
import User from './components/User';
import List from './components/List';
import Person from './components/Person';
import Counter from './components/Counter';
import Product from './components/Product';
import React, { useState } from 'react';

function App() {
  const user = { name: "Mariya", age: 20}
  const myArr = ['Project', 145, 62.5, 'Threard', 'React', 'About', -92];
  const arrNumber = [470, 370, 54, 22, 0, -347, 2415, -4];
  const person = ({
    name: 'Mariya', age: 20, email: 'bessarabenko.m.i20@gmail.com'
  })
  const [counter, setCounter] = useState(0);
  const product = [{id: 1, name: "ACER Laptop", price: 49999, desc: 'Красивый, стильный, модный, молодежный'},
  {id: 2, name: "MSI Laptop", price: 78999, desc: 'Игровой'},
  {id: 3, name: "LENOVO Laptop", price: 34999, desc: 'Офисный'}]

  function onIncrement () {
    setCounter(prevCount => (
      counter + 1
    ))
  }

  return (
    <div className="App">
      <h1>Задание 1</h1>

      <User user={user}/>

      <h1>Задание 2</h1>
      <List myArr = {myArr} arrNumber={arrNumber}/>

      <h1>Задание 3</h1>
      <Person person={person}/>

      <h1>Задание 4</h1>
      <Product product={product}/>

      <h1>Задание 5</h1>
      <Counter counter={counter} change={onIncrement}/>
    </div>
  );
}

export default App;

