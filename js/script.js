const mapButton = document.querySelector(".map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

const feedbackButton = document.querySelector(".contacts-button");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackClose = feedbackPopup.querySelector(".modal-close");

const login = feedbackPopup.querySelector("[name=fullname]");
const email = feedbackPopup.querySelector("[name=email]");
const feedbackForm = feedbackPopup.querySelector("form");

const buyButtons = document.querySelectorAll(".buy-button")
const buyPopup = document.querySelector(".modal-basket")
const buyClose = buyPopup.querySelector(".modal-close");

const basket = document.querySelector(".menu-item-basket");
let basketCount = document.querySelector(".basket-count");

mapButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.remove("modal-show");
});



for (let buyButton of buyButtons) {
	buyButton.addEventListener("click", function (evt) {
		evt.preventDefault();
		buyPopup.classList.add("modal-show");
		basketCount.textContent++;
		basket.classList.add("filled");	
	});
}

for (let buyButton of buyButtons) {
	buyClose.addEventListener("click", function (evt) {
		evt.preventDefault();
		buyPopup.classList.remove("modal-show");	
	});
}

feedbackButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedbackPopup.classList.add("modal-show");
	login.focus();
});

feedbackClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedbackPopup.classList.remove("modal-show");
});

feedbackForm.addEventListener("submit", function (evt) {
	if (!login.value || !email.value) {
		evt.preventDefault();
		feedbackPopup.classList.add("modal-error");
	}
});



