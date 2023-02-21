
// Dyniamic Title  =================================
let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come Back 😥";
});

window.addEventListener("focus", () => {
    document.title = docTitle;
});

// Header Scroll =================================
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 25) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

// nav hide =================================
let navbar1 = document.querySelectorAll(".dropdown");
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".collapse ");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})
navbar1.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.add("show");
    })

});

// outside click  =================================
window.onclick = function (event) {
    if (!event.target.matches('.collapse')) {

        var dropdowns =
            document.getElementsByClassName("collapse");

        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


// scroll bottom to top =================================
const scrollBtn = document.querySelector(".btns-top");
const btnVisibility = () => {
    if (window.scrollY > 400) {
        scrollBtn.style.visibility = "visible";
    } else {
        scrollBtn.style.visibility = "hidden";
    }
};
document.addEventListener("scroll", () => {
    btnVisibility();
});
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Services =================================
var swiper = new Swiper(".mySwiper", {
    // slidesPerView: 1.3,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 4000,
  
    },
    breakpoints: {
      420: {
        slidesPerView: 1.5,
      },
      640: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 1.5,
      },
      1200: {
        slidesPerView: 2,
      },
    },
  });
  



var swiper = new Swiper(".slideyoza", {
    spaceBetween: 20,
    loop: true,
    speed: 4000,
    autoplay: {
      delay: 100,
      disableOnInteraction: true,
    },
    breakpoints: {
      420: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 5,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".next-btn",
      prevEl: ".swiper-button-prev",
    },
  });
  
// =================================
var swiper = new Swiper(".trues-slide", {
    spaceBetween: 0,
    loop: true,
    speed: 2500,
    autoplay: {
      delay: 500,
      disableOnInteraction: true,
    },
    breakpoints: {
      420: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });