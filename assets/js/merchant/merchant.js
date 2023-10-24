document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".button-4o2 card-me2 card-8bc"); // Use the class of your card containers
  
    cards.forEach((card) => {
      card.addEventListener("mouseover", function () {
        card.classList.add("flipped");
      });
  
      card.addEventListener("mouseout", function () {
        card.classList.remove("flipped");
      });
    });
  });
  