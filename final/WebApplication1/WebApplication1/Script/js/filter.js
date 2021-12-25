window.addEventListener("load", function() {
    var btnShows = document.querySelector(".js-show-filter");
    var btnClose = document.querySelector(".btn-exit");
    var overlay = document.querySelector(".overlay");
    var modal = document.querySelector(".modal");

    function openModal() {
        modal.classList.add("openFilter");
        overlay.classList.add("openFilter");
    }

    function closeModal() {
        modal.classList.remove("openFilter");
        overlay.classList.remove("openFilter");
    }

    function close() {
        overlay.classList.remove("openFilter");
    }

    btnShows.addEventListener("click", openModal);
    btnClose.addEventListener("click", closeModal);
    overlay.addEventListener("click", close);
});