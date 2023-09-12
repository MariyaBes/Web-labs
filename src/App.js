import './App.css';
import User from './components/User';
import List from './components/List';
import Person from './components/Person'
import React from 'react';

function App() {
  const user = { name: "Mariya", age: 20}
  console.log(user)
  const myArr = ['Project', 145, 62.5, 'Threard', 'React', 'About', -92];
  const arrNumber = [470, 370, 54, 22, 0, -347, 2415, -4];
  const person = ({
    name: 'Mariya', age: 20, email: 'bessarabenko.m.i20@gmail.com'
  })

  return (
    <div className="App">
      <h1>Задание 1</h1>

      <User user={user}/>

      <h1>Задание 2</h1>
      <List myArr = {myArr} arrNumber={arrNumber}/>

      <h1>Задание 3</h1>
      <Person name={person.name} age={person.age} email={person.email}/>
    </div>
  );
}

export default App;

