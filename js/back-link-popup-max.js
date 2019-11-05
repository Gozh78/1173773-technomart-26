var writeUsLink = document.querySelector(".write-us-button");

var backLinkPopup = document.querySelector(".back-link");
var close = backLinkPopup.querySelector(".button-close");

var form = backLinkPopup.querySelector(".back-link-form");
var userName = backLinkPopup.querySelector("[name=user-name]");
var email = backLinkPopup.querySelector("[name=user-email]");
var text = backLinkPopup.querySelector("[name=user-comment]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("userName");
} catch (err) {
  isStorageSupport = false;
}

writeUsLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  backLinkPopup.classList.add("modal-show");

  if (storage) {
    userName.value = storage;
    email.focus();
  } else {
    userName.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  backLinkPopup.classList.remove("modal-show");
  backLinkPopup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  if (!userName.value || !email.value || !text.value) {
    evt.preventDefault();
    backLinkPopup.classList.remove("modal-error");
    backLinkPopup.offsetWidth = backLinkPopup.offsetWidth;
    backLinkPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      local.Storage.setItem("name", name.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (backLinkPopup.classList.contains("modal-show")) {
      backLinkPopup.classList.remove("modal-show");
      backLinkPopup.classList.remove("modal-error");
    }
  }
});
