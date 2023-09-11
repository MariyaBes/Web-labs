
import { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState(
    {name: "Mariya", age: 20}
  )

  const [liked, setLiked] = useState(false);

  const ageCountInc = () => {
    setUser({...user, age: user.age + 1});
  }

  const ageCountDec = () => {
    setUser({ ...user, age: user.age - 1 });
  }

  function changeName(e) {
    if (e.key === 'Enter') {
      setUser({ ...user, name: e.target.value, age: 20 });
    }
  }

  const chageLike = () => {
    setLiked(!liked
    )
  }

  console.log(user)

  return (
    <div className="App">
      <h2>Задание 2</h2>
      <input
        type="text"
        placeholder="Введите имя"
        value={user.name}
        onChange={e=>setUser(e.target.value)}
        onKeyDown={changeName}
      />

      <h1>Your name: {user.name} </h1>

      <h1>Age: {user.age} </h1>

      <button onClick={ageCountInc}>Increase</button>
      <button onClick={ageCountDec}>Decrease</button>

      <h2>Задание 3</h2>

      <label>
        <input type="checkbox" class='check' onClick={chageLike}></input>
        Мне нравится это
        </label>
      <p>{liked ? "Тебе нравится это" : "Тебе не нравится это"}</p>
    </div>
  );
}

export default App;
