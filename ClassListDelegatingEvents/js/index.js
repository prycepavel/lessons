const wrapper = document.querySelector('.btn-block'),
      btns = document.querySelectorAll('button');

//Делегирование события с родителя (div с классом .btn-block) на его потомков (теги button)
wrapper.addEventListener('click', (event) => { //event содержит всю информацию об объекте по которому кликнули
  if (event.target && event.target.tagName == 'BUTTON') { //(event.target && event.target.matches('button.red')) ещё один способ сравнения внутри условия
    console.log('Hello');
  }
});

const btn = document.createElement('button'); //Создание нового элемента на странице
btn.classList.add('red'); //Добавляет класс новому элементу
wrapper.append(btn); //Помещает элемен btn в конец блока wrapper

// btns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     console.log('Hello');
//   });
// });