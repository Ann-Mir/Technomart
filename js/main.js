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

modalFeedBackCloseButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalFeedBack.classList.remove("modal-show");
  modalFeedBack.classList.remove("modal-error");
});

feedBackForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userMessage.value) {
    evt.preventDefault();
    modalFeedBack.classList.remove("modal-error");
    modalFeedBack.offsetWidth = modalFeedBack.offsetWidth;
    modalFeedBack.classList.add("modal-error");
  } else {
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("userEmail", userEmail.value);
    localStorage.setItem("userMessage", userMessage.value);
  }
});

const popupMap = document.querySelector(".modal-popup-map");
const popupMapCloseButton = popupMap.querySelector(".close-button");
const map = document.querySelector(".map");

map.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});

popupMapCloseButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalFeedBack.classList.contains("modal-show")) {
      evt.preventDefault();
      modalFeedBack.classList.remove("modal-show");
      modalFeedBack.classList.remove("modal-error");
    }
    if (popupMap.classList.contains("modal-show")) {
      evt.preventDefault();
      popupMap.classList.remove("modal-show");
    }
  }
});

