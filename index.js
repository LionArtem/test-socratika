const button = document.querySelector('.description__button');
const overlay = document.querySelector('.modul');

button.addEventListener('click', () => overlay.classList.add('modul__onn'));
overlay.addEventListener('click', (evt) => closeModule(evt));

const closeModule = (evt) => {
  if (evt.target === evt.currentTarget) {
    overlay.classList.remove('modul__onn');
  }
};
