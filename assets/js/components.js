// components.js
function includeHTML(targetElement, filePath) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        targetElement.innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", filePath, true);
    xhttp.send();
  }
  
  // Include the navigation bar
includeHTML(document.getElementById("navbar-container"), "components/navbar.html");

// Include the footer
includeHTML(document.getElementById("footer-container"), "components/footer.html");

// Include the testimonials component
includeHTML(document.getElementById("testimonials-container"), "components/testimonials.html");