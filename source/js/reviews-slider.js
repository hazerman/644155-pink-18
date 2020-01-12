var reviewsWrapper = document.querySelector(".reviews");
var reviewsContainer = reviewsWrapper.querySelector(".reviews__container");
var reviewsList = reviewsWrapper.querySelector(".reviews__list");
var reviewsItems = reviewsList.querySelectorAll(".reviews__item");
var reviewsBtnPrev = reviewsContainer.querySelector(".reviews__slide-button--prev");
var reviewsBtnNext = reviewsContainer.querySelector(".reviews__slide-button--next");

if (reviewsWrapper) {

  for (var i = 1; i < reviewsItems.length; i++) {
    reviewsItems[i].classList.add("reviews__item--hidden");
  }

  reviewsBtnPrev.classList.remove("reviews__slide-button--no-js");
  reviewsBtnNext.classList.remove("reviews__slide-button--no-js");

  var reviewsDotList = document.createElement("ul");
  reviewsDotList.classList.add("dot-list");
  reviewsDotList.classList.add("reviews__dot-list");
  reviewsContainer.appendChild(reviewsDotList);
  var reviewsDotItem = [];
  var reviewsDotBtn = [];

  for (var i = 0; i < reviewsItems.length; i++) {
    reviewsDotItem[i] = document.createElement("li");
    reviewsDotItem[i].classList.add("dot-list__item");
    reviewsDotList.appendChild(reviewsDotItem[i]);

    reviewsDotBtn[i] = document.createElement("button");
    reviewsDotBtn[i].classList.add("dot-list__button");
    reviewsDotItem[i].appendChild(reviewsDotBtn[i]);

    var reviewsAlly = document.createElement("span");
    reviewsAlly.classList.add("visually-hidden");
    reviewsAlly.textContent = (i+1) + " слайд";
    reviewsDotBtn[i].appendChild(reviewsAlly);
  }

  var findCurrentSlide = function() {
    var CurSlide = 0;
    for (var i = 0; i < reviewsItems.length; i++) {
      if (!reviewsItems[i].classList.contains("reviews__item--hidden")) {
        CurSlide = i;
      }
    }
    return CurSlide;
  }

  reviewsDotBtn[findCurrentSlide()].classList.add("dot-list__button--active");
}
