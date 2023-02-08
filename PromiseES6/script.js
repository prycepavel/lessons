'use strict';

console.log('Запрос данных...');  // Синхронный код

// Создание Promise(Обещания)
const req = new Promise((resolve, reject) => { // Внутри аргументов находятся функции. Параметр esolve принимает в себя функцию req.then. Параметр reject принимает в себя функцию .catch.
  
  setTimeout(() => { // Асинхронный код
    console.log('Подготовка данных...');
  
    const product = {
      name: 'TV',
      price: 2000
    };

    resolve(product); // При запуске функции,объект product передается внутрь функции req.then в качестве аргумента
    
  }, 2000);

});

req.then((product) => { // req.then является функцией и аргументом параметра resolve, также принимает в себя аргумент product функции resolve. Принимает вернувшийся return new Promise и передает его по цепочке(then) в then(data => {console.log(data);});
  return new Promise((resolve, reject) => { // return возвращает Promise в req.then
    
    setTimeout(() => {
      product.status = 'order'; // В объект product добавляются новые свойства status: 'order';
      resolve(product); // При запуске функции, объект product с добавленным свойством product.status = 'order' передается в Promise.
    }, 2000);

  });

}).then(data => { // data принимает в качестве аргумента вернувшийся return new Promise по цепочке(then) в нутри которого модифицированный объект product.
  data.modify = true; // Внутри data находится объект product ему добавляется новое свойство modify: true;
  return data; // Возвращает модифицированный объект в then, и по цепочке передается в следующий then.
}).then(data => { // Принимает возвращенный модифицированный объект
  console.log(data);
}).catch(() => { // является функцией и аргументом параметра reject, выполняется в случае ошибки в коде
  console.error('Произошла ошибка...');
}).finally(() => {
  console.log('Finally');
});
