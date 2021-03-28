window.onscroll = function(){
   if(window.scrollY >= (window.innerHeight)*0.8-120) {
      document.querySelector(".nav-logo").src="assets/handgemacht-t.svg";
   }else {
      document.querySelector(".nav-logo").src="assets/handgemacht.png";
    }

};
