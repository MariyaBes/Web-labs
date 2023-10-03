import React from "react";
// import { getImageUrl } from './utils.js';

//Задание 7. Отрегулируйте размер изображения на основе реквизита. В этом примере Avatar получает числовой size реквизит, определяющий img ширину и высоту. Измените Avatar компонент, чтобы он запрашивал ближаший размер изображения на основе реквизита size. В частности, если size меньше 90, передайте в функцию getImageUrl аргумент со значением 's'(«маленький»), иначе 'b' («большой»).

function Avatar({ person, size }) {

    function getImageUrl (p, s) {
        console.log(p,s);
    }

    const sizeAvatar = size => {
        if (size => 90) {
            return 'b';
        } else {
            return 's';
        }
    }

  return (
    <img
      className="avatar"
      src={getImageUrl(person, sizeAvatar(size))}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function ProfAvatar() {
  return (
    <>
        <Avatar
            size={40}
            person={{ 
            name: 'Gregorio Y. Zara', 
            imageId: '7vQD0fP'
        }}
        />
        <Avatar size = {100}
        person={{
            name:'John Smitt',
            imageId: '12gfu49'
        }}
        />
    </>
  );
}
