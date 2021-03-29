const c1 = document.getElementById('c-1');

window.onscroll = function() {
  if (window.scrollY >= (window.innerHeight) * 0.8 - 120) {
    document.querySelector(".nav-logo").src = "assets/handgemacht-t.svg";
  } else {
    document.querySelector(".nav-logo").src = "assets/handgemacht.png";
  }
};

c1.addEventListener("click", () => {
  if (document.body.contains(document.querySelector(".collapse"))) {
    document.querySelector(".collapse").style.animation = "img-anim-r .5s ease-out forwards"
    c1.children[0].style.animation = "arrow-anim-r .3s ease-out forwards"
    setTimeout(function(){
      document.querySelector(".collapse").remove();
    }, 500);
  } else {
    c1.children[0].style.animation = "arrow-anim .3s ease-out forwards";
    c1.children[1].innerHTML +=
      `
      <img class="collapse" src="assets/collapse.jpg" alt="">
    `;
    document.querySelector(".collapse").style.animation = "img-anim .5s ease-out forwards"
  }
})
