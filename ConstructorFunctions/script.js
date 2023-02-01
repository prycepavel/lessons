'use strict';
// Синтаксис стандарта ES5

// Функция конструктор
function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`Hello ${this.name}`);
  };
}

// Создание прототипа, добавляющего свойства в конструктор
User.prototype.exit = function () {
  console.log(`Пользователь ${this.name} вышел`);
};

// Создание объектов со свойствами функции конструктора
const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);