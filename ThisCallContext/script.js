'use strict';

// 1) Обычная функция: this = Window, но если установлен режим use strict будет this = undefined
// function showThis() {
//   console.log(this);
// }
// showThis();

//Практический пример
function showThis(a, b) {
  console.log(this);
  function sum() {
    console.log(this);
    return a + b;
  }

  console.log(sum());
}

showThis(4, 5);

// 2) Контекст у метода объектов, будет сам объект. Если мы используем метод внутри объекта, то контекст вызова всегда будет ссылаться на это объект.
const obj = {
  a: 20,
  b: 15,
  sum: function () {
    console.log(this);
  }
};

obj.sum();

// 3) this в конструкторах и классах это новый экземпляр орбъекта
function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`Hello ${this.name}`);
  };
}

let ivan = new User('ivan', 23);

// 4) Ручная привязка this
function sayName(surname) {
  console.log(this);
  console.log(this.name + surname);
}

const user = {
  name: 'John'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);


function count(num) {
  return this * num;
}

const double = count.bind(2); // Метод bind записывает аргумент 2 во внутрь значения this которое находится в функции count. Далее ф-ция count помещается во внутрь переменной double.
console.log(double(3)); // Вызвав ф-цию double мы вызываем функцию count, которая внутри переменной double, и предаем ей аргумент 3 в параметр num.
console.log(double(8));

// Работа контекста вызова с кнопкой
const btn = document.querySelector('button'); 

btn.addEventListener('click', function () { // Контекстом вызова будет элемент button на котором произошло событие, если функция внутри обработчика написана в классическом виде.
  console.log(this);
});

btn.addEventListener('click', () => { // В данном примере контекст вызова потерялся, так как у стрелочной функции нет своего контекста.
  console.log(this);
});

const objTest = {
  num: 5,
  sayNumber: function () {
    const say = () => { // Стрелочная функция всегда берет контекст у своего родителя, так как своего у нее нет.
      console.log(this);
    };

    say();
  }
};

objTest.sayNumber();

// Функция умножения на два
const multiplyByTwo = a => a * 2; // return будет подставлен автоматически

console.log(multiplyByTwo(4));