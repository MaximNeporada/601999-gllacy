  var link = document.querySelector(".contacts__button");
  var popup = document.querySelector(".modal");
  var close = popup.querySelector(".modal__close");
  var overlay = document.querySelector(".overlay")
  var form = popup.querySelector("form");
  var fname = popup.querySelector("#name-id");
  var email = popup.querySelector("#modal__email-id");
  var areatext = popup.querySelector("#comment")

  var isStorageSupport = true;
  var storage = "";
  var overlay = document.querySelector(".overlay")

  try {
    storage = localStorage.getItem("fname");
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal--show");
    overlay.classList.add("overlay--block");
    if (storage) {
      fname.value = storage;
      password.focus();
    } else {
      fname.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal--show");
    overlay.classList.remove("overlay--block")
    popup.classList.remove("modal--error");
  });
  overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal--show");
    overlay.classList.remove("overlay--block")
    popup.classList.remove("modal--error");
  });

  form.addEventListener("submit", function (evt) {
    if (!fname.value || !email.value || !areatext.value) {
      evt.preventDefault();
      popup.classList.remove("modal--error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal--error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("fname", fname.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal--show")) {
        popup.classList.remove("modal--show");
        popup.classList.remove("modal--error");
        overlay.classList.remove("overlay--block")
      }
    }
  });