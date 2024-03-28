let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navlink');
let header = document.querySelector('header');
let logo = document.querySelector('.logo');
// let logomob = document.querySelector('.logomob');
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
      // logomob.src = '/images/logo2sm.png'; 
      bgmenu.src = '/images/burgerw.png';
    }
  });

  // If no section is in view, reset header background color and logo src
  if (window.scrollY === 0) {
    header.style.backgroundColor = 'transparent'; // Reset background color
    logo.src = '/images/logotransbg.png';
    // logomob.src = '/images/logotranssm.png';
    bgmenu.src = '/images/burgerr.png'; 

    // Reset link classes
    navLinks.forEach(link => {
      link.classList.remove('active');
      link.classList.remove('inactive');
    });
  }
};

// animation function

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible || elementTop > windowHeight) {
          reveals[i].classList.add("activepar");
          reveals[i].classList.remove("reset-position"); // Remove reset position class if previously added
      } else {
          reveals[i].classList.remove("activepar");
          reveals[i].classList.add("reset-position"); // Add reset position class if revealing condition is not met
      }
  }
}

window.addEventListener("scroll", reveal);


window.addEventListener("scroll", reveal);

// end

// emailjs


function sendemail(event) {
  event.preventDefault();

  var thename = document.getElementById('name').value;
  var themail = document.getElementById('email').value;
  var thenumber = document.getElementById('number').value;
  var themsg = document.getElementById('msg').value;
  var validmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var validnumber = /^\+?\d+$/;

  var errors = [];

  if (thename == "") {
    errors.push("Please Enter Name");
  } 
  if (themail == "" || !themail.match(validmail)) {
    errors.push("Please Enter Valid Email");
  } 
  if (!thenumber.match(validnumber)) {
    errors.push("Please Enter a Valid Number");
  }
  if (themsg == "") {
    errors.push("Please Enter Message");
  }
  if (errors.length > 0) {
    alert(errors.join("\n"));
  } else {
    var contactdetail = {
      to_name: 'J&L Builders Team',
      from_name: thename,
      from_email: themail,
      message: 'contact number of the sender is: \n' + thenumber + '\n' + themsg
    };

    emailjs.send('service_qnnyqnq', 'template_cepqsnk', contactdetail).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message Sent!");
      },
      (error) => {
        console.log("FAILED...", error);
        alert("Error...");
      }
    );
  }
};

  

function sendemail2(event) {
  event.preventDefault();

  var thename2 = document.getElementById('name2').value;
  var themail2 = document.getElementById('email2').value;
  var thenumber2 = document.getElementById('number2').value;
  var themsg2 = document.getElementById('msg2').value;
  var validmail2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var validnumber2 = /^\+?\d+$/;

  var errors2 = [];

  if (thename2 == "") {
    errors2.push("Please Enter Name");
  } 
  if (themail2 == "" || !themail2.match(validmail2)) {
    errors2.push("Please Enter Valid Email");
  } 
  if (!thenumber2.match(validnumber2)) {
    errors2.push("Please Enter a Valid Number");
  }
  if (themsg2 == "") {
    errors2.push("Please Enter Message");
  }
  if (errors2.length > 0) {
    alert(errors2.join("\n"));
  } else {
    var contactdetail2 = {
      to_name: 'J&L Builders Team',
      from_name: thename2,
      from_email: themail2,
      message: 'contact number of the sender is: \n' + thenumber2 + '\n' + themsg2
    };

    emailjs.send('service_qnnyqnq', 'template_cepqsnk', contactdetail2).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message Sent!");
      },
      (error) => {
        console.log("FAILED...", error);
        alert("Error...");
      }
    );
  }
};

// don't forget to change service id, template id and user_id for jnl email address
