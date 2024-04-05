/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
/*
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
*/

function init(){
  var x = document.getElementsByClassName('icon')[0];
  // if (x != null)
  // {
  //   console.log("icon exists");
  //   console.log(x);
  // }
  function myFunction() {
    var menu = document.getElementsByClassName('myLinks')[0];
    // if (menu == null)
    // {
    //   console.log("myLinks doesn't exist");
    //   console.log(x);
    // }
    
    if (menu.style.display == "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
    
    
    // alert("clicked!");
  }

  x.addEventListener("click", myFunction);
}

window.addEventListener('load', init)