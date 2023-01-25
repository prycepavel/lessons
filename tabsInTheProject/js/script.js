//Код внутри события DOMContentLoaded будет загружен только когда будет полностью загружен весь HTML
window.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');
  
  
  function hideTabContent() { //Прячем табы
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');

    });

    tabs.forEach(item => { //Удаляем класс делающий ссылку в меню табов активной
      item.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent(i = 0) { //если функция вызывается без аргумента, параметр i будет равен 0
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active'); //Добавляет класс делающий ссылку в меню табов активной

  }

  hideTabContent();
  showTabContent();
  
  tabsParent.addEventListener('click', (event) => { //event объект события, элемент по которому кликнули
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) { //Переключает табы
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }

  });

});
