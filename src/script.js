const mynav = document.getElementById("myNav");
const hamBtn = document.getElementById("hamBtn");
const body = document.getElementById("body");
const preLoader = document.getElementById("preloader");

window.addEventListener("load", function () {
	preLoader.classList.add("hidden");
	body.classList.add("overflow-y-scroll");
});

hamBtn.addEventListener("click", function () {
	mynav.classList.toggle("hidden");
	mynav.classList.toggle("flex");
	body.classList.toggle("fixed");
	body.classList.toggle("overflow-y-hidden");
});
