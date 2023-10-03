import './App.css';
import React from 'react';
import Congratulations from './components/Congratulations';
import Profile from './components/Profile';
import ProfileDouble from './components/ProfileDouble';
import Gallary from './components/Gallary';
import TodoList from './components/TodoList';
import TodoListDouble from './components/TodoListDouble';
import ProfAvatar from './components/ProfAvatar';
import PackingList from './components/PackingList';
import LightSwitch from './components/LigthSwitch';
import Signup from './components/Singup';
import Toolbar from './components/Toolbar';
import Form from './components/Form';


function App () {
  return (
    <div>
      <p> Задание 1. Экспортируйте компонент. Примените экспорт по умолчанию</p>
      <Profile />

      <p>Задание 2. Исправьте оператор return (возврата)</p>
      <ProfileDouble />

      <p>Задание 3. Найдите и исправьте ошибку</p> 
      <Gallary />

      <p> Задание 4. Напишите Congratulations компонент, который возвращает текст Good job!. Выполните именованный экспорт.</p> 
      <Congratulations />

      <p>Задание 5. Нижеприведенный код выдает ошибку Objects are not valid as a React child… . Исправьте ее.</p>
      <TodoList />

      <p>
      Задание 6. Переместите URL-адрес изображения в person объект. Используйте соответствующее поле с URL-адресом в качестве значения атрибута src тега img.
      </p>
      <TodoListDouble />

      <p>Задание 7. Отрегулируйте размер изображения на основе реквизита. В этом примере Avatar получает числовой size реквизит, определяющий img ширину и высоту. Измените Avatar компонент, чтобы он запрашивал ближайший размер изображения на основе реквизита size. В частности, если size меньше 90, передайте в функцию getImageUrl аргумент со значением 's'(«маленький»), иначе 'b' («большой»).</p>
      <ProfAvatar />

      <p>Задание 8. Показывать значок ❌ для неупакованных элементов (значением isPacked является false), используя условный оператор ? : </p>
      <PackingList />

      {/* <p>Задание 9. Исправьте обработчик событий. При нажатии на кнопку фон страницы должен переключаться между белым и черным. Однако при нажатии на нее ничего не происходит. Решить проблему. (Не беспокойтесь о внутренней логике handleClick— с этой частью все в порядке.)</p>
      <LightSwitch /> */}

      <p>Задание 10. Добавьте метод, предотвращающий поведение браузера по умолчанию, перезагрузку страницы</p>
      <Signup />

      <p>Задание 11. В соответствии с кодом ниже, если вы нажмете на любую из кнопок, сначала сработает ее onClick, а затем onClick родительской div. Остановите распространение события.
      </p>
      <Toolbar />

      <p>Задание 12. Оба input имеют обработчики событий onChange, которые пытаются обновить переменные на основе последнего введенного пользователем значения (e.target.value). Однако переменные, похоже, не "запоминают" свои значения между повторными рендерингами. Исправьте это.
</p>
      <Form />

      <p>Задание 13. Вот небольшая форма, которая должна позволить пользователю оставить отзыв. Когда отзыв отправлен, предполагается отобразить сообщение с благодарностью. Однако при этом происходит сбой с сообщением об ошибке: "Rendered lesser hooks than expected". Можете ли вы заметить ошибку и исправить ее?</p>
    </div>
  )
}

export default App;
