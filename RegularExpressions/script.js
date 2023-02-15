'use strict';

// new RegExp('pattern', 'flags');

// const ans = prompt('Введите ваше имя');

// const reg = /n/ig; // /n(что ищем)/ig(флаг)/
// console.log(reg.test(ans));

// флаги
// i поиск не зависимо от регистра
// g поиск нескольких вхождений
// m включает многострочный режим

// const ans = prompt('Введите ваше число');

// const reg = /\d/g;
// console.log(ans.match(reg));

// классы
//\D не числа
//|W не буквы

// \d ищем цифры
// \w ищем все слова
// \s ищем все пробелы

// console.log(ans.search(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/\./g, "*"));

// console.log('12-34-56'.replace(/-/g, ':'));

const str = 'My names is R2D2'; 

console.log(str.match(/\w\d\w\d/i));