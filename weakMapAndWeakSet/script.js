"use strict";

// let user = { name: 'Ivan' };

// const map = new WeakMap();
// map.set(user, 'data');

// user = null;

// console.log(map.has(user));

let cache = new WeakMap();

function cacheUser(user) {
  if (!cache.has(user)) { //Если пользователя нет в кэш
    cache.set(user, Date.now()); //cache.set() устанавливает нового пользователя, Date.now() отслеживает когда зашел новый пользователь
  }

  return cache.get(user);
}

let lena = {name: 'Elena'};
let alex = { name: 'Alex' };

cacheUser(lena);
cacheUser(alex);

lena = null;

console.log(cache.has(lena));
console.log(cache.has(alex));

//Weakset поддерживает: add, has, delete

let messages = [
  { text: 'Hello', from: 'John'},
  { text: 'World', from: 'Alex'},
  { text: '....', from: 'M'}
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
// readMessages.add(messages[1]);

readMessages.add(messages[0]);

messages.shift();

console.log(readMessages.has(messages[0]));