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


// function sendemail() {
//   var thename = document.getElementById('name').value;
//   var themail = document.getElementById('email').value;
//   var thenumber = document.getElementById('number').value;
//   var themsg = document.getElementById('msg').value;
//   var validmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
//   if (thename == "") {
//     alert("Please Enter Name");
//   } else if (themail == "" || !themail.match(validmail)) {
//     alert("Please Enter Valid Email");
//   } else if (!(/^\+?\d+$/.test(thenumber))) {
//     alert("Please Enter a Valid Number");
//   } else if (themsg == "") {
//     alert("Please Enter Message");
//   } else {
//     var contactdetail = {
//       to_name: 'J&L Builders Team',
//       from_name: thename,
//       from_email: themail,
//       message: thenumber + ' ' + themsg // Corrected this line
//     };
    
//     emailjs.send('service_qnnyqnq', 'template_cepqsnk', contactdetail).then(function (res) {
//       alert("Email Sent Successfully");
//     }, function(reason) {
//       alert("Error Occurred: " + reason);
//     });
//   }
// }
  

// function sendemail2() {
//   emailjs.init({
//     publicKey: 'CtvMIckQX4OtBchLC',
//   });

//   var thename2 = document.getElementById('name2').value;
//   var themail2 = document.getElementById('email2').value;
//   var thenumber2 = document.getElementById('number2').value;
//   var themsg2 = document.getElementById('msg2').value;
//   var validmail2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
//   if (thename2 == "") {
//     alert("Please Enter Name");
//   }
//   else if (themail2 == "" || !themail2.match(validmail2)) {
//     alert("Please Enter Valid Email");
//   }
//   else if (!(/^\+?\d+$/.test(thenumber2))) {
//     alert("Please Enter a Valid Number");
//   }
//   else if (themsg2 == "") {
//     alert("Please Enter Message");
//   } else {
//     var contactdetail2 = {
//       to_name: 'J&L Builders Team',
//       from_name: thename2,
//       from_email: themail2,
//       message: thenumber2 + ' ' + themsg2 
//     };
    
//     emailjs.send('service_qnnyqnq', 'template_cepqsnk', contactdetail2).then(function (res) {
//       alert("Email Sent Successfully");
//     }, function(reason) {
//       alert("Error Occurred: " + reason);
//     });
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

function sendemail2() {
  var thename2 = document.getElementById('name2').value;
  var themail2 = document.getElementById('email2').value;
  var thenumber2 = document.getElementById('number2').value;
  var themsg2 = document.getElementById('msg2').value;
  var validmail2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (thename2 == "") {
    alert("Please Enter Name");
  }
  else if (themail2 == "" || !themail2.match(validmail2)) {
    alert("Please Enter Valid Email");
  }
  else if (!(/^\+?\d+$/.test(thenumber2))) {
    alert("Please Enter a Valid Number");
  }
  else if (themsg2 == "") {
    alert("Please Enter Message");
  }
  else {
    console.log("Name:", thename2);
    console.log("Email:", themail2);
    console.log("Number:", thenumber2);
    console.log("Message:", themsg2);
    alert("Email Logged to Console");
  }
}

// $(document).ready(function() {
//   resizeBackground();
// });

// $(window).resize(function() {
//   resizeBackground();
// });

