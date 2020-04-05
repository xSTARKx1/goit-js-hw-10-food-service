const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  switch: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
};

const classListOfBody = refs.body.classList;
const currentTheme = localStorage.getItem('theme');

refs.switch.addEventListener('change', event => {
  addDarkTheme();

  addLightTheme();

  const message = refs.body.classList.value;
  localStorage.setItem('theme', message);
});

saveCurrentTheme();

function addDarkTheme() {
  if (event.target.checked) {
    classListOfBody.add(Theme.DARK);
    classListOfBody.remove(Theme.LIGHT);
  }
}

function addLightTheme() {
  if (!event.target.checked) {
    classListOfBody.remove(Theme.DARK);
    classListOfBody.add(Theme.LIGHT);
  }
}

function saveCurrentTheme() {
  if (currentTheme) {
    classListOfBody.value = currentTheme;
  }

  if (currentTheme === Theme.DARK) {
    refs.switch.checked = true;
  }
}
