const mynav = document.getElementById("myNav");
const hamBtn = document.getElementById("hamBtn");
const body = document.getElementById("body");
const preLoader = document.getElementById("preloader");


window.addEventListener("load", function () {
	preLoader.classList.add("hidden");
});

hamBtn.addEventListener("click", function () {
	mynav.classList.toggle("hidden");
	body.classList.toggle("overflow-y-hidden");
});

