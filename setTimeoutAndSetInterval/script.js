// const timerId = setTimeout(function (text) { //Запуск функции через 2 секунды
//   console.log(text);
// }, 2000, 'Hello'); //3 аргумент  'Hello' передается в параметр text

const btn = document.querySelector('.btn');
let timerId,
    i = 0;

btn.addEventListener('click', () => {
  //timerId = setTimeout(logger, 2000); //Одиночный запуск таймера по клику на кнопку
  timerId = setInterval(logger, 500); //Запуск таймера по клику на кнопку, если загрузка функции logger займет больше чем 500ms, время внутри функции setInterval перестанет учитываться(работать).
});

function logger() {
  if (i === 3) {
    clearInterval(timerId); //Останвливает таймера на странице
  }
  console.log("text");
  i++;
}

let id = setTimeout(function log() { //Здесь setTimeout будет работать, как setInterval, но при этом учитывать указанное время
  console.log('Hello');
  id = setTimeout(log, 500);
}, 500);





