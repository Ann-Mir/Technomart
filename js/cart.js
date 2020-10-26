const buyButtons = document.querySelectorAll(".buy");
const modalCart = document.querySelector(".modal-added-to-cart");
const modalCartCloseButton = modalCart.querySelector(".close-button");
const proceedShoppingButton = modalCart.querySelector(".proceed-shopping");

modalCartCloseButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalCart.classList.remove("modal-show");
}); 

for (const buyButton of buyButtons) {
  buyButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalCart.classList.add("modal-show");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalCart.classList.contains("modal-show")) {
      evt.preventDefault();
      modalCart.classList.remove("modal-show");
    }
  }
});

proceedShoppingButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalCart.classList.remove("modal-show");
});
  