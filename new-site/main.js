const c1 = document.getElementById('c-1');
const navImgs = document.querySelectorAll("nav>ul>li>a>img");
const allWrapper = document.querySelector(".all-wrapper");
const pageContainer = document.querySelector(".page-container");
let i = 0;
const initialBodyHeight = document.body.offsetHeight - window.innerHeight;


// scroll animation
window.addEventListener("scroll", () => {
  document.body.style.setProperty("--scroll", window.pageYOffset / initialBodyHeight);
}, false);

window.onscroll = function() {
  if (window.scrollY >= (window.innerHeight / 2) * 0.8 - 45) {
    document.querySelector(".nav-logo").src = "assets/handgemacht-t.svg";
    navImgs.forEach(item => {
      item.style.display = 'none'
    });
    pageContainer.style.height = initialBodyHeight +'px';
    document.body.style.height = initialBodyHeight + "px";
  } else {
    document.querySelector(".nav-logo").src = "assets/handgemacht.png";
    navImgs.forEach(item => {
      item.style.display = 'inline'
    });
  }
};


//Mobile Menu
document.addEventListener(
  "DOMContentLoaded", () => {
    const menu = new MmenuLight(
      document.querySelector("#my-menu"),
      "(max-width: 767px)"
    );

    const navigator = menu.navigation();
    const drawer = menu.offcanvas();

    document.querySelector("a.menu-collapse")
      .addEventListener("click", (evnt) => {
        evnt.preventDefault();
        drawer.open();
      });
  }
);


// Picture collapse on the card
/* c1.addEventListener("click", () => {
  if (document.body.contains(document.querySelector(".collapse"))) {
    document.querySelector(".collapse").style.animation = "img-anim-r .5s ease-out forwards"
    c1.children[0].style.animation = "arrow-anim-r .3s ease-out forwards"
    setTimeout(function() {
      document.querySelector(".collapse").remove();
    }, 500);
  } else {
    c1.children[0].style.animation = "arrow-anim .3s ease-out forwards";
    c1.children[1].innerHTML += `
      <img class="collapse" src="assets/collapse.jpg" alt="">
    `;
    document.querySelector(".collapse").style.animation = "img-anim .5s ease-out forwards"
  }
}) */
