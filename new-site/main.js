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
    pageContainer.style.height = initialBodyHeight + 'px';
    document.body.style.height = initialBodyHeight + "px";
  } else {
    document.querySelector(".nav-logo").src = "assets/handgemacht.png";
    navImgs.forEach(item => {
      item.style.display = 'inline'
    });
  }
};

//Mobile Menu
document.addEventListener("DOMContentLoaded", () => {
  const menu = new MmenuLight(document.querySelector("#my-menu"), "(max-width: 767px)");

  const navigator = menu.navigation();
  const drawer = menu.offcanvas();

  document.querySelector("a.menu-collapse").addEventListener("click", (evnt) => {
    evnt.preventDefault();
    drawer.open();
  });
});

// tooltips
const tipText = [
  {
    kons: "Mit Konservierungsstoffen",
    geschmack: "Mit Geschmacksverstärker",
    farbstoff: "Mit Farbstoff",
    antiox: "Mit Antioxidationsmittel",
    phosphat: "Mit Phosphat",
    proteine: "Mit Proteine",
    milchProteine: "Mit Milchproteine",
  }, {
    gluten: "Enthält glutenhaltige/s Getreide/-Erzeugnisse",
    krebs: "Enthält Krebstiere/-Erzeugnisse",
    weizen: "Weizen",
    fisch: "Enthält Fisch/-Erzeugnisse",
    milch: "Enthält Milch/-Erzeugnisse (laktosehaltig)",
    sesam: "Enthält Sesamsamen/-Erzeugnisse",
    ei: "Enthält Ei/-Erzeugnisse",
    nuss: "Enthält Schalenfrüchte/Nüsse bzw. Nusserzeugnisse",
    weichtiere: "Enthält Weichtiere/-Erzeugnisse",
    sellerie: "Enthält Sellerie/-Erzeugnisse",
    senf: "Enthält Senf/-Erzeugnisse",
  }
]

tippy('.ka-gw', {
  content: `<div>
    <div>
      <h4>Zusatzstoffe</h4>
      <ul>
        <li>${tipText[0].kons}</li>
        <li>${tipText[0].antiox}</li>
      </ul>
    </div>
    <div class="info">
      <h4>Allergene</h4>
      <ul>
        <li>${tipText[1].gluten}</li>
        <li>${tipText[1].weizen}</li>
      </ul>
    </div>
  </div>`,
  allowHTML: true,
  trigger: 'click',
  interactive: true
});

tippy('.ka-gm', {
  content: `<div>
    <div>
      <h4>Zusatzstoffe</h4>
      <ul>
        <li>${tipText[0].kons}</li>
        <li>${tipText[0].antiox}</li>
      </ul>
    </div>
    <div class="info">
      <h4>Allergene</h4>
      <ul>
        <li>${tipText[1].gluten}</li>
        <li>${tipText[1].milch}</li>
      </ul>
    </div>
  </div>`,
  allowHTML: true,
  trigger: 'click',
  interactive: true
});

tippy('.ka-gem', {
  content: `<div>
    <div>
      <h4>Zusatzstoffe</h4>
      <ul>
        <li>${tipText[0].kons}</li>
        <li>${tipText[0].antiox}</li>
      </ul>
    </div>
    <div class="info">
      <h4>Allergene</h4>
      <ul>
        <li>${tipText[1].gluten}</li>
        <li>${tipText[1].ei}</li>
        <li>${tipText[1].milch}</li>
      </ul>
    </div>
  </div>`,
  allowHTML: true,
  trigger: 'click',
  interactive: true
});

tippy('.k-gwm', {
  content: `<div>
    <div>
      <h4>Zusatzstoffe</h4>
      <ul>
        <li>${tipText[0].kons}</li>
      </ul>
    </div>
    <div class="info">
      <h4>Allergene</h4>
      <ul>
        <li>${tipText[1].gluten}</li>
        <li>${tipText[1].weizen}</li>
        <li>${tipText[1].milch}</li>
      </ul>
    </div>
  </div>`,
  allowHTML: true,
  trigger: 'click',
  interactive: true
});

tippy('.k-gwen', {
  content: `<div>
    <div>
      <h4>Zusatzstoffe</h4>
      <ul>
        <li>${tipText[0].kons}</li>
      </ul>
    </div>
    <div class="info">
      <h4>Allergene</h4>
      <ul>
        <li>${tipText[1].gluten}</li>
        <li>${tipText[1].weizen}</li>
        <li>${tipText[1].ei}</li>
        <li>${tipText[1].nuss}</li>
      </ul>
    </div>
  </div>`,
  allowHTML: true,
  trigger: 'click',
  interactive: true
});

tippy('.ka-gwen', {
  content: `<div>
    <div>
      <h4>Zusatzstoffe</h4>
      <ul>
        <li>${tipText[0].kons}</li>
        <li>${tipText[0].antiox}</li>
      </ul>
    </div>
    <div class="info">
      <h4>Allergene</h4>
      <ul>
        <li>${tipText[1].gluten}</li>
        <li>${tipText[1].weizen}</li>
        <li>${tipText[1].ei}</li>
        <li>${tipText[1].nuss}</li>
      </ul>
    </div>
  </div>`,
  allowHTML: true,
  trigger: 'click',
  interactive: true
});

tippy('.fapH-gwmsS', {
  content: `<div>
    <div>
      <h4>Zusatzstoffe</h4>
      <ul>
        <li>${tipText[0].farbstoff}</li>
        <li>${tipText[0].antiox}</li>
        <li>${tipText[0].phosphat}</li>
      </ul>
    </div>
    <div class="info">
      <h4>Allergene</h4>
      <ul>
        <li>${tipText[1].gluten}</li>
        <li>${tipText[1].weizen}</li>
        <li>${tipText[1].milch}</li>
        <li>${tipText[1].sesam}</li>
      </ul>
    </div>
  </div>`,
  allowHTML: true,
  trigger: 'click',
  interactive: true
});

tippy('.ka-ge', {
  content: `<div>
    <div>
      <h4>Zusatzstoffe</h4>
      <ul>
        <li>${tipText[0].kons}</li>
        <li>${tipText[0].antiox}</li>
      </ul>
    </div>
    <div class="info">
      <h4>Allergene</h4>
      <ul>
        <li>${tipText[1].gluten}</li>
        <li>${tipText[1].ei}</li>
      </ul>
    </div>
  </div>`,
  allowHTML: true,
  trigger: 'click',
  interactive: true
});

tippy('.ka-gwfn', {
  content: `<div>
    <div>
      <h4>Zusatzstoffe</h4>
      <ul>
        <li>${tipText[0].kons}</li>
        <li>${tipText[0].antiox}</li>
      </ul>
    </div>
    <div class="info">
      <h4>Allergene</h4>
      <ul>
        <li>${tipText[1].gluten}</li>
        <li>${tipText[1].weizen}</li>
        <li>${tipText[1].fisch}</li>
        <li>${tipText[1].nuss}</li>
      </ul>
    </div>
  </div>`,
  allowHTML: true,
  trigger: 'click',
  interactive: true
});

tippy('.kg-gwems', {
  content: `<div>
    <div>
      <h4>Zusatzstoffe</h4>
      <ul>
        <li>${tipText[0].kons}</li>
        <li>${tipText[0].geschmack}</li>
      </ul>
    </div>
    <div class="info">
      <h4>Allergene</h4>
      <ul>
        <li>${tipText[1].gluten}</li>
        <li>${tipText[1].weizen}</li>
        <li>${tipText[1].milch}</li>
        <li>${tipText[1].senf}</li>
      </ul>
    </div>
  </div>`,
  allowHTML: true,
  trigger: 'click',
  interactive: true
});

tippy('.apH-gemsw', {
  content: `<div>
    <div>
      <h4>Zusatzstoffe</h4>
      <ul>
        <li>${tipText[0].antiox}</li>
        <li>${tipText[0].phosphat}</li>
      </ul>
    </div>
    <div class="info">
      <h4>Allergene</h4>
      <ul>
        <li>${tipText[1].gluten}</li>
        <li>${tipText[1].ei}</li>
        <li>${tipText[1].milch}</li>
        <li>${tipText[1].senf}</li>
        <li>${tipText[1].weichtiere}</li>
      </ul>
    </div>
  </div>`,
  allowHTML: true,
  trigger: 'click',
  interactive: true
});

tippy('.kapm-gwm', {
  content: `<div>
    <div>
      <h4>Zusatzstoffe</h4>
      <ul>
        <li>${tipText[0].kons}</li>
        <li>${tipText[0].antiox}</li>
        <li>${tipText[0].proteine}</li>
        <li>${tipText[0].milchProteine}</li>
      </ul>
    </div>
    <div class="info">
      <h4>Allergene</h4>
      <ul>
        <li>${tipText[1].gluten}</li>
        <li>${tipText[1].weizen}</li>
        <li>${tipText[1].milch}</li>
      </ul>
    </div>
  </div>`,
  allowHTML: true,
  trigger: 'click',
  interactive: true
});

tippy('.k', {
  content: `<div>
    <div>
      <h4>Zusatzstoffe</h4>
      <ul>
        <li>${tipText[0].kons}</li>
      </ul>
    </div>
  </div>`,
  allowHTML: true,
  trigger: 'click',
  interactive: true
});

tippy('.aw', {
  content: `<div>
    <div>
      <h4>Allergene</h4>
      <ul>
        <li>${tipText[1].gluten}</li>
        <li>${tipText[1].weizen}</li>
      </ul>
    </div>
  </div>`,
  allowHTML: true,
  trigger: 'click',
  interactive: true
});

tippy('.ef', {
  content: `<div>
    <div>
      <h4>Allergene</h4>
      <ul>
        <li>${tipText[1].ei}</li>
        <li>${tipText[1].fisch}</li>
      </ul>
    </div>
  </div>`,
  allowHTML: true,
  trigger: 'click',
  interactive: true
});

tippy('.m', {
  content: `<div>
    <div>
      <h4>Allergene</h4>
      <ul>
        <li>${tipText[1].milch}</li>
      </ul>
    </div>
  </div>`,
  allowHTML: true,
  trigger: 'click',
  interactive: true
});

tippy('.gm', {
  content: `<div>
    <div>
      <h4>Allergene</h4>
      <ul>
        <li>${tipText[1].gluten}</li>
        <li>${tipText[1].milch}</li>
      </ul>
    </div>
  </div>`,
  allowHTML: true,
  trigger: 'click',
  interactive: true
});

tippy('.gem', {
  content: `<div>
    <div>
      <h4>Allergene</h4>
      <ul>
        <li>${tipText[1].gluten}</li>
        <li>${tipText[1].ei}</li>
        <li>${tipText[1].milch}</li>
      </ul>
    </div>
  </div>`,
  allowHTML: true,
  trigger: 'click',
  interactive: true
});

tippy('.gefm', {
  content: `<div>
    <div>
      <h4>Allergene</h4>
      <ul>
        <li>${tipText[1].gluten}</li>
        <li>${tipText[1].ei}</li>
        <li>${tipText[1].fisch}</li>
        <li>${tipText[1].milch}</li>
      </ul>
    </div>
  </div>`,
  allowHTML: true,
  trigger: 'click',
  interactive: true
});

tippy('.gmwT', {
  content: `<div>
    <div>
      <h4>Allergene</h4>
      <ul>
        <li>${tipText[1].gluten}</li>
        <li>${tipText[1].milch}</li>
        <li>${tipText[1].weichtiere}</li>
      </ul>
    </div>
  </div>`,
  allowHTML: true,
  trigger: 'click',
  interactive: true
});

tippy('.gfm', {
  content: `<div>
    <div>
      <h4>Allergene</h4>
      <ul>
        <li>${tipText[1].gluten}</li>
        <li>${tipText[1].fisch}</li>
        <li>${tipText[1].milch}</li>
      </ul>
    </div>
  </div>`,
  allowHTML: true,
  trigger: 'click',
  interactive: true
});

tippy('.gemsLs', {
  content: `<div>
    <div>
      <h4>Allergene</h4>
      <ul>
        <li>${tipText[1].gluten}</li>
        <li>${tipText[1].ei}</li>
        <li>${tipText[1].milch}</li>
        <li>${tipText[1].sellerie}</li>
        <li>${tipText[1].senf}</li>
      </ul>
    </div>
  </div>`,
  allowHTML: true,
  trigger: 'click',
  interactive: true
});

tippy('.ge', {
  content: `<div>
    <div>
      <h4>Allergene</h4>
      <ul>
        <li>${tipText[1].gluten}</li>
        <li>${tipText[1].ei}</li>
      </ul>
    </div>
  </div>`,
  allowHTML: true,
  trigger: 'click',
  interactive: true
});

tippy('.gemn', {
  content: `<div>
    <div>
      <h4>Allergene</h4>
      <ul>
        <li>${tipText[1].gluten}</li>
        <li>${tipText[1].ei}</li>
        <li>${tipText[1].milch}</li>
        <li>${tipText[1].nuss}</li>
      </ul>
    </div>
  </div>`,
  allowHTML: true,
  trigger: 'click',
  interactive: true
});

tippy('.gkem', {
  content: `<div>
    <div>
      <h4>Allergene</h4>
      <ul>
        <li>${tipText[1].gluten}</li>
        <li>${tipText[1].krebs}</li>
        <li>${tipText[1].ei}</li>
        <li>${tipText[1].milch}</li>
      </ul>
    </div>
  </div>`,
  allowHTML: true,
  trigger: 'click',
  interactive: true
});

tippy('.gemsL', {
  content: `<div>
    <div>
      <h4>Allergene</h4>
      <ul>
        <li>${tipText[1].gluten}</li>
        <li>${tipText[1].ei}</li>
        <li>${tipText[1].milch}</li>
        <li>${tipText[1].sellerie}</li>
      </ul>
    </div>
  </div>`,
  allowHTML: true,
  trigger: 'click',
  interactive: true
});






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
