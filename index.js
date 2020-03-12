/* Sticky Navbar Go To Tab */ 
document.addEventListener("DOMContentLoaded", () => {
  //  little hack to detect if the user is on ie 11
  const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
  // get all the links with an ID that starts with 'sectionLink'
  const listOfLinks = document.querySelectorAll("a[href^='#sectionLink");
  // loop over all the links
  listOfLinks.forEach(function (link) {
    // listen for a click
    link.addEventListener('click',  () => {
      // toggle highlight on and off when we click a link
      listOfLinks.forEach( (link) => {
        if (link.classList.contains('highlighted')) {
          link.classList.remove('highlighted');
        }
      });
      link.classList.add('highlighted');
      // get the element where to scroll
      let ref = link.href.split('#sectionLink');
      ref = "#section" + ref[1];
      // ie 11 does not support smooth scroll, so we will simply scroll
      if (isIE11) {
        window.scrollTo(0, document.querySelector(ref).offsetTop);
      } else {
        window.scroll({
          behavior: 'smooth',
          left: 0,
          // top gets the distance from the top of the page of our target element
          top: document.querySelector(ref).offsetTop
        });
      }
    })
  })
}) 

/* Static Navbar */ 

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();





