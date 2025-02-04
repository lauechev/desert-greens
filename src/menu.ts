const toggleTag = document.querySelector<HTMLAnchorElement>('.toggle-nav');
const mainTag = document.querySelector<HTMLElement>('main');
// const imgTag = toggleTag?.querySelector<HTMLImageElement>('img.icon');
// const textTag = toggleTag?.querySelector<HTMLSpanElement>('span');

// when i click the toggle tag, toggle a class of open on the main tag
// and if it's open, make the toggle tag say closed
// and if it's shut, make the toggle tag say Menu
toggleTag?.addEventListener('click', function (event) {
  event.preventDefault();
  mainTag?.classList.toggle('open');

  if (mainTag?.classList.contains('open')) {
    toggleTag.innerHTML = `<img src="${import.meta.env.BASE_URL}close.svg"> Close`;
  } else {
    toggleTag.innerHTML = `<img src="${import.meta.env.BASE_URL}menu.svg"> Menu`;
  }

  // if (mainTag?.classList.contains('open')) {
  //   imgTag!.src = '/publico/close.svg';
  //   textTag!.textContent = 'Close';
  // } else {
  //   imgTag!.src = '/menu.svg';
  //   textTag!.textContent = 'Menu';
  // }
});
