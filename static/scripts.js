var menuOpen = document.getElementById('open-mobile-menu');
var menu = document.getElementById('mobile-nav');
var menuClose = document.getElementsByClassName('close-nav')[0];

var triggers = document.getElementsByClassName('tab-trigger');
var closers = document.getElementsByClassName('alert-close');
var tabs = document.getElementsByClassName('schedule--body__day');

var arrowsRight = document.getElementsByClassName('arrow-rigth');
var arrowsLeft = document.getElementsByClassName('arrow-left');

var menutriggers = document.querySelectorAll('.anchorlink');

var chatTriggers = document.querySelectorAll('.side-trigger');

window.onload = async function() {
  menuOpen.addEventListener('click',openMenu);
  menuClose.addEventListener('click',openMenu);
  
  for(let i = 0; i < menutriggers.length; i++) {
    menutriggers[i].addEventListener('click',scrollToDiv);
  }

  for(let i = 0; i < chatTriggers.length; i++) {
    chatTriggers[i].addEventListener('click',showBoxes);
  }

  for(let i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener('click',changeTab);
  }

  for(let i = 0; i < closers.length; i++) {
    closers[i].addEventListener('click',closeAlert);
  }

  for(let i = 0; i < arrowsRight.length; i++) {
    arrowsRight[i].addEventListener('click',changeTabsRight);
  }

  for(let i = 0; i < arrowsRight.length; i++) {
    arrowsLeft[i].addEventListener('click',changeTabsLeft);
  }

  function changeTabsRight(event) {
    for(let i = 0; i < triggers.length - 1; i++) {
     let hadClassTrigger =  triggers[i].classList.contains('active');
     if(hadClassTrigger) {
      for(let i = 0; i < triggers.length; i++) {
        triggers[i].classList.remove('active');
        tabs[i].classList.remove('active');
      }
      let trigs = triggers[i + 1];
      let dests = tabs[i + 1];
      trigs.classList.add('active');
      dests.classList.add('active');
      return false;
     } else {

     }
    }
  }

  function changeTabsLeft(event) {
    for(let i = 0; i < triggers.length; i++) {
     let hadClassTrigger =  triggers[i].classList.contains('active');
     if(hadClassTrigger) {
      if( i === 0) {
        return false
      } else {
        for(let i = 0; i < triggers.length; i++) {
          triggers[i].classList.remove('active');
          tabs[i].classList.remove('active');
        }
        let trigs = triggers[i - 1];
        let dests = tabs[i - 1];
        trigs.classList.add('active');
        dests.classList.add('active');
        return false;
      }
     } else {

     }
    }
  }

  function closeAlert(event) {
    event.preventDefault();
    event.target.parentNode.style.display = "none";
  }

  function scrollToDiv(e) {
    let targetted = e.target;
    e.preventDefault();
    let goTo = targetted.getAttribute('href');
    let element = document.querySelector(goTo);
    console.log(element);
    let distance = element.offsetTop;
    console.log(distance);
    let height1 = document.getElementById('site-header').clientHeight;
    console.log(distance,height1);
    window.scrollTo(
      {
        top: distance - height1,
        left: 0,
        behavior: 'smooth'
      }
    );
  }

  function changeTab(event) {
    let element = event.target;
    let destiny = element.getAttribute('rel');
    let tab = document.getElementById(destiny);

    for(let i = 0; i < triggers.length; i++) {
      triggers[i].classList.remove('active');
      tabs[i].classList.remove('active');
    }
    element.classList.add('active');
    tab.classList.add('active');
  }

  function showBoxes() {
    let triggered = event.target;
    let element = triggered.closest('.side-trigger');
    let reference = element.dataset.ref;
    let tabs = document.querySelectorAll('.box-tab');
    
    for(let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
      chatTriggers[i].classList.remove('active');
    }

    document.querySelector('#'+reference).classList.add('active');
    element.classList.add('active');

  }

  function openMenu() {
    menu.classList.toggle('active');
  }
}