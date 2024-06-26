// Skrevet av: Daniel Johan Sørby og Simen Blien
/* Kode du må putte på hver side
<script>
      // Loading screen
      $(window).on("load", function () {
        $(".data-loader").fadeOut("fast");
      });

      // Navbar blir solid når du skroller forbi starten av siden
      $(document).ready(function () {
        $(window).scroll(function () {
          var scrollTop = $(window).scrollTop();
          if (scrollTop >= 1) {
            $(".navbar").addClass("solid-nav");
            console.log("solid-nav");
            //$('#navbar-logo').attr('src', './Bilder/Oslo\ Kommune\ Logo\ Transparent\ Hvit.png'); // Endre til solidt bilde når .navbar har .solid-nav
          } else {
            $(".navbar").removeClass("solid-nav");
            console.log("no-solid-nav");

            //$('#navbar-logo').attr('src', './Bilder/Oslo\ Kommune\ Logo\ Transparent.png'); // Endre tilbake til originalt bilde når .navbar ikke har .solid-nav
          }
        });
      });
    </script> */

console.log("index.js is loaded");

var snd = new Audio("../../../Lyd/lamborghini_Huracan.mp3");

window.addEventListener("click", function (e) {
  if (document.getElementById("play").contains(e.target)) {
    if (snd.paused) {
      snd.play();
    } else {
      snd.pause();
      snd.currentTime = 0; // Optional: Reset the audio to the start
    }
  }
});

//     ________          __  __          __
//    / ____/ /_  ____ _/ /_/ /_  ____  / /_
//   / /   / __ \/ __ `/ __/ __ \/ __ \/ __/
//  / /___/ / / / /_/ / /_/ /_/ / /_/ / /_
//  \____/_/ /_/\__,_/\__/_.___/\____/\__/

// Chatbot

// sjekker hvis knappen med id chatbot-logo er trykket på
// hvis ja, så får chatbot id opcatity 100% og chatbot-logo id opacity 0%
const chatbot = document.getElementById("chatbot");
const chatbotLogo = document.getElementById("chatbot-logo");

document.getElementById("chatbot-logo").onclick = function () {
  chatbot.style.opacity = "100%";
  chatbot.style.zIndex = "1000";
  chatbotLogo.style.opacity = "0%";
  console.log("chatbot-logo er trykket på");
};

window.addEventListener("click", function (e) {
  if (chatbot.contains(e.target) || chatbotLogo.contains(e.target)) {
    // Clicked in box
  } else {
    // Clicked outside the box
    chatbot.style.opacity = "0%";
    chatbotLogo.style.opacity = "100%";
    chatbot.style.zIndex = "-1000";
    console.log("utenfor chatbot");
  }
});

// Loading screen
$(window).on("load", function () {
  $(".loading").fadeOut("fast");
});

const loader = document.getElementById("loader");
const tekst = "Prime Wheels";
const fargetBokstaver = 5;
const fart = 100; // Definerer farten. 1000 er ett sekund.

let output = "";
for (let i = 0; i < tekst.length; i++) {
  window.scrollTo(0, 0);
  output += `<span class="gjennomsiktig">${tekst[i]}</span>`;
}

loader.innerHTML = output;

let index = 0;
setInterval(() => {
  const chars = document.querySelectorAll("#loader span");
  for (let i = 0; i < chars.length; i++) {
    const modIndex = (index + i) % tekst.length;
    if (i < fargetBokstaver) {
      chars[modIndex].className = "farget";
    } else {
      chars[modIndex].className = "gjennomsiktig";
    }
  }
  index = (index + 1) % tekst.length;
}, fart);

// Navbar blir solid når du skroller forbi starten av siden
$(document).ready(function () {
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 1) {
      $(".navbar").addClass("solid-nav");
      console.log("solid-nav");
      //$('#navbar-logo').attr('src', './Bilder/Oslo\ Kommune\ Logo\ Transparent\ Hvit.png'); // Endre til solidt bilde når .navbar har .solid-nav
    } else {
      $(".navbar").removeClass("solid-nav");
      console.log("no-solid-nav");

      //$('#navbar-logo').attr('src', './Bilder/Oslo\ Kommune\ Logo\ Transparent.png'); // Endre tilbake til originalt bilde når .navbar ikke har .solid-nav
    }
  });
});

// Navbar forsvinner når du scroller ned og kommer tilbake når du scroller opp
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};

/* Slideshow */

let slideIndex = 0;
const slides = document.querySelector(".slides");
const slideWidth = 500; // Set this to the width of your images
let slideInterval;

function updateSlidePosition() {
  slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.children.length;
  updateSlidePosition();
  resetInterval();
}

function prevSlide() {
  slideIndex =
    (slideIndex - 1 + slides.children.length) % slides.children.length;
  updateSlidePosition();
  resetInterval();
}

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("prev").addEventListener("click", prevSlide);

resetInterval(); // Start the interval when the page loads
