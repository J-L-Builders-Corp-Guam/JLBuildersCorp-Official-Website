let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navlink');
let header = document.querySelector('header');
let logo = document.querySelector('.logo');
let logomob = document.querySelector('.logomob');
let bgmenu = document.querySelector('.bgmenu');

window.onscroll = () => {
  let fromTop = window.scrollY;

  sections.forEach(sec => {
    let sectionId = sec.getAttribute('id');
    let navLink = document.querySelector('.navlink[href="#' + sectionId + '"]');

    if (sec.offsetTop - 150 <= fromTop && sec.offsetTop + sec.offsetHeight - 150 > fromTop) {
      navLinks.forEach(link => {
        if (link === navLink) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
          link.classList.add('inactive');
        }
      });

      // Change header background color and logo src
      header.style.backgroundColor = '#2c2c2c';
      logo.src = '/images/logo2.jpg';
      logomob.src = '/images/logo2sm.png'; 
      bgmenu.src = '/images/burgerw.png';
    }
  });

  // If no section is in view, reset header background color and logo src
  if (window.scrollY === 0) {
    header.style.backgroundColor = '#fcfcfc'; // Reset background color
    logo.src = '/images/logo.jpg';
    logomob.src = '/images/logosm.png';
    bgmenu.src = '/images/burgerr.png'; 

    // Reset link classes
    navLinks.forEach(link => {
      link.classList.remove('active');
      link.classList.remove('inactive');
    });
  }
};

