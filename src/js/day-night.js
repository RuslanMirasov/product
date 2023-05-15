const body = document.querySelector('.body');
const tumbler = document.querySelector('[data-tumbler]');
if (localStorage.dark !== undefined && localStorage.dark !== '') {
  body.classList.add('dark');
}

tumbler.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    localStorage.dark = '';
  } else {
    body.classList.add('dark');
    localStorage.dark = 'dark';
  }
});
