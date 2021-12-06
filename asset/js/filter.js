window.addEventListener("load", function() {
    var btnShows = document.querySelector(".js-show-filter");
    var btnClose = document.querySelector(".btn-exit");
    var modal = document.querySelector(".modal");

    function openModal() {
        modal.classList.add("openFilter");
    }

    function closeModal() {
        modal.classList.remove("openFilter");
    }

    btnShows.addEventListener("click", openModal);
    btnClose.addEventListener("click", closeModal);

    // OPEN , CLOSE NAVIGATION
    const btnOpen = document.querySelector(".js-open-nav");
    const btnCloses = document.querySelector(".btn-moblie-tablet-exit");
    const nav = document.querySelector(".nav-mobile-tablet");

    function openNav() {
        nav.classList.add("open");
    }

    function closeNav() {
        nav.classList.remove("open");
    }

    btnOpen.addEventListener("click", openNav);
    btnCloses.addEventListener("click", closeNav);

    // SCROLL
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            document.getElementById("scroll-to-top").style.display = "block";
        } else {
            document.getElementById("scroll-to-top").style.display = "none";
        }
    }
    document
        .getElementById("scroll-to-top")
        .addEventListener("click", function() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });

    // OPEN MENU CHILD

    const btnBrand = document.querySelector(".js-open-brand");
    const btnAccessory = this.document.querySelector(".js-open-accessory");
    const menuChilds1 = document.querySelectorAll(".menu-child-mobile-tablet1");
    const menuChilds2 = document.querySelectorAll(".menu-child-mobile-tablet2");
    const iconDown = document.querySelector(".js-open-accessory i");
    console.log(iconDown);
    var count = 0;
    var countAccessory = 0;

    function openMenuChildBrand() {
        count++;
        for (var menuChild of menuChilds1) {
            if (count % 2 != 0) {
                menuChild.classList.add("openChild");
                iconDown.classList.add("rotate180");
            } else {
                menuChild.classList.remove("openChild");
                iconDown.classList.remove("rotate180");
            }
        }
    }

    function openMenuChildAccessory() {
        countAccessory++;
        for (var menuChild of menuChilds2) {
            if (countAccessory % 2 != 0) {
                menuChild.classList.add("openChild");
            } else {
                menuChild.classList.remove("openChild");
            }
        }
    }

    btnBrand.addEventListener("click", openMenuChildBrand);
    btnAccessory.addEventListener("click", openMenuChildAccessory);
});