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
    header.style.backgroundColor = 'transparent'; // Reset background color
    logo.src = '/images/logotransbg.png';
    logomob.src = '/images/logotranssm.png';
    bgmenu.src = '/images/burgerr.png'; 

    // Reset link classes
    navLinks.forEach(link => {
      link.classList.remove('active');
      link.classList.remove('inactive');
    });
  }
};

// animation about sec
// Function to check if an element is in the viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  let aboutSection = document.getElementById('about');
  let text1 = document.querySelector('.text1');
  let text2 = document.querySelector('.text2');

  if (isInViewport(aboutSection) && !text1.classList.contains('animated')) {
    text1.classList.add('animated');
  }
  
  if (isInViewport(aboutSection) && !text2.classList.contains('animated')) {
    text2.classList.add('animated');
  }

  // Remove scroll event listener once animation is triggered to improve performance
  if (text1.classList.contains('animated') && text2.classList.contains('animated')) {
    window.removeEventListener('scroll', handleScroll);
  }
}

// Add scroll event listener to trigger animation
window.addEventListener('scroll', handleScroll);


// emailJS

// function sendemail() {
//   var userid = "service_qnnyqnq"
//   emailjs.init(userid);
//   var thename = document.getElementById('name').value;
//   var themail = document.getElementById('email').value;
//   var thenumber = document.getElementById('number').value;
//   var themsg = document.getElementById('msg').value;
//   var validmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (thename == "") {
//     alert("Please Enter Name");
//   }
//   else if (themail == "" || themail.match(!validmail)) {
//     alert("Please Enter Valid Email");
//   }
//   else if (!(/^\+?\d+$/.test(thenumber))) {
//     alert("Please Enter a Valid Number");
//   }
//   else if (themsg == "") {
//     alert("Please Enter Message");
//   }
//   else {
//     var contactdetail = {
//       from_name: thename,
//       from_email: themail,
//       message: thenumber, themsg
//     };

//     emailjs.send('service_qnnyqnq', 'template_cepqsnk', contactdetail).then(function (res) {
//       alert("Email Sent Successfully");
//     },
//       reason => {
//         alert("Error Occur");
//       })
//   }
// }

// test button fx
function sendemail() {
  var thename = document.getElementById('name').value;
  var themail = document.getElementById('email').value;
  var thenumber = document.getElementById('number').value;
  var themsg = document.getElementById('msg').value;
  var validmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (thename == "") {
    alert("Please Enter Name");
  }
  else if (themail == "" || !themail.match(validmail)) {
    alert("Please Enter Valid Email");
  }
  else if (!(/^\+?\d+$/.test(thenumber))) {
    alert("Please Enter a Valid Number");
  }
  else if (themsg == "") {
    alert("Please Enter Message");
  }
  else {
    console.log("Name:", thename);
    console.log("Email:", themail);
    console.log("Number:", thenumber);
    console.log("Message:", themsg);
    alert("Email Logged to Console");
  }
}