let header = document.querySelector('header');
let logo = document.querySelector('.logo');
let logomob = document.querySelector('.logomob');
let bgmenu = document.querySelector('.bgmenu');
let navLinks = document.querySelectorAll('.navlink');

window.onscroll = () => {
  let fromTop = window.scrollY;

  // Check if user has scrolled beyond the top
  if (fromTop > 0) {
    // Change header background color and logo src
    header.style.backgroundColor = '#2c2c2c';
    logo.src = '/images/logo2.jpg';
    logomob.src = '/images/logo2sm.png'; 
    bgmenu.src = '/images/burgerw.png';

    // Change text color of navigation links to .inactive
    navLinks.forEach(link => {
      link.classList.add('inactive');
    });
  } else {
    // Reset header background color and logo src
    header.style.backgroundColor = '#fcfcfc'; // Reset background color
    logo.src = '/images/logo.jpg';
    logomob.src = '/images/logosm.png';
    bgmenu.src = '/images/burgerr.png'; 

    // Reset text color of navigation links
    navLinks.forEach(link => {
      link.classList.remove('inactive');
    });
  }
};

// mobile parallax effect

window.addEventListener('scroll', function() {
  let scrollPosition = window.scrollY;

  document.querySelectorAll('.mobile .parallax').forEach(function(section) {
    console.log(section);
    let sectionOffsetTop = section.offsetTop;
    let sectionHeight = section.offsetHeight;
    let sectionBottom = sectionOffsetTop + sectionHeight;
    let sectionBg = section.querySelector('.imageSection');
    let bgOffset = (scrollPosition - sectionOffsetTop) * 0.5; // Adjust the speed of the parallax effect

    // Check if the section is in the viewport
    if (scrollPosition + window.innerHeight > sectionOffsetTop && scrollPosition < sectionBottom) {
      // Apply parallax effect
      sectionBg.style.transform = 'translateY(' + bgOffset + 'px)';
    }
  });
});



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


