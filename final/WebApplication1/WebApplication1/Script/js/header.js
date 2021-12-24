$(document).ready(function () {
    $(".active-menu-mobile").click(function () {
        $(".header .menu-mobile").css({ "left": "0" })
    })

    $(".header .menu-mobile .close-menu-mobile").click(function () {
        $(".header .menu-mobile").css({ "left": "-400px" })
    })

    var toggle = false
    $(".header .menu-mobile .p-menu > li").click(function () {
        if (!toggle)
            $(".header .menu-mobile .p-menu .toggle-icon span").html("<i class='fa fa-angle-up'></i>")
        else
            $(".header .menu-mobile .p-menu .toggle-icon span").html("<i class='fa fa-angle-down'></i>")
        $(this).children(".submenu").toggle()
        toggle = !toggle;
    })
})

$(document).mouseup(function (e) {
    if (!$(".header .menu-mobile").is(e.target)
        && $(".header .menu-mobile").has(e.target).length === 0)
        $(".header .menu-mobile").css({ "left": "-400px" })
})