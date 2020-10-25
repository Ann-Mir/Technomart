const modalFeedBack = document.querySelector(".modal-feedback");
const emailUsButton = document.querySelector(".email-us-button");
const feedBackForm = modalFeedBack.querySelector(".feedback-form");
const userName = modalFeedBack.querySelector(".modal-username");
const userEmail = modalFeedBack.querySelector(".user-email");
const userMessage = modalFeedBack.querySelector(".user-message");
const modalFeedBackCloseButton = modalFeedBack.querySelector(".close-button");

let isStorageSupport = true;
let storageName = "";
let storageUserEmail = "";
let storageUserMessage ="";

try {
  storageName = localStorage.getItem("userName");
  storageUserEmail = localStorage.getItem("userEmail");
  storageUserMessage = localStorage.getItem("userMessage");
} catch (err) {
  isStorageSupport = false;
}


const popupMap = document.querySelector(".modal-popup-map");
const modalCart = document.querySelector(".modal-added-to-cart");
const popupMapCloseButton = popupMap.querySelector(".close-button");

const map = document.querySelector(".map");
const buyButton = document.querySelector(".buy");



/*const modalCartCloseButton = modalCart.querySelector(".close-button");*/
console.log(buyButton);

emailUsButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalFeedBack.classList.add("modal-show");
  userName.focus();
  if (storageName) {
    userName.value = storageName;
    userEmail.focus();
  }
  if (storageUserEmail) {
    userEmail.value = storageUserEmail;
    userMessage.focus();
  }
});

map.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});

buyButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalCart.classList.add("modal-show");
});

modalFeedBackCloseButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalFeedBack.classList.remove("modal-show");
});

feedBackForm.addEventListener("submit", function (evt) {
  if (!userName || !userEmail || !userMessage) {
    evt.preventDefault();
  } else {
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("userEmail", userEmail.value);
    localStorage.setItem("userMessage", userMessage.value);
  }
});

popupMapCloseButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
})

/*
modalCartCloseButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalCart.classList.remove("modal-show");
}) */