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
  