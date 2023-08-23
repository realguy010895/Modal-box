var btn = document.querySelector(".btn");
var modalBox = document.querySelector(".modal-box");
var closeBtn = document.querySelector(".close-btn");
var overlay = document.querySelector(".overlay");

btn.addEventListener("click", function () {
    modalBox.classList.add("show");
});

closeBtn.addEventListener("click", function () {
    modalBox.classList.remove("show");
});

overlay.addEventListener("click", function () {
    modalBox.classList.remove("show");
});

document.addEventListener("keyup", function (e) {
    if (e.keyCode === 27) {
        modalBox.classList.remove("show");
    }
});
