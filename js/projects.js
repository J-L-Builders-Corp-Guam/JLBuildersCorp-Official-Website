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


// once page is loaded, include the carousel and table

$(document).ready(function() {
  // Hide all carousel and table elements initially
  $('[id^="carousel-"]').hide();
  $('[id^="table-"]').hide();
  
  // Get the hash from the URL
  var hash = window.location.hash;

  // If a hash exists
  if (hash) {
    // Remove 'active' class from all list items
    $('.list-group-item').removeClass('activeAbout');

    // Remove 'active' class from all tab panes
    $('.tab-pane').removeClass('show activeAbout');

    // Add 'active' class to the corresponding list item
    var listItem = $('.list-group-item[href="' + hash + '"]');
    listItem.addClass('activeAbout');

    // Add 'show' and 'active' classes to the corresponding tab pane
    var tabPane = $(hash);
    tabPane.addClass('show activeAbout');

    // Show the corresponding carousel and table
    var targetId = hash.substring(1);
    $('#carousel-' + targetId).show();
    $('#table-' + targetId).show();
  } else {
    // If no hash exists, set default project page as active
    var defaultProjectPage = $('#list-profile-list'); // Adjust this selector to target your default project page link
    defaultProjectPage.addClass('activeAbout');

    // Add 'show' and 'active' classes to the corresponding tab pane
    var defaultTabPane = $('#commercial'); // Adjust this selector to target your default tab pane
    defaultTabPane.addClass('show activeAbout');

    // Show the corresponding carousel and table for the default project page
    $('#carousel-commercial').show();
    $('#table-commercial').show();
  }

  // Show the corresponding carousel and table when a list-group item is clicked
  $('.list-group-item').click(function() {
    var targetId = $(this).attr('href').substring(1);

    // Remove 'active' class from all list items
    $('.list-group-item').removeClass('activeAbout');

    // Remove 'active' class from all tab panes
    $('.tab-pane').removeClass('show activeAbout');

    // Add 'active' class to the clicked list item
    $(this).addClass('activeAbout');

    // Add 'show' and 'active' classes to the corresponding tab pane
    $('#' + targetId).addClass('show activeAbout');

    // Hide all carousel and table elements initially
    $('[id^="carousel-"]').hide();
    $('[id^="table-"]').hide();

    // Show the corresponding carousel and table
    $('#carousel-' + targetId).show();
    $('#table-' + targetId).show();
  });
});


// swiperjs
var swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

