var menuOpen = document.getElementById('open-mobile-menu');
var menu = document.getElementById('mobile-nav');
var menuClose = document.getElementsByClassName('close-nav')[0];

window.onload = async function() {
  menuOpen.addEventListener('click',openMenu);
  menuClose.addEventListener('click',openMenu);

  function openMenu() {
    menu.classList.toggle('active');
  }
}