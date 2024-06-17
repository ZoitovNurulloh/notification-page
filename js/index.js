let cardLink = document.querySelectorAll(".card__link");
let cardQuantity = document.getElementById("card__quantity");
let cardMessage = document.getElementById("card__message");
let cardLinkActive = document.querySelectorAll(".card__link--active");

let a = 3;
cardLink.forEach((i) => {
  i.addEventListener("click", function() {
    i.classList.remove("card__link--active");
    cardQuantity.innerHTML = --a;
    if(a === 0) {
    cardQuantity.classList.add("card__quantity--d");
    }
  });
})


let cardClick = document.getElementById("card__link--js").addEventListener("click", function() {
  cardMessage.classList.toggle("card__message--active")
});

const btn = document.getElementById("btn").addEventListener("click", function() {
  cardLink.forEach((i) => {
    i.classList.remove("card__link--active");
  })
  cardQuantity.classList.add("card__quantity--d");
});
