const mynav = document.getElementById("myNav");
const hamBtn = document.getElementById("hamBtn");
const body = document.getElementById("body");

hamBtn.addEventListener("click", function () {
	mynav.classList.toggle("hidden");
	body.classList.toggle("overflow-y-hidden");
});
