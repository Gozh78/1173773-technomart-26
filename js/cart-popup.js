var cartLink = document.querySelectorAll(".cart-link");

var cartPopup = document.querySelectorAll(".cart-addition");

var close = cartPopup.querySelector(".button-close-cart");
var continueButton = cartPopup.querySelector(".continue-shopping-button");

cartLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  cartPopup.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

continueButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (cartPopup.classList.contains("modal-show")) {
      cartPopup.classList.remove("modal-show");
    }
  }
});
