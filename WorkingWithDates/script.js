'use script';

// const now = new Date(); // Создаем новую дату и помещаем ее в переменную, если Date() без аргумента, отображается текущая дата

// const now = new Date(2020, 5, 1, 20); // Передаем аргументы год, месяц, день, часы. Отсчет месяцев начинается с 0

// const now = new Date('2023-01-28'); // два разных метода выполняющих одно и тоже 
// new Date.parse('2023-01-28');

const now = new Date();

// Методы получения и установки
// console.log(now.setHours(18));
console.log(now.setHours(18, 40));
console.log(now);


// методы получение компонентов даты
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

let start = new Date();

for (let i = 0; i < 100000; i++){
  let some = 1 ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);


