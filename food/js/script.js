//  Код внутри события DOMContentLoaded будет загружен только когда будет полностью загружен весь HTML
window.addEventListener('DOMContentLoaded', () => {
  
  // Tabs
  
  const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');
  
  
  function hideTabContent() { //  Прячем табы
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');

    });

    tabs.forEach(item => { // Удаляем класс делающий ссылку в меню табов активной
      item.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent(i = 0) { // если функция вызывается без аргумента, параметр i будет равен 0
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active'); // Добавляет класс делающий ссылку в меню табов активной

  }

  hideTabContent();
  showTabContent();
  
  tabsParent.addEventListener('click', (event) => { //  event объект события, элемент по которому кликнули
    const target = event.target;
    
    //  Переключает табы
    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }

  });

  // Timer

  const deadline = '2023-02-09';

  // Функция определяющая разницу между текущим временем и дедлайном
  function getTimeRemaining(endtime) {
    let days, hours, minutes, seconds;
    const t = Date.parse(endtime) - Date.parse(new Date());
      
    if (t <= 0) { // Проверяем, вышло ли время акции. Если вышло таймер выводит нули.
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor((t / (1000 * 60 * 60) % 24)),
        minutes = Math.floor((t / 1000 / 60) % 60),
        seconds = Math.floor((t / 1000) % 60);
    }
    
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  // Функция проверяет числа даты и время, и если эти числа будут меньше 10, подставляет такому числу 0 (пример: 01, 02, и. т. д...).
  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`; // Подставляем 0 числам от 0 до 9.
    } else {
      return num; // Если число равно 10 и более, возвращаем его обратно без изменений.
    }
  }

  // Функция установки таймера на страницу
  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000); // Запуск функции через каждую секунду
    
    updateClock(); // Чтобы не ждать 1 секунду, функция запускается сразу. Это делается для того чтобы в самом начале загрузки страницы вывести на страницу созданный таймер, и не выводить дефолтные значения даты/время которые прописанны в самой верстке.
    
    // Обновление таймера каждую секунду
    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      // Остановка таймера
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }

  }

  setClock('.timer', deadline);

});

