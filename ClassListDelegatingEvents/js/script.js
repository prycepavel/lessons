const btns = document.querySelectorAll('button');

// console.log(btns[0].classList.length); //Выводит в консоль количество классов первого элемента btns[0] где [0] индекс первой кнопки
// console.log(btns[0].classList.item(0)); //Выводит название классов в консоль, если у элемента их несколько, обращаться к ним нужно по индексу классов которые идут по порядку друг за другом   
// console.log(btns[0].classList.add('red')); //Добавляет класс элементу
// console.log(btns[0].classList.add('black', 'green')); //Добавляет несколько классов элементу
// console.log(btns[0].classList.remove('blue')); //Удаляет класс у элемента
// console.log(btns[0].classList.toggle('blue')); //Если у элемента есть этот класс он будет удален, если его у элемента нет будет добавлен

// console.log(btns[1].classList.add('red')); //Создаем для второго элемента button новый класс red

//Позволяет проверить определённый класс на элементе, если класс есть возвращает true, если нет false
// if (btns[1].classList.contains('red')) {
//   console.log('red');
// }

btns[0].addEventListener('click', () => {
  //Первый вариант реализации
  // if (!btns[1].classList.contains('red')) {
  //   btns[1].classList.add('red');
  // } else {
  //   btns[1].classList.remove('red');
  // }

  console.log(btns[1].classList.toggle('red')); //Второй вариант реализации
});

console.log(btns[0].className); //className устаревшее свойство, новое classList