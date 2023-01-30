'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

// Получение высоты и ширины без css свойств margin и border.
// const width = box.clientWidth;
// const height = box.clientHeight;

// Получение высоты и ширины с css свойствами margin и border.
// const width = box.offsetWidth;
// const height = box.offsetHeight;

// Получение высоты и ширины со скроллом.
const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);

// Раскрытие всего содержимого на странице кликом по кнопке.

btn.addEventListener('click', () => {
  // box.style.height = box.scrollHeight + 'px';
  console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect());

const style = window.getComputedStyle(box);

console.log(style.display);
console.log(style);
