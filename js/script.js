var login = document.querySelector(".js-login-link");

if (login) {
  login.addEventListener("click", function (evt) {
    evt.preventDefault();
  });
}

var link = document.querySelector(".write-button");
var popup = document.querySelector(".modal-write");

if (link) {
  var close = popup.querySelector(".modal-close");

  var form = popup.querySelector("form");
  var user = popup.querySelector(".js-user-name");
  var email = popup.querySelector(".js-user-email");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!user.value || !email.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });
}


var mapLink = document.querySelector(".map-image-link");
var mapPopup = document.querySelector(".modal-map");

if (mapLink) {
  var mapClose = mapPopup.querySelector(".modal-close");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });
}


var productButton = document.querySelector(".catalog-cart-button");
var productPopup = document.querySelector(".modal-cart");


if (productButton) {

  var productClose = productPopup.querySelector(".modal-close");

  productButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    productPopup.classList.add("modal-show");
  });

  productClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    productPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (productPopup.classList.contains("modal-show")) {
        productPopup.classList.remove("modal-show");
      }
    }
  });
}
