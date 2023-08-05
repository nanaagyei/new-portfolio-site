// Listen for scroll and show button after 100px scroll
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("backToTop").classList.add("show");
    } else {
      document.getElementById("backToTop").classList.remove("show");
    }
  }
  
  // Scroll to top on click
  document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({top: 0, behavior: "smooth"}); 
  });


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toogleMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

