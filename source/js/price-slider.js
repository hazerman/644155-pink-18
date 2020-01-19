"use strict"

if (document.querySelector(".price")) {
  var priceWrapper = document.querySelector(".price");
  var priceContainer = priceWrapper.querySelector(".price__container");
  var priceTableWrapper = priceContainer.querySelector(".price__table-wrapper");
  var priceTable = priceTableWrapper.querySelector(".price__table");
  var priceRates = priceWrapper.querySelectorAll(".price__title");

  priceTableWrapper.classList.remove("price__table-wrapper--no-js");
  priceRates[2].classList.add("price__title--current");
  priceTable.classList.add("price__table--show-2-slide");

  var priceDotList = document.createElement("ul");
  priceDotList.classList.add("dot-list");
  priceDotList.classList.add("price__dot-list");
  priceContainer.appendChild(priceDotList);
  var priceDotItem = [];
  var priceDotBtn = [];

  for (var i = 0; i < priceRates.length - 1; i++) {
    priceDotItem[i] = document.createElement("li");
    priceDotItem[i].classList.add("dot-list__item");
    priceDotList.appendChild(priceDotItem[i]);

    priceDotBtn[i] = document.createElement("button");
    priceDotBtn[i].classList.add("dot-list__button");
    priceDotItem[i].appendChild(priceDotBtn[i]);

    var priceAlly = document.createElement("span");
    priceAlly.classList.add("visually-hidden");
    priceAlly.textContent = i + 1 + " слайд";
    priceDotBtn[i].appendChild(priceAlly);
  }

  var findCurrentRate = function() {
    var CurSlide = 0;
    for (var i = 1; i < priceRates.length; i++) {
      if (priceRates[i].classList.contains("price__title--current")) {
        CurSlide = i - 1;
      }
    }
    return CurSlide;
  };

  priceDotBtn[findCurrentRate()].classList.add("dot-list__button--active");

  var changeSlide = function (btn, slide, counter) {
    btn.addEventListener("click", function (evt) {
      evt.preventDefault();

      var currentSlide = findCurrentRate();
      var startString = "price__table--show-"
      var finishString = "-slide";

      priceDotBtn[currentSlide].classList.remove("dot-list__button--active");
      priceRates[currentSlide + 1].classList.remove("price__title--current");
      priceTable.classList.add(startString + counter + finishString);
      priceTable.classList.remove(startString + (currentSlide + 1) + finishString);

      btn.classList.add("dot-list__button--active");
      slide.classList.add("price__title--current");
    })
  }

  for (var i = 0; i < priceRates.length - 1; i++) {
    changeSlide(priceDotBtn[i], priceRates[i+1], i+1);
  }
}
