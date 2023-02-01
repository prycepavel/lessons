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
      
    if (t <= 0) { // Проверяем, вышло ли время акции. Если вышло, время не вычисляется и таймер выводит нули.
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

  // Modal

  // Способ для вывода модального окна, с использованием двух разных кнопок вызова расположенных на странице
  const modalTrigger = document.querySelectorAll('[data-modal]'),  // Кнопка вызывающая модальное окно
    modal = document.querySelector('.modal'),  // Модальное окно
    modalCloseBtn = document.querySelector('[data-close]');  // Закрытие модального окна
  
  // Функция открытия модального окна
  function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    // modal.classList.toggle('show'); // Если у элемента есть класс show, он будет удален (альтернатива двум написанным строчкам выше)
    document.body.style.overflow = 'hidden';  // При открытие модального окна, фиксирует страницу, запрешает её скроллить путем добавления стилей для элемента body
    clearInterval(modalTimerId);  // Если пользователь сам открыл модальное окно, открытие окна по таймеру не сработает
  }
  
  // Открытие модального окна по клику на кнопку
  modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  // // Способ для вывода модального окна, с использованием только одной кнопки вызова расположенной на странице.
  // modalTrigger.addEventListener('click', () => {
  //   modal.classList.add('show');
  //   modal.classList.remove('hide');
  //   // modal.classList.toggle('show');
  //   document.body.style.overflow = 'hidden';
  // });

  // Функция закрытия модального окна
  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    // modal.classList.toggle('show'); // Если у элемента нет класса show, он будет добавлен (альтернатива двум написанным строчкам выше)
    document.body.style.overflow = '';  // При закрытие модального окна, удаляет стили в body запрещающие скролл
  }

  // Закрытие модального окна по клику на крестик или кнопку закрытия
  modalCloseBtn.addEventListener('click', closeModal);

  // Закрытие модального окна кликнув по затемненному фону вокруг модального окна
  modal.addEventListener('click', (event) => {
    if (event.target === modal) { // Если место куда кликнул пользователь event.target будет строго совпадать с модальным окном modal
      closeModal();
    }
  });

  // Закрытие модального окна нажатием на кнопку клавиатуры Esc
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape' && modal.classList.contains('show')) { // Проверяем что нажатая кнопка точно Esc, и открыто модальное окно
      closeModal();
    }
  });

  // Открытие модального окна по таймеру
  const modalTimerId = setTimeout(openModal, 6000);

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) { // Проверяет долистал ли пользователь до конца.
      openModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  // Показывать модальное окно если пользователь долистал страницу до конца
  window.addEventListener('scroll', showModalByScroll);

});

