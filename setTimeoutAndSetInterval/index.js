const btn = document.querySelector('.btn');

function myAnimation() {
  const elem = document.querySelector('.box');
  let pos = 0; //Начальная позиция квадрата

  const id = setInterval(frame, 10);
  function frame() {
    if (pos == 300) {
      clearInterval(id); //Очищение и восстановление анимации
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

btn.addEventListener('click', myAnimation);