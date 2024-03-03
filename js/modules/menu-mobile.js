import outsideClick from './outsideClick.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="lista"]');
  const eventos = ['click'];

  function openMenu() {
    menuList.classList.add('ativo');
    menuButton.classList.add('ativo');
    outsideClick(menuList, eventos, () => {
      menuList.classList.remove('ativo');
      menuButton.classList.remove('ativo');
    });
  }

  if (menuButton) {
    openMenu();
    eventos.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu);
    });
  }
}
