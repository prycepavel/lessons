// оператор rest собирает из аргументов массив
const log = function (a, b, ...rest) { // ...rest создает масив из аргументов 'operator' и 'usage'
  console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage');

// Параметры по умолчанию
function calcOrDouble(number, basis = 2) {
  console.log(number * basis);
}

calcOrDouble(3);