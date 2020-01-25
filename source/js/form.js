"use strict"

if (document.querySelector(".contest__form")) {
  var form = document.querySelector(".contest__form");
  var userName = form.querySelector("#user-name");
  var userSurname = form.querySelector("#user-surname");
  var userEmail = form.querySelector("#user-email");
  var alertError = document.querySelector(".alert--error");
  var alertErrorCloseBtn = alertError.querySelector(".alert__close-button");
  var alertSuccess = document.querySelector(".alert--success");
  var alertSuccessCloseBtn = alertSuccess.querySelector(".alert__close-button");
  var fields = [userSurname, userName, userEmail];

  for (var i = 0; i < fields.length; i++) {
    fields[i].removeAttribute("required");
  }

  var errorFields = [];
  var successFields = [];

  form.addEventListener("submit", function (evt) {
    for (var j = 0; j < successFields.length; j++) {
      successFields[j].classList.remove("form__input-text--error");
    }
    if (userName.value && userSurname.value && userEmail.value) {
      evt.preventDefault();
      alertSuccess.classList.add("popup--show");
    } else {
      evt.preventDefault();
      alertError.classList.add("popup--show");

      for (var i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
          fields[i].classList.add("form__input-text--error");
          errorFields.push(fields[i]);
        } else {
          successFields.push(fields[i]);
          fields[i].classList.remove("form__input-text--error");
        }
      }
      errorFields[0].focus();
      console.log(successFields);
    }
  })

  alertErrorCloseBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    alertError.classList.remove("popup--show");
    errorFields[0].focus();
    errorFields = [];
  })

  alertSuccessCloseBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    alertSuccess.classList.remove("popup--show");
    for (var i = 0; i < fields.length; i++) {
      fields[i].classList.remove("form__input-text--error");
    }
  })
}
