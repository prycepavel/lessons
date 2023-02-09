'use strict';

// Filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// Получить все имена меньше 5 символов
// Внутри параметра name находяться элементы массива names по отдельности. Метод filter() результат функции всегда возвращает в виде массива
const shortNames = names.filter(function(name) {
  return name.length < 5;  // Возврат имен из колбэк функции меньше 5 символов
});

console.log(shortNames);

// Map

let answers = ['IvAn', 'AnnA', 'Hello'];

// Каждый элемент массива по отдельности находится в параметер item и будет перебираться
const result = answers.map(item => item.toLowerCase()); // Приводит имена в массиве к нижнему регистру. Метод map() результат функции всегда возвращает в виде массива
console.log(result);

// Every/Some - возврат булинговых значений

const some = [4, 'fgf', 'fgryugdh'];

// Если в массиве есть хоть одно число возвращает true
console.log(some.some(item => typeof(item) === 'number'));

// Если все элементы внутри массива будут числами возвращает true, иначе false
console.log(some.every(item => typeof (item) === 'number'));

// Reduce

// Работа с числами
const arr = [4, 5, 1, 3, 2, 6];

// Параметры sum и current принимают элементы массива
// Первое число которое принимает sum = 0(ноль)
// в sum записуется результат выражения sum + current, в current элемнты массива по очерёдности
// sum 0 + current 4 = 4; 1 итерация
// sum 4 + current 5 = 9; 2 итерация
// sum 9 + current 1 = 10; 3 итерация
// sum 10 + current 3 = 13; 4 итерация
// sum 13 + current 2 = 15; 5 итерация
// sum 15 + current 6 = 21; 6 итерация

const total = arr.reduce((sum, current) => sum + current);

console.log(total); // 21

// Работа с числами и начальным значением sum
const amount = [4, 5, 1, 3, 2, 6];

// Параметры sum и current принимают элементы массива
// Первое число которое принимает sum = 3
// в sum записуется результат выражения sum + current, в current элемнты массива по очерёдности
// sum 3 + current 4 = 7; 1 итерация
// sum 7 + current 5 = 12; 2 итерация
// sum 12 + current 1 = 13; 3 итерация
// sum 13 + current 3 = 16; 4 итерация
// sum 16 + current 2 = 18; 5 итерация
// sum 18 + current 6 = 24; 6 итерация

const solution = amount.reduce((sum, current) => sum + current, 3); // Число 3 записуется в sum, как начальное значение

console.log(solution); // 24

// Работа со строками
const array = ['apple', 'pear', 'plum'];

// При работе со строками во время первой итерации аргументом sum будет apple
const res = array.reduce((sum, current) => `${sum}, ${current}`);

console.log(res); // apple, pear, plum

// Практика с применением всех методов

const obj = {
  ivan: 'persone',
  ann: 'persone',
  dog: 'animal',
  cat: 'animal'
};

const newArr = Object.entries(obj) // entries() преобразовывает свойства и значения объекта в массив
  .filter(item => item[1] === 'persone')  // .filter будет возвращать из массива только те элементы у которых второе значение будет persone, item содержит каждый отдельный массив
  .map(item => item[0]); // .map будет возвращать из массива только первое значение


console.log(newArr);

