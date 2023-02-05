'use strict';

// Передача данных превращенных в JSON на сервер
const persone = {
  name: 'Alex',
  tel: '+79873456892'
};

console.log(JSON.stringify(persone)); // Объект persone подготовлен для передачи на сервер

// JSON данные приходят с сервера
console.log(JSON.parse(JSON.stringify(persone))); // Переданный с сервера объект persone в формате JSON превращен в объект Javascript

// Создание глубокой копии объекта
const personality = {
  name: 'Alex',
  tel: '+79873456892',
  parents: {
    mom: 'Olga',
    dad: 'Mike'
  }
};

const clone = JSON.parse(JSON.stringify(personality));
clone.parents.mom = 'Ann';
console.log(personality);
console.log(clone);