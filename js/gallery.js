// lazy load
window.addEventListener("scroll", lazyLoad);

function lazyLoad() {
    const images = document.querySelectorAll("img[data-src]");
    
    images.forEach(img => {
        if (isInViewport(img)) {
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
        }
    });
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}






// lightbox

window.addEventListener("load", () => {
  const gallery = document.querySelector(".gallery");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const closeBtn = document.getElementById("closeBtn");

  let currentIndex = 0;
  let startX = 0;
  let startY = 0;

  gallery.addEventListener("click", event => {
      if (event.target.tagName === "IMG") {
          currentIndex = Array.from(gallery.children).indexOf(event.target);
          openLightbox();
          showImage();
      }
  });

  closeBtn.addEventListener("click", closeLightbox);

  prevBtn.addEventListener("click", showPrevImage);
  nextBtn.addEventListener("click", showNextImage);

  lightboxImg.addEventListener("touchstart", touchStart);
  lightboxImg.addEventListener("touchmove", touchMove);

  function openLightbox() {
      lightbox.style.display = "block";
  }

  function closeLightbox() {
      lightbox.style.display = "none";
  }

  function showImage() {
      const imageUrl = gallery.children[currentIndex].src;
      lightboxImg.src = imageUrl;
  }

  function showPrevImage() {
      currentIndex = (currentIndex - 1 + gallery.children.length) % gallery.children.length;
      showImage();
  }

  function showNextImage() {
      currentIndex = (currentIndex + 1) % gallery.children.length;
      showImage();
  }

  function touchStart(event) {
      const touch = event.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
  }

  function touchMove(event) {
      if (!startX || !startY) return;

      const touch = event.touches[0];
      const deltaX = touch.clientX - startX;
      const deltaY = touch.clientY - startY;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
          // Horizontal swipe detected
          if (deltaX > 0) {
              // Swipe right
              showPrevImage();
          } else {
              // Swipe left
              showNextImage();
          }
      }

      // Reset start coordinates
      startX = 0;
      startY = 0;

      // Prevent default scrolling behavior
      event.preventDefault();
  }
});

// end of lightbox code

let header = document.querySelector('header');
let logo = document.querySelector('.logo');
// let logomob = document.querySelector('.logomob');
let bgmenu = document.querySelector('.bgmenu');
let navLinks = document.querySelectorAll('.navlink');

window.onscroll = () => {
  let fromTop = window.scrollY;

  // Check if user has scrolled beyond the top
  if (fromTop > 0) {
    // Change header background color and logo src
    header.style.backgroundColor = '#2c2c2c';
    logo.src = '/images/logo2.jpg';
    // logomob.src = '/images/logo2sm.png'; 
    bgmenu.src = '/images/burgerw.png';

    // Change text color of navigation links to .inactive
    navLinks.forEach(link => {
      link.classList.add('inactive');
    });
  } else {
    // Reset header background color and logo src
    header.style.backgroundColor = '#fcfcfc'; // Reset background color
    logo.src = '/images/logo.jpg';
    // logomob.src = '/images/logosm.png';
    bgmenu.src = '/images/burgerr.png'; 

    // Reset text color of navigation links
    navLinks.forEach(link => {
      link.classList.remove('inactive');
    });
  }
};
