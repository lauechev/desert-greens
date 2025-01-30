const toggleTag = document.querySelector<HTMLAnchorElement>('.toggle-nav');
const mainTag = document.querySelector<HTMLElement>('main');

// when i click the toggle tag, toggle a class of open on the main tag
// and if it's open, make the toggle tag say closed
// and if it's shut, make the toggle tag say Menu
toggleTag?.addEventListener('click', function (event) {
  event.preventDefault();
  mainTag?.classList.toggle('open');

  if (mainTag?.classList.contains('open')) {
    toggleTag.innerHTML = `<img src="/assets/close.svg"> Close`;
  } else {
    toggleTag.innerHTML = `<img src="/assets/menu.svg"> Menu`;
  }
});
