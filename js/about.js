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

var links = document.querySelectorAll('.list-group-item');

// Add click event listener to each link
links.forEach(function(link) {
  link.addEventListener('click', function() {
    // Remove 'activeAbout' class from all links
    links.forEach(function(item) {
      item.classList.remove('activeAbout');
    });
    
    // Add 'activeAbout' class to the clicked link
    this.classList.add('activeAbout');
  });
});

// Get all the links in the list
var links = document.querySelectorAll('.list-group-item');

// Add click event listener to each link
links.forEach(function(link) {
  link.addEventListener('click', function() {
    // Remove 'activeAbout' class from all tab panes
    var tabPanes = document.querySelectorAll('.tab-pane');
    tabPanes.forEach(function(pane) {
      pane.classList.remove('show', 'activeAbout');
    });
    
    // Add 'activeAbout' class to the clicked link
    this.classList.add('activeAbout');
    
    // Get the target tab pane and add 'show' and 'activeAbout' classes
    var targetPaneId = this.getAttribute('href').substring(1); // Remove '#'
    var targetPane = document.getElementById(targetPaneId);
    targetPane.classList.add('show', 'activeAbout');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Get the hash from the URL
  var hash = window.location.hash;

  // If a hash exists
  if (hash) {
      // Remove 'active' class from all list items
      var listItems = document.querySelectorAll('.list-group-item');
      listItems.forEach(function(item) {
          item.classList.remove('activeAbout');
      });

      // Remove 'active' class from all tab panes
      var tabPanes = document.querySelectorAll('.tab-pane');
      tabPanes.forEach(function(pane) {
          pane.classList.remove('show', 'activeAbout');
      });

      // Add 'active' class to the corresponding list item
      var listItem = document.querySelector('.list-group-item[href="' + hash + '"]');
      listItem.classList.add('activeAbout');

      // Add 'show' and 'active' classes to the corresponding tab pane
      var tabPane = document.querySelector('.tab-pane' + hash);
      tabPane.classList.add('show', 'activeAbout');
  }
});


